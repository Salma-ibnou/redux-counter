import { useSelector } from "react-redux"

function CounterDisplay() {
    const counter = useSelector(store=>store.COUNT.counter)
  return (
    <div>{counter}</div>
  )
}

export default CounterDisplay