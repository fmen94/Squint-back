
import { ApolloServer } from "apollo-server"
import { buildSchema, Int } from "type-graphql"
import { createConnection, Connection } from 'typeorm';

import {  } from './resolvers/index'
import BadRequestException from "./exceptions/bad-request.exception";


//Funcion principal del proyecto
const init = async (port:any) =>{
console.log(`Loading schemas`)
  //lee todos los schemas importados de ./resolvers/index.ts
  const schema = await buildSchema({
    resolvers: [__dirname + "/resolvers/index.ts"]
  })
  //La coneccion a bas esta pendiente
  console.log(`Connectiong databases`)
  let conection: Connection
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
  console.log(`Initializing server`)
  const server = new ApolloServer({
    schema,
    playground: true,
    //Se crea el context
    context: ({ req }) => {
      if(!req.headers.page_id){
        throw new BadRequestException("Page_id is Invalid");
      }
      return {id:req.headers.page_id,conection}
    }
  })  
  
  const { url } = await server.listen(port)
  console.log(`Server is running, GraphQL Playground available at ${url}`)

  return server;
}

//Se inicializa el server
init(process.env.PORT_GRAPHQL)
