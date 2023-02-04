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
  useEffect(() => {
    setUsers(usersdata)
  }, [usersdata])

  return (
    <div className='p-5 flex flex-col justify-center '>
      Response
      <div>
        <button onClick={getresponse} className='p-1 bg-gray-600 rounded-md'>Get</button>
      </div>
      <div className='border w-72 p-2 border-red-300'>
        {
          users?.map((user) => (
            <Usercard {...user} key={user._id} />
          ))
        }
      </div>

    </div>
  )
}

export default Response