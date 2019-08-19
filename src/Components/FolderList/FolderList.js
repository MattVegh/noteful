import React from 'react'
import './FolderList.css'

export default function FolderList(props) {
    return (
        <div className='FolderList'>
            <ul>
                {/* {props.folder.map()} */}
                <button>Add Folder</button>
            </ul>
        </div>
    )
}