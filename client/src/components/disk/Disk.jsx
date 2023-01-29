import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFiles, uploadFile } from '../../actions/file'
import FileList from './fileList/FileList'
import Popup from './Popup'
import { setCurrentDir, setPopupDisplay } from '../../reducers/fileReducer'
import './disk.css'


const Disk = () => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    const dirStack = useSelector(state => state.files.dirStack)
    // const popDir = useSelector(state => state.files.pop)

    useEffect(() => {
        dispatch(getFiles(currentDir))
    }, [currentDir, dispatch])

    function showPopupHandler() {
        dispatch(setPopupDisplay("flex"))
    }

    function backClickHandler() {
        dispatch(setCurrentDir(dirStack.popToStack))
    }

    function fileUpLoadHandler(event) {
        const files = [...event.target.files]

        files.forEach(file => dispatch(uploadFile(file, currentDir)))
    }

    return (
        <div className="disk">
            <div className="disk__btns">
                {currentDir &&
                    <button className="disk__back" onClick={() => backClickHandler()}>Back</button>}
                <button className="disk__create" onClick={() => showPopupHandler()}>Create folder</button>
                <div className="disk__upload">
                    <label htmlFor="disk__upload-input" className="disk__upload-label" >Upload file</label>
                    <input multiple={true} onChange={(event) => fileUpLoadHandler(event)} type="file" id="disk__upload-input" className="disk__upload-input" />
                </div>
            </div>
            <FileList />
            <Popup />
        </div>
    )
}

export default Disk