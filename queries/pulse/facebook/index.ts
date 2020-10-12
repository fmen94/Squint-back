import { Pool } from "pg";
import { readCommunityGender } from "../../../app/stored_procedures/pulse/facebook/read_community_gender.sp";
import { readDetailsSection } from "../../../app/stored_procedures/pulse/facebook/read_details_section.sp";
import { readGeoLocationSection } from "../../../app/stored_procedures/pulse/facebook/read_geolocation_section.sp";
import { readTopSection } from "../../../app/stored_procedures/pulse/facebook/read_top_section.sp";
import { readFanSourceSection } from "../../../app/stored_procedures/pulse/facebook/read_fan_source_section.sp";
import { readPostSection } from "../../../app/stored_procedures/pulse/facebook/read_post_section.sp";
import { readReactionSection } from "../../../app/stored_procedures/pulse/facebook/read_reactions_section.sp";
import { readBestMomentsSection } from "../../../app/stored_procedures/pulse/facebook/read_best_moments_section.sp";

/**
 * Función para generar el query de llamada a los SP, retorna sólo un string con el query.
 * @param client Pool de conexión a base de datos
 * @param func Nombre de la función del SP a llamar
 * @param params Arreglo de parámetros en formato value:type, para formatearlos según su tipo
 */
const getCursor = async (
  pool: Pool,
  func: string,
  params: Array<{ value: any; type: string }>
) => {
  const client = await pool.connect();
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
  client.release();

  return response.length ? (response[0].rows ? response[0].rows : []) : [];
};

export const fbQuerys = {
  /*INICIO: SI QUIERES CONSERVAR TUS PIERNAS, NO CAMBIES ESTA ESTRUCTURA*/
  /*NO HAGAS LLORAR AL CÓDIGO, NO AGREGES SALTOS DE LÍNEA INNECESARIOS*/
  readTop: (ctx, startDate, period)             => readTopSection(ctx, startDate, period),
  readDetails: (ctx)                            => readDetailsSection(ctx),
  communityGender: (ctx, startDate, period)     => readCommunityGender(ctx, startDate, period),
  communityGeo: (ctx, startDate, period)        => readGeoLocationSection(ctx, startDate, period),
  communitySourse: (ctx, startDate, endDate)    => readFanSourceSection(ctx, startDate, endDate),
  postSection: (ctx, limit)                     => readPostSection(ctx, limit),
  bestMomnets: (ctx, startDate, period)         => readBestMomentsSection(ctx, startDate, period),
  resctionsSection: (ctx,startDate,period)      => readReactionSection(ctx, startDate, period),
  /*MANTEN LA MISMA ESTRUCTURA USADA AQUÍ ARRIBA PARA LOS SIGUIENTES SP, PORFI :c*/
  /*FIN: SI QUIERES CONSERVAR TUS PIERNAS, NO CAMBIES ESTA ESTRUCTURA*/
  generalBench: (ctx, date, period) =>
    getCursor(ctx.pool, "read_bench_top_section", [
      { value: ctx.id, type: "string" },
      { value: date, type: "date" },
      { value: period[0], type: "string" },
    ]),
  postBench: (ctx, limit) =>
    getCursor(ctx.pool, "read_bench_post_section", [
      { value: ctx.id, type: "string" },
      { value: limit, type: "number" },
    ]),
  keywordsBench: (ctx, date, period) =>
    getCursor(ctx.pool, "read_bench_fan_source_section", [
      { value: ctx.id, type: "string" },
      { value: date, type: "date" },
      { value: period[0], type: "string" },
    ]),
  readTopIG: (ctx, startDate, period) =>
    getCursor(ctx.pool, "read_instagram_top_section", [
      { value: ctx.id, type: "string" },
      { value: startDate, type: "date" },
      { value: period[0], type: "string" },
    ]),
  readPostIG: (ctx) =>
    getCursor(ctx.pool, "read_instagram_post_section", [
      { value: ctx.id, type: "string" },
    ]),
  readInteractionsIG: (ctx, startDate, endDate) =>
    getCursor(ctx.pool, "read_instagram_brand_interaction_section", [
      { value: ctx.id, type: "string" },
      { value: startDate, type: "date" },
      { value: endDate, type: "date" },
    ]),
  readBestMomentsIG: (ctx, startDate, endDate) =>
    getCursor(ctx.pool, "read_instagram_best_moments_section", [
      { value: ctx.id, type: "string" },
      { value: startDate, type: "date" },
      { value: endDate, type: "date" },
    ]),
  generalBenchIg: (ctx, date, period) =>
    getCursor(ctx.pool, "read_instagram_bench_top_section", [
      { value: ctx.id, type: "string" },
      { value: date, type: "date" },
      { value: period[0], type: "string" },
    ]),
  postBenchIg: (ctx, limit) =>
    getCursor(ctx.pool, "read_instagram_bench_post_section", [
      { value: ctx.id, type: "string" },
      { value: limit, type: "number" },
    ]),
  keywordsBenchIg: (ctx, date, period) =>
    getCursor(ctx.pool, "read_instagram_bench_fan_source_section", [
      { value: ctx.id, type: "string" },
      { value: date, type: "date" },
      { value: period[0], type: "string" },
    ]),
  bestMomentsYt: (ctx, startDate, endDate) =>
    getCursor(ctx.pool, "read_youtube_best_moments_section", [
      { value: ctx.id, type: "string" },
      { value: startDate, type: "date" },
      { value: endDate, type: "date" },
    ]),
  detailsSectionYt: (ctx) =>
    getCursor(ctx.pool, "read_youtube_details_section", [
      { value: ctx.id, type: "string" },
    ]),
  postYt: (ctx) =>
    getCursor(ctx.pool, "read_youtube_post_section", [
      { value: ctx.id, type: "string" },
    ]),
  topSectionYt: (ctx, date, period) =>
    getCursor(ctx.pool, "read_youtube_top_section", [
      { value: ctx.id, type: "string" },
      { value: date, type: "date" },
      { value: period[0], type: "string" },
    ]),
  genralBenchYT: (ctx, date, period) =>
    getCursor(ctx.pool, "read_youtube_bench_top_section", [
      { value: ctx.id, type: "string" },
      { value: date, type: "date" },
      { value: period[0], type: "string" },
    ]),
  postBenchYt: (ctx, limit) =>
    getCursor(ctx.pool, "read_youtube_bench_post_section", [
      { value: ctx.id, type: "string" },
      { value: limit, type: "number" },
    ]),
  keywordsBenchYt: (ctx, date, period) =>
    getCursor(ctx.pool, "read_youtube_bench_fan_source_section", [
      { value: ctx.id, type: "string" },
      { value: date, type: "date" },
      { value: period[0], type: "string" },
    ]),
};
