import { useDispatch } from "react-redux";
import { decrement, increment } from "../../Store/counter/counter-slice";


function CounterInput() {
  const Dispatch=useDispatch();
  
  const doIncrement =()=>{
    Dispatch(increment(1))
  }
   const doDecrement =()=>{
    Dispatch(decrement(1))
  }
  return (
    <div>
      <button onClick={doIncrement}>+</button>
      <button onClick={doDecrement}>-</button>
    </div>
  )
}

export default CounterInput