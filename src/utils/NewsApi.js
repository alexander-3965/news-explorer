function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

export const processNewsData = (data) => {
  const topResults = data.slice(0, 20);
  return topResults;
};

export const getNews = ({ keyword }, apiKey) => {
  return fetch(
    `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}`
  ).then(checkResponse);
};
