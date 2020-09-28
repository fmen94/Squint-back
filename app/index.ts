import { ApolloServer } from "apollo-server";
import { buildSchema, Int } from "type-graphql";
import logger from "./helpers/logins/login.helper";
import BadRequestException from "./exceptions/bad-request.exception";
import { SchemaOptions } from "./resolvers";

import { Pool } from "pg";
import { ExpirationStrategy, MemoryStorage } from "node-ts-cache";
const pool = new Pool({
  user: process.env.db_user,
  database: process.env.db_database,
  port: process.env.db_port,
  password: process.env.db_password,
  host: process.env.db_host,
  max: 499,
});

const myCache = new ExpirationStrategy(new MemoryStorage());
//Funcion principal del proyecto
const init = async (port: any) => {
  logger.info(`Loading schemas`);
  //lee todos los schemas importados de ./resolvers/index.ts
  const schema = await buildSchema(SchemaOptions);
  //La coneccion a base
  logger.info(`Connectiong databases`);

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
      return { id: req.headers.page_id, pool, myCache };
    },
  });

  const { url } = await server.listen(port);
  logger.info(`Server is running, GraphQL Playground available at ${url}`);
  return server;
};

//Se inicializa el server
init(process.env.PORT_GRAPHQL);
