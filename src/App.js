import React, { useState } from 'react'
import CreateElement from './Components/CreateElement';
import Table from './Components/Table';
function App() {
    const [element,setElement] = useState([])
    const elements = (elements) => {
        setElement([...element,elements])
    }

    const removeElements = (removeElement) => {
        const rmvElement = element.indexOf(removeElement)
        setElement(element.filter(elem => {
          if(elem !== removeElement) {
            return elem
          }
        }))
        console.log(removeElement)
        
    }

  return (
    <div className="App">
        <CreateElement elements={elements}/>
        <Table element={element} removeElements={removeElements}/>
    </div>
  );
}

export default App;
