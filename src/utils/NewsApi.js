function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

const pageSize = 100;

const currentDate = new Date();

const formattedDate = new Date().toLocaleString("default", {
  month: "numeric",
  day: "numeric",
  year: "numeric",
});

const weekBefore = new Date(
  currentDate.getTime() - 7 * 24 * 60 * 60 * 1000
).toLocaleString("default", {
  month: "numeric",
  day: "numeric",
  year: "numeric",
});

export const processNewsData = (data) => {
  const topResults = data.slice(0, 20);
  return topResults;
};

export const getNews = ({ keyword }, apiKey) => {
  return fetch(
    `https://newsapi.org/v2/everything?q=${keyword}&from=${formattedDate}&to=${weekBefore}&pageSize=${pageSize}&apiKey=${apiKey}`
  ).then(checkResponse);
};
