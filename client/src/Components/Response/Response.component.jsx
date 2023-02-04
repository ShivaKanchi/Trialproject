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
  const usersdata = useSelector(state => state.user)
  useEffect(() => {
    if (usersdata) {
      setUsers(usersdata)
    }
  }, [])
  console.log("USERS from res comp", users)
  return (
    <div className='bg-gray-500 flex flex-col justify-center '>
      Response
      <div>
        <button onClick={getresponse}>Get</button>
      </div>
      <div className='border w-72 h-72 border-red-300'>
        {

        }
      </div>

    </div>
  )
}

export default Response