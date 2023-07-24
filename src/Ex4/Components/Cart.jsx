export default function Cart(props) {
  const { cardItems, onAddHandler, onRemoveHandler } = props;

  return (
    <div class="card">
      <div class="card-body">
        List items:
        <ol>
          {cardItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
        <button onClick={onAddHandler}>Add</button>
        <button onClick={onRemoveHandler}>Remove</button>
      </div>
    </div>
  );
}
