export const diffCalc = (act, prev) => {
  //let diff = Math.round(((prev * 100) / act) * -1 + 100);
  let diff = (((act-prev)/prev)*100);
  return isNaN(diff) || !isFinite(diff) ? 0 : diff.toFixed(2);
};
