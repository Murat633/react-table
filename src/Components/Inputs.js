import React from 'react'

const Inputs = ({type, placeholder,changeFunc,value}) => {
  return (
    <input type={type || "text"} placeholder={placeholder || 'Add List Element'} onChange={changeFunc} className="form-control" value={value} />

  )
}

export default Inputs