export const fetchNews = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.REACT_APP_API_KEY}`
  );
  const news = await res.json();
  return news.articles;
};
