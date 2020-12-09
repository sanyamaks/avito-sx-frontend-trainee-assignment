export const convertTime = (obj) => {
  const date = new Date(obj.time * 1000);
  obj.time = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  return obj;
};
