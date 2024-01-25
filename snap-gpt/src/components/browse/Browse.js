import React from 'react'
import { useSelector } from 'react-redux'

function Browse() {
    const user = useSelector((store) => store.user);
    return (
        <div className='text-white'>{user.displayName}</div>
    )
}

export default Browse