export const interationsIGTrans = (data) => {
  //console.log(data);
  return data.reduce(
    (obj, e, index) => {
      obj.communityTop01.push({
        name: e.name,
        image: e.url,
        likes: e.likes,
        position: index + 1,
        followers: e.followers,
      });
      return obj;
    },
    {
      communityTop01: [],
    }
  );
};
