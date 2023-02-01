import React, { useState } from 'react'
//redux
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Responsepage from '../../Pages/Response.page'
import { addUser } from '../../Redux/Reducer/User/user.action'
const Form = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        phone: ""
    })
    const handleChange = (e) => {
        setUser((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const submit = async (e) => {
        e.preventDefault()
        await dispatch(addUser(user))
        setUser({ name: "", email: "", password: "", phone: "" })
        navigate('/response')
        console.log(user, "form comp")
    }
    return (
        <div >
            <h2 className=' text-center font-serif'>Register</h2>
            <form className=' w-72  flex flex-col justify-center align-middle p-5 gap-2 '>
                <div className='w-56 flex flex-col'>
                    <label htmlFor="name" className='text-left' > Name:</label>
                    <input id="name" type="text" name="name" value={user.name} onChange={handleChange} className='bg-gray-100 border rounded-md' />
                </div>
                <div className='w-56 flex flex-col'>
                    <label htmlFor="email" className='text-left'>Email:</label>
                    <input id="email" type="email" name="email" value={user.email} onChange={handleChange} className='bg-gray-100 border rounded-md' />
                </div>
                <div className='w-56 flex flex-col'>
                    <label htmlFor='password' className='text-left'>Password:</label>
                    <input id='password' type="password" name="password" value={user.password} onChange={handleChange} className='bg-gray-100 border rounded-md' />
                </div>
                <div className='w-56 flex flex-col'>
                    <label htmlFor='phone' className='text-left'>Phone:</label>
                    <input id='phone' type="tel" name="Phone" pattern='[0-9]{10}' value={user.phone} onChange={handleChange} className='bg-gray-100 border rounded-md' />
                </div>
                <div>
                    <button type='submit' onClick={submit} className='w-12 h-6 bg-slate-300'> Add</button>
                </div>
            </form>
        </div >
    )
}

export default Form