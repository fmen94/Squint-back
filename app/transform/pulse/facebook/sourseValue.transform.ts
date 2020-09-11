export const sourseValueTrans = (data) => {
  data = Object.values(data).filter((r: any) => r.command === "FETCH");
  data = data[0].rows;
  return data.reduce(
    (obj, e, index) => {
      if ((e.tipo = "External")) {
        obj.communityList01.push({
          kind: e.origen,
          value: e.cantidad,
        });
      } else if ((e.tipo = "Internal")) {
        obj.communityList01.push({
          kind: e.origen,
          value: e.cantidad,
        });
      }
      return obj;
    },
    {
      communityList01: [],
      communityList02: [],
    }
  );
};
