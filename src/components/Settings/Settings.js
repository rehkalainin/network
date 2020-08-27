import React from 'react'
import css from './Settings.module.css'
import IncrementerClass from '../forPracticing/IncrementerClass'
import IncrementerFunc from '../forPracticing/IncrementerFunc'

const Settings = () => {
  return (
    <div>
      Class component
      <IncrementerClass />
      Func component
      <IncrementerFunc />
    </div>
  )
}
export default Settings
