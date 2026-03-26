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
 
  const [itemsPerPage, setItemsPerPage] = useState(5);
  


  return (
    <>
    <CurrentPage items={itemsList} totalItems={itemsList.length} itemsPerPage={itemsPerPage}/> 
    </>
  )
}

export default App
