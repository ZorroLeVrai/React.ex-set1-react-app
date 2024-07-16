import PropTypes from 'prop-types';
import { CART_ACTION } from '../cartAction';

export default function Cart(props) {
  const { cardItems, dispatch } = props;

  return (
    <div className="card">
      <div className="card-body">
        <div>
          <button onClick={() => dispatch({type: CART_ACTION.ADD_ITEM})}>Add</button>
          <button onClick={() => dispatch({type: CART_ACTION.REMOVE_ITEM})}>Remove</button>
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
  dispatch: PropTypes.func.isRequired,
};
