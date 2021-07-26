const token = "be25e57ef018468785a373ada4e571cd";
const url = `https://newsapi.org/v2/top-headlines?country=br&category=technology&sortBy=popularity&pageSize=100&apiKey=${token}`;

const fetchNews = async () => {
  const request = await fetch(url);
  const response = await request.json();
  const { articles } = response;

  let newArticles = articles.reduce(function(accumulator, article) {
    if (article.urlToImage) {
      accumulator.push(article)
    }
    return accumulator
  }, []);

  return newArticles;
}

export default fetchNews;