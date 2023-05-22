import React, { useState } from 'react'

const FileFolder = ({ data, handleInsertNode }) => {
    const [expand, setExpand] = useState(true)
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: null,
    })

    const handleNewFileFolder = (e, isFolder) => {
        e.stopPropagation();
        setExpand(true)
        setShowInput({
            visible: true,
            isFolder,
        }
        )
    }
    const onAddFileFolder = (e) => {
        if (e.keyCode === 13 && e.target.value) {
            //logic
            handleInsertNode(data.id, e.target.value, showInput.isFolder)
            setShowInput({ ...showInput, visible: false })
        }
    }
    return (
        <div className='flex flex-col ml-6'>
            <div >
                {
                    data.isFolder ? (
                        <div>
                            <div id={data.id} className='border flex flex-row justify-between cursor-pointer bg-slate-100' onClick={() => setExpand(!expand)}>
                                <div className='flex flex-row gap-2'>
                                    <h1>📁</h1>
                                    <h1>{data.name}</h1>

                                </div>
                                <div className='flex flex-row gap-2 mx-2'>
                                    <button className='border cursor-pointer' onClick={(e) => handleNewFileFolder(e, true)}>+ 📁</button>
                                    <button className='border' onClick={(e) => handleNewFileFolder(e, false)}>+  📄</button>
                                </div>
                            </div>

                            <div className={`${expand ? "block" : "hidden"} `}>
                                {
                                    showInput.visible && (
                                        <div className='flex flex-row ml-6'>
                                            {showInput.isFolder ? <h1>📁</h1> : <h1>📄</h1>}
                                            <input
                                                type='text'
                                                autoFocus
                                                onBlur={() => setShowInput({ ...showInput, visible: false })}
                                                onKeyDown={onAddFileFolder}
                                                className='border'
                                            />
                                        </div>
                                    )
                                }
                                {
                                    data.items.map((data) => (<FileFolder data={data} handleInsertNode={handleInsertNode} />))
                                }
                            </div>
                        </div>
                    )
                        :
                        (
                            <div>
                                <div id={data.id} className='border flex flex-row gap-2 ' >
                                    <div>
                                        <h1>📄</h1>
                                    </div>
                                    <h1>{data.name}</h1>

                                </div>
                            </div>
                        )

                }
            </div>

        </div >
    )


}

export default FileFolder