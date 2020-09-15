import React, { useEffect, useState } from 'react'

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  const activateStatus = () => {
    setEditMode(true)
  }
  const deactivateStatus = () => {
    setEditMode(false)
    props.updateStatus(status)
  }
  const changeStatus = (e) => {
    setStatus(e.currentTarget.value)
  }
  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  return (
    <div>
      {!editMode ? (
        <div>
          <span onDoubleClick={activateStatus}>Status : {status || 'Absent status'}</span>
        </div>
      ) : (
        <div>
          <input
            onChange={(e) => {
              changeStatus(e)
            }}
            autoFocus={true}
            onBlur={deactivateStatus}
            value={status}
          />
        </div>
      )}
    </div>
  )
}

export default ProfileStatus
