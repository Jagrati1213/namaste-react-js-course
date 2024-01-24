import React from 'react'
import { Outlet } from 'react-router-dom'

// Outlet :- manage what will user show in different pages.
function Body() {
    return (
        <div className='z-20 relative'>
            <Outlet />
        </div>
    )
}

export default Body