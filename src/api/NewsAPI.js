import { configNewsApi } from './configNewsApi';

const { baseUrl, fileExtension } = configNewsApi;

export const getAllNewsId = async () => {
  let res = await fetch(baseUrl + '/newstories' + fileExtension);
  let newsIds = await res.json();
  let newsIds100 = newsIds.splice(0, 100);
  let news = Promise.all(newsIds100.map((item) => getNewsItemById(item)));
  return news;
};

export const getNewsItemById = async (id) => {
  try {
    let res = await fetch(baseUrl + '/item/' + id + fileExtension);
    let newsItem = await res.json();
    if (!newsItem) {
      return Promise.reject({ status: 404 });
    }
    return newsItem;
  } catch (err) {
    return err;
  }
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
