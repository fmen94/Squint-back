export const fbQuerys = {
  readTop: (ctx, startDate, period) => `
    BEGIN;
    call read_top_section('cursor_czf365gntfl','${ctx.id}','${startDate}','${period[0]}');
    FETCH ALL FROM cursor_czf365gntfl;
    CLOSE cursor_czf365gntfl;
    `,
  readDetails: (ctx) => `
   BEGIN;
    call read_details_section('cursor_w03s8w3er','${ctx.id}');
    FETCH ALL FROM cursor_w03s8w3er;
    CLOSE cursor_w03s8w3er;
    `,
  communityGender: (ctx, startDate, endDate) => `
  BEGIN;
   call read_audience_annual_section('cursor_nkkbl4fz9am', '${ctx.id}','${startDate}','${endDate}');
  FETCH ALL FROM cursor_nkkbl4fz9am;
  CLOSE cursor_nkkbl4fz9am;
    `,
  communityGeo: (ctx, startDate, endDate) => `
  BEGIN;
   call read_geolocation_section('cursor_nkkbl4fz9am', '${ctx.id}','${startDate}','${endDate}');
  FETCH ALL FROM cursor_nkkbl4fz9am;
  CLOSE cursor_nkkbl4fz9am;
    `,
  communitySourse: (ctx, startDate, endDate) => `
  BEGIN;
   call read_fan_source_section('cursor_nkkbl4fz9am', '${ctx.id}','${startDate}','${endDate}');
  FETCH ALL FROM cursor_nkkbl4fz9am;
  CLOSE cursor_nkkbl4fz9am;
    `,
  postSection: (ctx, limit) => `
   BEGIN;
    call read_post_section('cursor_1o32ghjfcph','${ctx.id}',${limit}
  );
    FETCH ALL FROM cursor_1o32ghjfcph;
    CLOSE cursor_1o32ghjfcph;
    `,
  bestMomnets: (ctx, startDate, endDate) => `
   BEGIN;
    call read_best_moments_section('cursor_1o32ghjfcph','${ctx.id}','${startDate}','${endDate}'
  );
    FETCH ALL FROM cursor_1o32ghjfcph;
    CLOSE cursor_1o32ghjfcph;
    `,
  resctionsSection: (ctx, startDate, endDate) => `
    BEGIN;
    call read_reactions_section('cursor_nvtb855kzx','${ctx.id}','${startDate}','${endDate}'
  );
    FETCH ALL FROM cursor_nvtb855kzx;
    CLOSE cursor_nvtb855kzx;
    `,
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
