import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increaseByAmount, increment } from './features/couter/couterSlice'

function App() {
const {value}=useSelector(state=>state.couter)

const dispatch = useDispatch()

const handleDecrese = ()=>{
  dispatch(decrement())
}

const handleIncrese = ()=>{
  dispatch(increment())
}


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h1>{value}</h1>
        <button onClick={handleDecrese} >
          Decrease
        </button>
        <button onClick={handleIncrese}>
          Increase
        </button>
        <button onClick={()=>dispatch(increaseByAmount(3))}>
          Increase 5
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
