import "reflect-metadata";
import { Resolver, Query, FieldResolver, Ctx } from "type-graphql";
import { Bench } from "../../schema/bench";
/**
 * Este Resolver response al Schama de pulse y en si mismo no devuelve nada
 */
@Resolver()
export class BenchResolver {
  @Query((returns) => Bench)
  bench() {
    return {};
  }
}
/**
 * Este Resolver habilita el node facebook dentro de la resolucion de pulse
 */
@Resolver((of) => Bench)
export class BenchFieldResolver {
  @FieldResolver()
  facebook() {
    return {};
  }
  @FieldResolver()
  instagram() {
    return {};
  }
}
