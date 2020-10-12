import { Pool } from "pg";
import { readSitesPulseAudienceSection } from "../../../app/readers/pulse/sites/read_sites_pulse_audience_section.sp";
import { readSitesPulseFansCountrySection } from "../../../app/readers/pulse/sites/read_sites_pulse_fans_country_section";
import { readSitesPulseGenderSection } from "../../../app/readers/pulse/sites/read_sites_pulse_gender_section.sp";
import { ReadSitesPulsePostSection } from "../../../app/readers/pulse/sites/read_sites_pulse_post_section.sp";
import { readSitesPulseSourceSection } from "../../../app/readers/pulse/sites/read_sites_pulse_source_section.sp";
import { readSitesPulseSubdomainsSection } from "../../../app/readers/pulse/sites/read_sites_pulse_subdomains_section.sp";
import { ReadSitesTopSectionSection } from "../../../app/readers/pulse/sites/read_sites_pulse_top_section.sp";
import { readSitesPulseTrafficByCountrySection } from "../../../app/readers/pulse/sites/read_sites_pulse_traffic_by_country_section.sp";
import { readSitesPulseDomainsTrafficHistorySection } from "../../../app/readers/pulse/sites/read_sites_pulse_traffic_history_section.sp";
import { readTrafficPerformanceSection } from "../../../app/readers/pulse/sites/read_sites_pulse_traffic_performance_section.sp";
import { readSitesPulseTrafficSection } from "../../../app/readers/pulse/sites/read_sites_pulse_traffic_section.sp";

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
  sitesPulseAudience: (ctx, startDate, period)						=> readSitesPulseAudienceSection(ctx, startDate, period),
  sitesPulseFansCountry: (ctx, startDate, period)					=> readSitesPulseFansCountrySection(ctx, startDate, period),
  sitesPulseGender: (ctx, startDate, period)							=> readSitesPulseGenderSection(ctx, startDate, period),
  sitesPulsePost: (ctx, startDate, period)								=> ReadSitesPulsePostSection(ctx, startDate, period),
  sitesPulseSource: (ctx, startDate, period)				      => readSitesPulseSourceSection(ctx, startDate, period),
  sitesPulseSubdomains: (ctx, startDate, period)			    => readSitesPulseSubdomainsSection(ctx, startDate, period),
  sitesPulseTop: (ctx, startDate, period)					        => ReadSitesTopSectionSection(ctx, startDate, period),
  sitesPulseTrafficByCountry: (ctx, startDate, period)		=> readSitesPulseTrafficByCountrySection(ctx, startDate, period),
  sitesPulseTrafficHistory: (ctx, startDate, period)		  => readSitesPulseDomainsTrafficHistorySection(ctx, startDate, period),
  sitesPulseTrafficPerformance: (ctx, startDate, period)	=> readTrafficPerformanceSection(ctx, startDate, period),
  sitesPulseTraffic: (ctx, startDate, period)				      => readSitesPulseTrafficSection(ctx, startDate, period),
  /*FIN: SI QUIERES CONSERVAR TUS PIERNAS, NO CAMBIES ESTA ESTRUCTURA*/
};
