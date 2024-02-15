import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const ProtectedRoute = ({ isLoggedIn, element: Component, ...props  }) => {
    const { pathname } = useLocation()
    localStorage.setItem('lastPath', pathname)

    return (
        isLoggedIn  ? <Component {...props} /> : <Navigate to="/" replace/>
    )
}

export default ProtectedRoute