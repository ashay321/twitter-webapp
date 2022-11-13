import { Button } from '@mui/material'
import React from 'react'
import './AdminPage.css';
import freetwitter from '../../../Asserts/Images/freetwitter.png'
import AdminSideBar from './AdminSideBar';
export default function AdminPage() {
  return (
    <div className='admin__header'>
        <div className='admin__nav'>
            <img className='twitter__logo' src={freetwitter} alt="Twiiter logo"/>
            <h2>Welcome admin</h2>
            <Button variant='contained' className='twitter__logout'>Logout</Button>
        </div>
        <AdminSideBar />
    </div>
  )
}
