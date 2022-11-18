import React from 'react'
import { useStateValue } from '../../../StateProvider';
import './SettingCard.css'

function SettingCard({title, onClick}) {

  return (
    <div className='settingCard' onClick={onClick}>
        {title}
    </div>
  )
}

export default SettingCard