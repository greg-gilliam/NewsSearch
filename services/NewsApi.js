export const fetchNews = async (searchQuery) => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?category=business&q=${searchQuery}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=5`
  );
  const news = await res.json();
  return news.articles;
};
