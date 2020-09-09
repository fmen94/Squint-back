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
};
//BEGIN;
