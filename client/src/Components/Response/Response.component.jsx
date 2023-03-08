import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../Redux/Reducer/User/user.action'
import Pagination from '../Pagination/Pagination'
import Usercard from '../Usercard/Usercard.component'

const Response = () => {
  const [users, setUsers] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(5)

  const dispatch = useDispatch()
  const getresponse = async () => {
    await dispatch(getUsers())
  }
  const usersdata = useSelector(state => state.user.users)
  useEffect(() => {
    setUsers(usersdata)
  }, [usersdata])
  //Get current pots
  const indexOfLastPost = currentPage * postsPerPage;                    // 1*5=5  
  const indexOfFirstPost = indexOfLastPost - postsPerPage;               // 5-5=0
  const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost)    // 
  // console.log(currentPosts, users)
  return (
    <div className='p-5 flex flex-col justify-center '>
      Response
      <div>
        <button onClick={getresponse} className='p-1 bg-gray-600 rounded-md'>Get</button>
      </div>
      <div className='border w-72 p-2 border-red-300'>
        {
          currentPosts?.map((user) => (
            <Usercard {...user} key={user._id} />
          ))
        }
      </div>
      <Pagination postPerPage={postsPerPage} totalPosts={users.length} />
    </div>
  )
}

export default Response