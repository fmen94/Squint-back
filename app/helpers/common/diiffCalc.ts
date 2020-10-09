export const diffCalc = (act, prev) => {
  let diff = Math.round(((prev * 100) / act) * -1 + 100);
  return isNaN(diff) ? 0 : diff;
};
