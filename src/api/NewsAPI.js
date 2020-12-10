import { configNewsApi } from './configNewsApi';

const { baseUrl, fileExtension } = configNewsApi;

export const getAllNewsId = async () => {
  let res = await fetch(baseUrl + '/topstories' + fileExtension);
  let newsIds = await res.json();
  let newsIds100 = newsIds.splice(0, 100);
  let news = Promise.all(newsIds100.map((item) => getNewsItemById(item)));
  return news;
};

export const getNewsItemById = async (id) => {
  let res = await fetch(baseUrl + '/item/' + id + fileExtension);
  let newsItem = await res.json();
  return newsItem;
};

export const getCommentById = async (id) => {
  let res = await fetch(baseUrl + '/item/' + id + fileExtension);
  let comment = await res.json();
  return comment;
};

export const getCommentsById = async (ids) => {
  let comments = Promise.all(ids.map((item) => getCommentById(item)));
  return comments;
};
