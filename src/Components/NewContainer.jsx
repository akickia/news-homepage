import data from '../assets copy/json/new.json';
import NewCard from './NewCard';
import '../style/newContainer.css';

export default function NewContainer() {

  const newEl = data.map((item, i) => {
    return <NewCard 
    key={i} 
    title={item.title} 
    text={item.text} />;
  });
  
  return (
    <section className='container_section_new'>
      <h2>New</h2>
      {newEl && newEl}
    </section>
  );
}
