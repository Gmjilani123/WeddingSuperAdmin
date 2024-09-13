import React from 'react'
import { Outlet } from 'react-router-dom'
import Aside from '../../Components/aside/Aside'
import Header from '../../Components/commonComponents/header/Header'


function AdminPage() {
    return (
        <>
            <div className="aiz-main-wrapper">
                <Aside/>
                <div className="aiz-content-wrapper aiz-main-wrapper-2">
                    <Header/>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
}

export default AdminPage