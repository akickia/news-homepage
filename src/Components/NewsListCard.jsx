import articleData from '../assets copy/json/list-news';
import NewsListItem from './NewsListItem';
import '../style/newsListContainer.css'

export default function NewsListCard() {
  const NewsList = articleData.map((article) => (
    <NewsListItem key={article.id} article={article} />
  ));
  return <section className='container_newslist'>{NewsList}</section>;
}
