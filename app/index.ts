import { ApolloServer } from "apollo-server";
import { buildSchema, Int } from "type-graphql";
import logger from "./helpers/logins/login.helper";
import BadRequestException from "./exceptions/bad-request.exception";
import { SchemaOptions } from "./resolvers";
import { Pool } from "pg";
import { ExpirationStrategy, MemoryStorage } from "node-ts-cache";
import { DynamoDB } from 'aws-sdk';
import { CONTEXT } from "./interfaces/common";

const pool = new Pool({
  user: process.env.db_user,
  database: process.env.db_database,
  port: process.env.db_port,
  password: process.env.db_password,
  host: process.env.db_host,
  max: 50,
});

const myCache = new ExpirationStrategy(new MemoryStorage());
//Funcion principal del proyecto
const init = async (port: any) => {

  const dynamodb = new DynamoDB({
    region: "us-west-2",
    /*endpoint: "http://localhost:8000",
    accessKeyId: "fakeMyKeyId",
    secretAccessKey: "fakeSecretAccessKey"*/
  });

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
    context: ({ req }):CONTEXT => {
      //Esta validacion esta pendiente para cuando este en produccion
      // if (!req.headers.page_id) {
      //   throw new BadRequestException("Page_id is Invalid");
      // }
      const page_id:any = req.headers.page_id;
      return { id: page_id, pool, myCache, dynamodb };
    },
  });

  const { url } = await server.listen(port);
  logger.info(`Server is running, GraphQL Playground available at ${url}`);
  return server;
};

//Se inicializa el server
init(process.env.PORT_GRAPHQL);
