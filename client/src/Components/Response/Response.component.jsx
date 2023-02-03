import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../Redux/Reducer/User/user.action'
import Usercard from '../Usercard/Usercard.component'

const Response = () => {
  const [users, setUsers] = useState([])
  const dispatch = useDispatch()
  const getresponse = async () => {
    await dispatch(getUsers())
  }
  const usersdata = useSelector(state => state.user.users)
  setUsers(usersdata)
  console.log("USer from resposne", usersdata, users)

  return (
    <div className='bg-gray-500'>
      Response
      <div>
        <button onClick={getresponse}>Get</button>
      </div>
      <Usercard />
    </div>
  )
}

export default Response