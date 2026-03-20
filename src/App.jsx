import PageItems from './components/PageItems'
import {useState} from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState([]);
  return (
    <>
    <PageItems items={items}/> 
    </>
  )
}

export default App
