import PageItems from './components/PageItems.jsx'
import {useState} from 'react'
import './App.css'

function App() {
  const [itemsList, setItems] = useState(["item1", "item2", "item3"]);

  return (
    <>
    <PageItems items={itemsList}/> 
    </>
  )
}

export default App
