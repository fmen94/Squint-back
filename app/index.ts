import { ApolloServer } from "apollo-server";
import { buildSchema, Int } from "type-graphql";
import logger from "./helpers/logins/login.helper";
import BadRequestException from "./exceptions/bad-request.exception";
import { SchemaOptions } from "./resolvers";
import jinst from 'jdbc/lib/jinst';
import Pool from 'jdbc/lib/pool';
import { ExpirationStrategy, MemoryStorage } from "node-ts-cache";

if (!jinst.isJvmCreated()) {
  jinst.addOption("-Xrs");
  jinst.setupClasspath([`${__dirname}/../drivers/*.jar`]);
}

var config = {
  url: process.env.jdbc_url,
  user: process.env.db_user,
  password: process.env.db_password,
  minpoolsize: 2,
  maxpoolsize: 20
};

const myCache = new ExpirationStrategy(new MemoryStorage());
//Funcion principal del proyecto
const init = async (port: any) => {
  logger.info(`Loading schemas`);
  //lee todos los schemas importados de ./resolvers/index.ts
  const schema = await buildSchema(SchemaOptions);
  //La coneccion a base
  logger.info(`Connectiong databases`);
  let connection = new Pool(config);
  
  //Se Crea el server
  logger.info(`Initializing server`);
  const server = new ApolloServer({
    schema,
    playground: true,
    //Se crea el context
    context: ({ req }) => {
      //Esta validacion esta pendiente para cuando este en produccion
      // if (!req.headers.page_id) {
      //   throw new BadRequestException("Page_id is Invalid");
      // }
      return { id: req.headers.page_id, connection, myCache };
    },
  });

  const { url } = await server.listen(port);
  logger.info(`Server is running, GraphQL Playground available at ${url}`);
  return server;
};

//Se inicializa el server
init(process.env.PORT_GRAPHQL);
