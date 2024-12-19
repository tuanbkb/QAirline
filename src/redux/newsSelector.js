export const selectNewsByClassification = (state, classifications) =>
  state.news.filter((newsItem) =>
    classifications.includes(newsItem.classification)
  );
