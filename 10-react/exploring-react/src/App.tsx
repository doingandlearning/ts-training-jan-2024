import { useRef, useState } from 'react'
import './App.css'
import BBC from './components/BBC'

function App() {
  const [count, setCount] = useState<number | null>(null) // hook! // [getter, setterFunction]
  const ref = useRef<HTMLAudioElement | null>()
  function handleClick() {
    if (!count) {
      setCount(1)
    } else {
      setCount(count + 1) // async!
    }
  }

  return (
    <>
      <BBC team='Bitesize'></BBC>
      <audio ref={ref}></audio>
      <div className="card">
        <button onClick={() => handleClick()}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
