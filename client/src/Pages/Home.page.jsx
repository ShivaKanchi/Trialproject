import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Homepage.css'
const Home = () => {
    const navigate = useNavigate()
    const styles = {
        background: "linear-gradient(#fff 0 0) padding-box,   linear-gradient(180deg, black   0%, #fff 90%) border-box",
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
        {
            name: "FileManager", link: "/filemanager"
        },
        {
            name: "Animation", link: "/animation"
        },
        {
            name: "Hover Animation", link: "/hoveranimation"
        },
    ]
    return (
        <>
            <div className='Homepage'>
                <div className='flex flex-col items-center'>
                    <div style={styles} className='mainbuttons w-[30%] p-6 m-5 flex flex-wrap gap-2 items-center justify-center bg-gray-200 rounded-md'>
                        {
                            pagebuttons.map((data, index) => <button key={index} className=' px-3 h-auto w-auto  text-[#fff] font-mono rounded-md border-[0.3px] hover:scale-105 hover:bg-gradient-to-t from-[#fff0] to-black' onClick={() => { navigate(data.link) }}>{data.name}</button>
                            )
                        }
                    </div>

                </div >
            </div>

        </>
    )
}

export default Home