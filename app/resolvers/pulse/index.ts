import "reflect-metadata";
import { Resolver, Query, FieldResolver, Ctx } from 'type-graphql'
import { Pulse } from "../../schema/pulse/index";

@Resolver()
export class PulseResolver {

    @Query(returns => Pulse)
     pulse(){return {}}
}

@Resolver(of => Pulse)
export class PulseFieldResolver {
    @FieldResolver()
    facebook() {return  {} }
}

