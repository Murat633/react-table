import React, { useState } from 'react'
import '../styles/createelement.css'
import Inputs from './Inputs'
import { v4 as uuid } from 'uuid'

const CreateElement = ({elements}) => {
    const [elementDetail,setDetail] = useState({
        "id":uuid(),
        "name":"",
        "address":"",
        "postcode":"",
        "rating":"",
        "typeOfFood":""
    })

    
    

    const onSubmitForm = (e)=>{
        e.preventDefault()
        if(elementDetail.name !="" && elementDetail.address !="" && elementDetail.postcode!="" && elementDetail.rating !="" && elementDetail.typeOfFood !="") {
            elements(elementDetail)
        }
    } 
  return (
    <header>
        <form className='addForm' onSubmit={onSubmitForm}>
        <Inputs type='text' placeholder='Add New İtem' elementDetail={elementDetail.name} changeFunc={(e)=>setDetail({...elementDetail,name:e.target.value})}/>
        <Inputs type='text' placeholder='Add New İtem' elementDetail={elementDetail.address} changeFunc={(e)=>setDetail({...elementDetail,address:e.target.value})}/>
        <Inputs type='text' placeholder='Add New İtem' elementDetail={elementDetail.postcode} changeFunc={(e)=>setDetail({...elementDetail,postcode:e.target.value})}/>
        <Inputs type='text' placeholder='Add New İtem' elementDetail={elementDetail.rating} changeFunc={(e)=>setDetail({...elementDetail,rating:e.target.value})}/>
        <Inputs type='text' placeholder='Add New İtem' elementDetail={elementDetail.typeOfFood} changeFunc={(e)=>setDetail({...elementDetail,typeOfFood:e.target.value})}/>
            <button type='submit' id='addTableItem'>
                <span className="material-symbols-outlined">add</span>
            </button>
        </form>
    </header>
  )
}

export default CreateElement