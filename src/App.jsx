import CurrentPage from './components/CurrentPage.jsx'
import {useState} from 'react'
import './App.css'

function App() {
  const [itemsList, setItems] = useState(()=>{
    const tempList = []
    for (let i=0; i < 123; i++) {
      const itemText = `item${i+1}`
      tempList.push(itemText);   
    }
    return tempList;
  });

  return (
    <>
    <CurrentPage items={itemsList} totalItems={itemsList.length}/> 
    </>
  )
}

export default App
