import React, { useState } from 'react'
import '../styles/table.css'
import TableElement from './TableElement'

const Table = ({element,removeElements}) => {
    
    

  return (
    <table>
        <thead >
            <tr>
                <th>Name</th>
                <th>Adress</th>
                <th>Postcode</th>
                <th>Rating</th>
                <th>Type of Food</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                element.map(elem=>(
                    <TableElement element={elem} removeElements={removeElements}/>
                ))
            }
        </tbody>
    </table>
  )
}

export default Table