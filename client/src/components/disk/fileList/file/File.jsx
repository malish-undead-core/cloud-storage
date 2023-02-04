import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFile, downloadFile } from '../../../../actions/file'
import dirLogo from '../../../../assets/img/dir.png'
import fileLogo from '../../../../assets/img/file.png'
import { pushToStack, setCurrentDir } from '../../../../reducers/fileReducer'
import sizeFormat from '../../../../utils/sizeFormat'
import "./file.css"

const File = ({ file }) => {

    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    const fileView = useSelector(state => state.files.view)

    function openDirHandler(file) {
        if (file.type === "dir") {
            dispatch(pushToStack(currentDir))
            dispatch(setCurrentDir(file._id))
        }
    }

    function downloadClickHandler(e) {
        e.stopPropagation()
        downloadFile(file)
    }

    function deleteClickHandler(e) {
        e.stopPropagation()
        dispatch(deleteFile(file))
    }

    if (fileView === "list") {
        return (
            <div className="file" onClick={() => openDirHandler(file)}>
                <img src={file.type === "dir" ? dirLogo : fileLogo} alt="" className="file__img" />
                <div className="file__name">{file.name}</div>
                <div className="file__date">{file.date.slice(0, 10)}</div>
                <div className="file__size">{sizeFormat(file.size)}</div>
                {file.type !== "dir" &&
                    <button onClick={(e) => downloadClickHandler(e)} className="file__btn file__download">Download</button>}
                <button onClick={(e) => deleteClickHandler(e)} className="file__btn file__delete">Delete</button>
            </div >
        )
    }

    if (fileView === "plate") {
        return (
            <div className="file-plate" onClick={() => openDirHandler(file)}>
                <img src={file.type === "dir" ? dirLogo : fileLogo} alt="" className="file-plate__img" />
                <div className="file-plate__name">{file.name}</div>
                <div className="file-plate__btns">
                    {file.type !== "dir" &&
                        <button onClick={(e) => downloadClickHandler(e)} className="file-plate__btn file-plate__download">Download</button>}
                    <button onClick={(e) => deleteClickHandler(e)} className="file-plate__btn file-plate__delete">Delete</button>
                </div>
            </div >
        )
    }
}

export default File