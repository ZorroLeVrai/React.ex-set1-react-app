import { useDispatch } from 'react-redux';
import { increment, decrement, init } from './counterSlice';

const CounterController = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button className="m-1" onClick={() => dispatch(increment())}>+</button>
      <button className="m-1" onClick={() => dispatch(decrement())}>-</button>
      <button className="m-1" onClick={() => dispatch(init())}>Init</button>
    </div>
  );
}

export default CounterController;