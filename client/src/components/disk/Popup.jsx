import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createDir } from '../../actions/file'
import { setPopupDisplay } from '../../reducers/fileReducer'

const Popup = () => {

    const [dirName, setDirName] = useState("")
    const popupDisplay = useSelector(state => state.files.popupDisplay)
    const currentDir = useSelector(state => state.files.currentDir)
    const dispatch = useDispatch()

    function createHandler() {
        dispatch(createDir(currentDir, dirName))
        setDirName("")
        dispatch(setPopupDisplay("none"))
    }

    return (
        <div className="popup" onClick={() => dispatch(setPopupDisplay("none"))} style={{ display: popupDisplay }}>
            <div className="popup__content" onClick={(event => event.stopPropagation())}>
                <div className="popup__header">
                    <div className="popup__title">Create folder</div>
                    <div className="popup__close" onClick={() => dispatch(setPopupDisplay("none"))} style={{ cursor: 'pointer' }}>X</div>
                </div>
                <input type="text" placeholder="Enter folder name..." onChange={e => setDirName(e.target.value)} value={dirName || ""} />
                <button className="poput__create" onClick={() => createHandler()}>Create</button>
            </div>
        </div >
    )
}

export default Popup