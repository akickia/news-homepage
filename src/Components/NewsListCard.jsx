import articleData from '../assets copy/json/list-news';
import NewsListItem from './NewsListItem';

export default function NewsListCard() {
  const NewsList = articleData.map((article) => (
    <NewsListItem key={article.id} article={article} />
  ));
  return <div>{NewsList}</div>;
}
