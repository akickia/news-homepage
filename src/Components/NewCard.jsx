export default function NewCard(props) {
  return (
    <section>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <hr></hr>
    </section>
  );
}
