export default function Book(props) {
  return (
    <div
      style={{
        border: "2px solid #eee",
        padding: "1% 3%",
        margin: "1.5% auto",
        width: "35%",
      }}
    >
      <h2>{props.heading}</h2>
      <p>{props.text}</p>
    </div>
  );
}
