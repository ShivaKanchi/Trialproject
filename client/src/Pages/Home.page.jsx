import React from 'react'
import Forms from '../Components/Form/Form.component'
import Response from '../Components/Response/Response.component'

const Home = () => {


    return (
        <>
            <div className='p-6 flex justify-center'>
                <Forms />
            </div>
            <div>
                <Response />
            </div>
        </>
    )
}

export default Home