import React, { useState } from 'react'
import '../styles/table.css'

const TableElement = ({element,removeElements}) => {
  const[isEdit,setIsEdit] = useState(false)
  const[elementInfo,setElementInfo] = useState(element)
  const[newEdit,setNewEdit] = useState(elementInfo)
  return (
    <tr className='tableElement'>
        <td>{isEdit ===false? elementInfo.name : 
        <input onChange={(e)=>setNewEdit({...newEdit,name:(e.target.value.length > 0? e.target.value:elementInfo.name)})} />}
        </td>
        
        <td>{isEdit ===false? elementInfo.address : 
        <input onChange={(e)=>setNewEdit({...newEdit,address:(e.target.value.length > 0? e.target.value:elementInfo.address)})} />}</td>
        
        <td>{isEdit ===false? elementInfo.postcode : 
        <input onChange={(e)=>setNewEdit({...newEdit,postcode:(e.target.value.length > 0? e.target.value:elementInfo.postcode)})} />}</td>
        
        <td>{isEdit ===false? elementInfo.rating : 
        <input onChange={(e)=>setNewEdit({...newEdit,rating:(e.target.value.length > 0? e.target.value:elementInfo.rating)})} />}</td>
        
        <td>{isEdit ===false? elementInfo.typeOfFood : 
        <input onChange={(e)=>setNewEdit({...newEdit,typeOfFood:(e.target.value.length > 0? e.target.value:elementInfo.typeOfFood)})} />}</td>
        
        <td>
          {
            isEdit===false?(<div className='editButtons'>
                            <button onClick={()=>{setIsEdit(true)}}>
                            <span className="material-symbols-outlined editBtn">
                                edit
                            </span>
                          </button>
                          <button onClick={()=>removeElements(element) }>
                            <span className="material-symbols-outlined editBtn">
                                delete
                            </span>
                          </button>
                            </div>):(
                        <div className='editButtons'>
                            <button onClick={()=>{
                              setIsEdit(()=>{
                                  return false
                                }                            
                              )
                              setElementInfo(newEdit)
                              
                            }}>
                            <span className="material-symbols-outlined cancelBtn">
                            check
                            </span>
                          </button>
                          <button onClick={()=>{
                            setIsEdit(()=>{
                                return false
                              }                            
                            )
                          }}>
                          <span className="material-symbols-outlined cancelBtn">
                          cancel
                          </span>
                        </button>
                        </div>
                    )
          }
        </td>
    </tr>
  )
}

export default TableElement