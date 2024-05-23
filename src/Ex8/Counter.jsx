import { useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector(state => state.counter.value);

  return (
    <div>Compteur: {count}</div>
  )
}

export default Counter;