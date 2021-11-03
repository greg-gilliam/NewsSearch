export const fetchNews = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=business&${process.env.API_KEY}`
  );
  const news = await res.json();
  return news.results;
};
