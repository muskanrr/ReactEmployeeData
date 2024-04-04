import { useState } from 'react'
import Hamburger from './assets/react.svg'
import viteLogo from '/vite.svg'
import Title from "./component/title.jsx"
import data from "./data/data.js/";
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  console.log(data);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://React.dev" target="_blank">
          <img src={Hamburger} className="logo react" alt="React logo" />
        </a>
      </div>
      <Title firstName = {data[1].firstName} lastName = {data[1].lastName} />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
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
