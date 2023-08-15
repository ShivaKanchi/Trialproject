import React from 'react'
import { useNavigate } from 'react-router-dom'

import './Sidebar.css'
const Sidebar = () => {

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
        <div id='sidebar'>
            <div className='flex flex-col items-center'>
                <div style={styles} className=' flex flex-wrap flex-col gap-2 items-center justify-center'>
                    {
                        pagebuttons.map((data, index) => <button id='mainbuttons' key={index} className=' px-3 h-auto w-auto  text-[white] font-mono rounded-md border-[0.3px] hover:scale-105 bg-gradient-to-t to-[#fff0] from-black' onClick={() => { navigate(data.link) }}>{data.name}</button>
                        )
                    }
                </div>

            </div >
        </div>
    )
}

export default Sidebar