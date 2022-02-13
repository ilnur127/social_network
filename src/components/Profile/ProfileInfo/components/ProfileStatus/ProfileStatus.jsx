import React, { useState, useEffect } from 'react'

import classes from './ProfileStatus.module.css'

export default function ProfileStatus({status, updateStatus}) {
    const [editMode, setEditMode] = useState(false)
    const [statusState, setStatusState] = useState(status)
    
    function deactivateEditMode() {
        setEditMode(false)
        updateStatus(statusState)
    }
    useEffect(() => {
        setStatusState(status)
    }, [status])
    return (
        <div className={classes.description}>
            <div>Статус</div>
            <div>
                {!editMode ?
                    <span onDoubleClick={() => setEditMode(true)}>{statusState || '-----'}</span>
                : <input
                    autoFocus='true'
                    onBlur={deactivateEditMode}
                    onChange={(event) => setStatusState(event.target.value)}
                    type="text"
                    value={statusState}
                />
                }
            </div>
        </div>
    )
}