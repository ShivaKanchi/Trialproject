import React from 'react'

const Usercard = (props) => {
  return (
    <div className='w-max h-5'>
      {props.name ? props.name : "No name"}
    </div>
  )
}

export default Usercard