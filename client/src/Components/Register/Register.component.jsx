import React, { useState } from 'react'
//redux
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser, getUsers } from '../../Redux/Reducer/User/user.action'
const Register = () => {
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
        await dispatch(getUsers())
        setUser({ name: "", email: "", password: "", phone: "" })
        navigate('/response')
        console.log(user, "form comp")
    }

    return (
        <div className='bg-[linear-gradient(106.23deg,black_-90%,transparent_70%),linear-gradient(247deg,red_-90%,transparent_70%)] flex flex-col items-center justify-center p-5'>
            <h2 className=' font-serif'>Register</h2>
            <form className=' w-72  flex flex-col justify-center items-center p-5 gap-2 '>

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

                <div className='flex flex-row justify-between'>
                    <div>
                        <button type='submit' onClick={submit} className='p-2 w-auto h-auto rounded-xl bg-slate-300'> Add</button>
                    </div>
                </div >
            </form>
        </div>


    )
}

export default Register