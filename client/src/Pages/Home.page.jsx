import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const styles = {
        background: "linear-gradient(#fff 0 0) padding-box,   linear-gradient(180deg, #d40e0e   0%, #fff 90%) border-box",
        border: "1px solid transparent",
        borderRaidus: "30px",
    };
    const pagebuttons = [

        {
            name: "Form", link: "/form"
        },
        {
            name: "Responses", link: "/response"
        },
        {
            name: "MapView", link: "/mappoint"
        },

    ]
    return (
        <>
            <div className='flex flex-col items-center'>
                <div style={styles} className='w-[30%] p-6 m-5 flex flex-wrap gap-2 items-center justify-center border bg-gray-200 rounded-md'>
                    {
                        pagebuttons.map(data => <button className='px-3 h-auto w-auto bg-gradient-to-b from-[#fff0] to-[#d40e0e] text-black font-mono rounded-md border-[0.3px] hover:scale-105' onClick={() => { navigate(data.link) }}>{data.name}</button>
                        )
                    }
                </div>
            </div >
        </>
    )
}

export default Home