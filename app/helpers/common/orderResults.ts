export const orderResults = (
  order: String,
  data: Array<object>,
  key: string
) => {
  if (order == "DESC") {
    data = data.sort((a, b) => (a[key] > b[key] ? -1 : 1));
  } else if (order == "ASC") {
    data = data.sort((a, b) => (a[key] < b[key] ? -1 : 1));
  }
  return data;
};
export const orderBench = (order, data, key) => {
  return data.map((e) => {
    return { id: e.id, data: orderResults(order, e.data, key) };
  });
};
