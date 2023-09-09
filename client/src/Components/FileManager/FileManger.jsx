import React from 'react'
import { useState } from 'react'
import FileFolder from './FileFolder'
import useTraverseTree from './Hooks/use-traverse-tree'


// const [newfilefolder, setNewfilefolder] = useState(false)

// type 0 = folder , type 1 = file
const filesandfolders =
{
    id: 1,
    isFolder: true,
    name: 'Root',
    count: '2',
    items: [
        {
            id: 2,
            isFolder: false,
            name: 'DBM.txt',
            count: '0',
            items: [],
        },
        {
            id: 3,
            isFolder: false,
            name: 'resume.doc',
            count: '0',
            items: [],
        },
        {
            id: 4,
            isFolder: false,
            name: 'imp.doc',
            count: '0',
            items: [],
        },
        {
            id: 5,
            isFolder: false,
            name: 'imp.doc',
            count: '0',
            items: [],
        },
        {
            id: 6,
            isFolder: true,
            name: 'study',
            count: '2',
            items: [
                {
                    id: 7,
                    isFolder: false,
                    name: 'dsa.txt',
                    count: '0',
                    items: [],
                }, {
                    id: 8,
                    isFolder: false,
                    name: 'aadhar.doc',
                    count: '0',
                    items: [],
                }

            ],
        },
    ],
}

const FileManger = () => {

    const [explorer, setExplorer] = useState(filesandfolders)
    const { insertNode } = useTraverseTree();
    const handleInsertNode = (folderId, item, isFolder) => {
        const finaltree = insertNode(explorer, folderId, item, isFolder)
        setExplorer(finaltree)
    }
    return (
        <div className='w-[80vh] m-5'>
            <h1>
                File Manager
            </h1>
            <div className='my-5 border'>
                <FileFolder data={explorer} handleInsertNode={handleInsertNode} />
            </div>
        </div>
    )
}

export default FileManger