export const fetchNews = async () => {
  const res = await fetch(
    'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=75c0129a4ab14641b231784fca1186a2'
  );
  const news = await res.json();
  return news.results;
};
