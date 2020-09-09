export const communutyGeoTrans = (data) => {
  data = Object.values(data).filter((r: any) => r.command === "FETCH");
  data = data[0].rows;
  console.log(data);

  return { communityGeo01: null };
  // {
  //     id: faker.random.uuid(),
  //         iso_a2: faker.address.countryCode(2),
  //             iso_a3: faker.address.countryCode(3),
  //                 position: index + 1,
  //                     name: faker.address.country(),
  //                         diff: faker.random.number(),
  //                             value: faker.random.number(),
  //                                 cities: [
  //                                     {
  //                                         id: faker.random.uuid(),
  //                                         diff: faker.random.number(),
  //                                         value: faker.random.number(),
  //                                         position: 1,
  //                                         country: faker.address.country(),
  //                                         name: faker.address.city(),
  //                                         lat: faker.address.latitude(),
  //                                         lng: faker.address.longitude(),
  //                                     },
  //                                 ],
  // }
};
