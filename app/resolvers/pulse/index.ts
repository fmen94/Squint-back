import "reflect-metadata";
import { Resolver, Query, FieldResolver, Ctx } from "type-graphql";
import { Pulse } from "../../schema/pulse/index";
/**
 * Este Resolver response al Schama de pulse y en si mismo no devuelve nada
 */
@Resolver()
export class PulseResolver {
  @Query((returns) => Pulse)
  pulse() {
    return {};
  }
}
/**
 * Este Resolver habilita el node facebook dentro de la resolucion de pulse
 */
@Resolver((of) => Pulse)
export class PulseFieldResolver {
  @FieldResolver()
  facebook() {
    return {};
  }
  @FieldResolver()
  instagram() {
    return {};
  }
  @FieldResolver()
  youtube() {
    return {};
  }
  @FieldResolver()
  trends() {
    return {};
  }
  @FieldResolver()
  news() {
    return {};
  }
}
