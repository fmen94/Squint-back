import { Pool } from "pg";

/**
 * Función para generar el query de llamada a los SP, retorna sólo un string con el query.
 * @param client Pool de conexión a base de datos
 * @param func Nombre de la función del SP a llamar
 * @param params Arreglo de parámetros en formato value:type, para formatearlos según su tipo
 */
const getCursor = async (
  client: Pool,
  func: string,
  params: Array<{ value: any; type: string }>
) => {
  let cursorName = Math.random().toString(36).substring(2, 20); //.replace(/[\W_]+/g,"");
  const PARAMS = params.map((p) => {
    if (p.type == "string" || p.type == "date") {
      return `'${p.value}'`;
    } else if (p.type == "number") {
      return p.value;
    }
  });
  let queryPage = `
  BEGIN;
  call ${func}('cursor_${cursorName}',${PARAMS.join(",")});
  FETCH ALL FROM cursor_${cursorName};
  CLOSE cursor_${cursorName};
  `;
  let responsePage = await client.query(queryPage);
  let response: Array<any> = Object.values(responsePage).filter(
    (r: any) => r.command === "FETCH"
  );

  return response.length ? (response[0].rows ? response[0].rows : []) : [];
};

export const fbQuerys = {
  readTop: (ctx, startDate, period) =>
    getCursor(ctx.connection, "read_top_section", [
      { value: ctx.id, type: "string" },
      { value: startDate, type: "date" },
      { value: period[0], type: "string" },
    ]),
  readDetails: (ctx) =>
    getCursor(ctx.connection, "read_details_section", [
      { value: ctx.id, type: "string" },
    ]),
  communityGender: (ctx, startDate, endDate) =>
    getCursor(ctx.connection, "read_audience_annual_section", [
      { value: ctx.id, type: "string" },
      { value: startDate, type: "date" },
      { value: endDate, type: "date" },
    ]),
  communityGeo: (ctx, startDate, endDate) =>
    getCursor(ctx.connection, "read_geolocation_section", [
      { value: ctx.id, type: "string" },
      { value: startDate, type: "date" },
      { value: endDate, type: "date" },
    ]),
  communitySourse: (ctx, startDate, endDate) =>
    getCursor(ctx.connection, "read_fan_source_section", [
      { value: ctx.id, type: "string" },
      { value: startDate, type: "date" },
      { value: endDate, type: "date" },
    ]),
  postSection: (ctx, limit) =>
    getCursor(ctx.connection, "read_post_section", [
      { value: ctx.id, type: "string" },
      { value: limit, type: "number" },
    ]),
  bestMomnets: (ctx, startDate, endDate) =>
    getCursor(ctx.connection, "read_best_moments_section", [
      { value: ctx.id, type: "string" },
      { value: startDate, type: "date" },
      { value: endDate, type: "date" },
    ]),
  resctionsSection: (ctx, startDate, endDate) =>
    getCursor(ctx.connection, "read_reactions_section", [
      { value: ctx.id, type: "string" },
      { value: startDate, type: "date" },
      { value: endDate, type: "date" },
    ]),
  geenralBench: (ctx, date, period) =>
    getCursor(ctx.connection, "read_bench_top_section", [
      { value: ctx.id, type: "string" },
      { value: date, type: "date" },
      { value: period[0], type: "string" },
    ]),
  postBench: (ctx, limit) =>
    getCursor(ctx.connection, "read_bench_post_section", [
      { value: ctx.id, type: "string" },
      { value: limit, type: "number" },
    ]),
  keywordsBench: (ctx, date, period) =>
    getCursor(ctx.connection, "read_bench_fan_source_section", [
      { value: ctx.id, type: "string" },
      { value: date, type: "date" },
      { value: period[0], type: "string" },
    ]),
};
/**
 *   `
   BEGIN;
    call read_reactions_section('cursor_nvtb855kzx','${ctx.id}','${startDate}','${endDate}'
  );
    FETCH ALL FROM cursor_nvtb855kzx;
    CLOSE cursor_nvtb855kzx;
    `
 */
