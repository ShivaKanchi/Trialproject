import React from 'react'
import { useState } from 'react'


// const [newfilefolder, setNewfilefolder] = useState(false)

// type 0 = folder , type 1 = file
const filesandfolders = [
    {
        type: 0,
        name: 'Study',
        count: '2',
        contains: [
            {
                type: 0,
                name: 'DBM',
                count: '0',
                contains: [
                ],
            }, {
                type: 1,
                name: 'resume',
                count: '0',
                contains: [],
            }

        ],
    }
]

const FileFolder = (data) => {
    console.log(data)
    return (
        <div className='flex flex-col'>

            <div className='border p-2 flex felx-row items-center justify-between w-60'>
                {
                    data.type === 0 ? (
                        <h1>📁</h1>
                    ) : (
                        <h1>📄</h1>
                    )
                }
                <h1>{data.name}</h1>
                <div className='flex flex-row cursor-pointer'>
                    +
                    <div className='hidden'>
                        <div>
                            +📁
                        </div>
                        <div>
                            +📄
                        </div>
                    </div>
                </div>
            </div>
            {/* {
                data?.contains?.length === 0 ? (<></>) : (
                    <>
                        {data.contains.map((data) => (
                            <FileFolder data={data} />
                        ))}

                    </>
                )
            } */}
        </div>
    )


}


const FileManger = () => {
    return (

        <div className='m-10'>

            <h1 className='my-5'>FileManger</h1>
            {

                filesandfolders.map((data) => (
                    <FileFolder data={data} key={data.name} />
                )
                )

            }

        </div>

    )
}

export default FileManger