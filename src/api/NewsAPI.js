export const getAllNewsId = () => {
  return fetch(
    'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
  ).then((res) => res.json());
};
