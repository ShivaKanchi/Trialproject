import React from 'react'
// import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getUsers } from '../../Redux/Reducer/User/user.action'
import Usercard from '../Usercard/Usercard.component'

const Response = () => {
  const [users, setUsers] = useState([])
  const dispatch = useDispatch()
  // const getresponse = async () => {
  //   await dispatch(getUsers()).then(data => {
  //     setUsers(data)
  //   })
  //   console.log("useeffect from response", users)
  // }

  return (
    <div className='bg-gray-500'>
      Response
      <div>
        <Response />
        {/* <button onClick={getresponse}>Get</button> */}
      </div>
      <Usercard />
    </div>
  )
}

export default Response