export const fbQuerys = {
  general: (ctx, startDate, endDate) => `
    BEGIN;
    call read_top_section('cursor_czf365gntfl','${ctx.id}','${startDate}','${endDate}');
    FETCH ALL FROM cursor_czf365gntfl;
    CLOSE cursor_czf365gntfl;
    `,
  communityDates: (ctx, startDate, endDate) => `
   BEGIN;
    call read_community_annual_section('cursor_w03s8w3er','${ctx.id}','${startDate}','${endDate}');
    FETCH ALL FROM cursor_w03s8w3er;
    CLOSE cursor_w03s8w3er;
    `,
  communityGender: (ctx, startDate, endDate) => `
   call read_audience_annual_section('cursor_nkkbl4fz9am', '${ctx.id}','${startDate}','${endDate}');
  FETCH ALL FROM cursor_nkkbl4fz9am;
  CLOSE cursor_nkkbl4fz9am;
    `,
};
//BEGIN;
