import React from 'react'

const Usercard = (props) => {
  return (
    <div className='w-max h-5 '>
      <p className='cursor-pointer'>{props.name ? props.name : "No name"}</p>
    </div>
  )
}

export default Usercard