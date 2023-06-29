import favicon from '../assets copy/images/favicon.png';

export default function NewsListItem({ article }) {
  const { id, title, text, picture } = article;

  /*let imageURL = '';*/
  /* try {
    imageURL = require(`../assets copy/images/${picture}`);
  } catch {
    imageURL = favicon;
  } */

  return (
    <section>
      <img src={picture} />
      <div className='article_content'>
        <h1>{id}</h1>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
}
