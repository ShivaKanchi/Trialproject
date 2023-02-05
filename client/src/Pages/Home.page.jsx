import React from 'react'
import Forms from '../Components/Form/Form.component'
const Home = () => {
    return (
        <>
            <div className='flex flex-col items-center bg-slate-500'>
                <div className='w-96 p-6 m-5 flex justify-center border bg-gray-200'>
                    <Forms />
                </div>
            </div>

        </>
    )
}

export default Home