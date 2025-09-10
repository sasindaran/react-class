import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './contents/Navbar'
import Home from './contents/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Home school="KV" name="Itachi" class={10} section="d" marks={60} res={true}/>
    <Home2 school="KV" name="Itachi" class={10} section="d" marks={60} res={true}/>
    </>
  )
}

export default App
