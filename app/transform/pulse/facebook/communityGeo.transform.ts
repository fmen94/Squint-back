export const communutyGeoTrans = (data) => {

  return {
    communityListPrev01: data.map((e, index) => {
      return {
        name: e.name,
        value: e.value,
        diff: e.diff,
      };
    }),
    communityGeo01: data.map((e, index) => {
      return {
        id: e.id,
        iso_a2: e.iso_a2,
        iso_a3: e.iso_a3,
        position: index + 1,
        name: e.name,
        diff: e.diff,
        value: e.value,
        cities: [
          {
            id: e.cities_id,
            diff: e.cities_diff,
            value: e.cities_value,
            position: index + 1,
            country: e.cities_country,
            name: e.cities_name,
            lat: e.cities_lat,
            lng: e.cities_lng,
          },
        ],
      };
    }),
  };
};
