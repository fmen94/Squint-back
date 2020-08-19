import { ApolloServer } from "apollo-server";
import { buildSchema, Int } from "type-graphql";
import { createConnection, Connection } from "typeorm";
import logger from "./helpers/logins/login.helper";
import BadRequestException from "./exceptions/bad-request.exception";
import { SchemaOptions } from "./resolvers";

//Funcion principal del proyecto
const init = async (port: any) => {
  logger.info(`Loading schemas`);
  //lee todos los schemas importados de ./resolvers/index.ts
  const schema = await buildSchema(SchemaOptions);
  //La coneccion a bas esta pendiente
  logger.info(`Connectiong databases`);
  let conection: Connection;
  //Pendig
  /*createConnection(process.env.MYSQL_API_DWH|| "Prod")
   .then(e=>{
    console.log(`Connectiong Exist`)
     conection= e
   })
  .catch(e=>{
    console.log("Conection DWH failed", e) 
  })
  */
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
      return { id: req.headers.page_id, conection };
    },
  });

  const { url } = await server.listen(port);
  logger.info(`Server is running, GraphQL Playground available at ${url}`);
  return server;
};

//Se inicializa el server
init(process.env.PORT_GRAPHQL);
