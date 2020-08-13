
import { ApolloServer } from "apollo-server"
import { buildSchema, Int } from "type-graphql"
import { createConnection, Connection } from 'typeorm';

import {  } from './resolvers/index'
import BadRequestException from "./exceptions/bad-request.exception";
const init = async (port:any) =>{
console.log(`Loading schemas`)
  const schema = await buildSchema({
    resolvers: [__dirname + "/resolvers/index.ts"]
  })
  
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
  console.log(`Initializing server`)
  const server = new ApolloServer({
    schema,
    playground: true,
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
init(process.env.PORT_GRAPHQL)
