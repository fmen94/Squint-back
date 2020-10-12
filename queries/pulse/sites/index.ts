import { Pool } from "pg";
import { readSitesBenchAudienceSection } from "../../../app/readers/bench/sites/read_sites_bench_audience_section.reader";
import { readSitesBenchGlobalRankSection } from "../../../app/readers/bench/sites/read_sites_bench_global_rank_section.reader";
import { readSitesBenchTrafficRankSection } from "../../../app/readers/bench/sites/read_sites_bench_traffic_rank_section.reader";
import { readSitesPulseAudienceSection } from "../../../app/readers/pulse/sites/read_sites_pulse_audience_section.reader";
import { readSitesPulseFansCountrySection } from "../../../app/readers/pulse/sites/read_sites_pulse_fans_country_section.reader";
import { readSitesPulseGenderSection } from "../../../app/readers/pulse/sites/read_sites_pulse_gender_section.reader";
import { ReadSitesPulsePostSection } from "../../../app/readers/pulse/sites/read_sites_pulse_post_section.reader";
import { readSitesPulseSourceSection } from "../../../app/readers/pulse/sites/read_sites_pulse_source_section.reader";
import { readSitesPulseSubdomainsSection } from "../../../app/readers/pulse/sites/read_sites_pulse_subdomains_section.reader";
import { ReadSitesTopSectionSection } from "../../../app/readers/pulse/sites/read_sites_pulse_top_section.reader";
import { readSitesPulseTrafficByCountrySection } from "../../../app/readers/pulse/sites/read_sites_pulse_traffic_by_country_section.reader";
import { readSitesPulseDomainsTrafficHistorySection } from "../../../app/readers/pulse/sites/read_sites_pulse_traffic_history_section.reader";
import { readTrafficPerformanceSection } from "../../../app/readers/pulse/sites/read_sites_pulse_traffic_performance_section.reader";
import { readSitesPulseTrafficSection } from "../../../app/readers/pulse/sites/read_sites_pulse_traffic_section.reader";

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
  SitesBenchTrafficRankSection: (ctx, startDate, period)	=> readSitesBenchTrafficRankSection(ctx, startDate, period),
  SitesBenchGlobalRankSection: (ctx, startDate, period)	  => readSitesBenchGlobalRankSection(ctx, startDate, period),
  SitesBenchAudienceSection: (ctx, startDate, period)			=> readSitesBenchAudienceSection(ctx, startDate, period),
  /*FIN: SI QUIERES CONSERVAR TUS PIERNAS, NO CAMBIES ESTA ESTRUCTURA*/
};
