import React from 'react'
import { Outlet } from 'react-router-dom'

// Outlet :- manage what will user show in different pages.
function Body() {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default Body