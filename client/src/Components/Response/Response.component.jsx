import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getUsers } from '../../Redux/Reducer/User/user.action'
import Usercard from '../Usercard/Usercard.component'

const Response = () => {
  const [users, setUsers] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(dispatch(getUsers)).then((data) => {
      setUsers(data);
    });
  }, [])
  return (
    <div className='bg-gray-500'>
      Response
      <p>
        {users}
      </p>
      <Usercard />
    </div>
  )
}

export default Response