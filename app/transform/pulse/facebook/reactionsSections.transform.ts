export const reactionSectionTrans = (data) => {
  return {
    affinityBar01: [
      {
        valuesArray: [data[0].like, data[1].like],
        kind: "like",
      },
      {
        valuesArray: [data[0].live, data[1].live],
        kind: "love",
      },
      {
        valuesArray: [data[0].haha, data[1].haha],
        kind: "haha",
      },
      {
        valuesArray: [data[0].think, data[1].think],
        kind: "think",
      },
      {
        valuesArray: [data[0].wow, data[1].wow],
        kind: "wow",
      },
      {
        valuesArray: [data[0].sad, data[1].sad],
        kind: "sad",
      },
      {
        valuesArray: [data[0].angry, data[1].angry],
        kind: "angry",
      },
    ],
    conversationList02: [
      { kind: "like", value: data[0].like },
      { kind: "wow", value: data[0].wow },
      { kind: "love", value: data[0].live },
      { kind: "haha", value: data[0].haha },
      { kind: "messages", value: data[0].messages },
      { kind: "shares", value: data[0].shares },
      { kind: "clicks", value: data[0].clicks },
      { kind: "others", value: data[0].others },
      { kind: "respond_to_an_event", value: data[0].respond_to_an_event },
      { kind: "hide_this_story", value: data[0].hide_this_story },
      { kind: "angry", value: data[0].angry },
      { kind: "sad", value: data[0].sad },
      {
        kind: "hide_all_post_from_this_page",
        value: data[0].hide_all_post_from_this_page,
      },
      {
        kind: "report_an_object_as_a_spam",
        value: data[0].report_an_object_as_a_spam,
      },
      { kind: "unlike_a_page", value: data[0].unlike_a_page },
    ],
  };
};
