import PropTypes from 'prop-types';

export default function Cart(props) {
  const { cardItems, onAddHandler, onRemoveHandler } = props;

  return (
    <div className="card">
      <div className="card-body">
        <div>
          <button onClick={onAddHandler}>Add</button>
          <button onClick={onRemoveHandler}>Remove</button>
        </div>
        List items:
        <ol>
          {cardItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

Cart.propTypes = {
  cardItems: PropTypes.array.isRequired,
  onAddHandler: PropTypes.func.isRequired,
  onRemoveHandler: PropTypes.func.isRequired
};
