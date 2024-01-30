import React from 'react'
import { Outlet } from 'react-router-dom'

// Outlet :- manage what will user show in different pages.
function Body() {
    return (
        <Outlet />
    )
}

export default Body