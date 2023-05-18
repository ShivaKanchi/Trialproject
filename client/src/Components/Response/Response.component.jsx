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
  const [cardsPerPage] = useState(5)

  const dispatch = useDispatch()
  const getresponse = async () => {
    await dispatch(getUsers())
  }
  const usersdata = useSelector(state => state.user.users)
  useEffect(() => {
    setUsers(usersdata)
  }, [usersdata])
  //Get current pots
  const indexOfLastCard = currentPage * cardsPerPage;                    // 1*5=5  
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;               // 5-5=0
  const currentPosts = users.slice(indexOfFirstCard, indexOfLastCard)    // 
  //Change page
  const paginate = (pageNumber) => { setCurrentPage(pageNumber) }

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
      <Pagination postPerPage={cardsPerPage} totalPosts={users.length} paginate={paginate} currentPage={currentPage} />
    </div>
  )
}

export default Response