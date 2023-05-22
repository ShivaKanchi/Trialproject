import React from 'react'



// type 0 = folder , type 1 = file
filesandfolder = [
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
                contains: [
                ],
            }

        ],
    }
]

const FileManger = () => {
    return (
        <h1>FileManger</h1>
    )
}

export default FileManger