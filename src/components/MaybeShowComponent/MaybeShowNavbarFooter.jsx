import React, { useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'

const MaybeShowNavbarFooter = ({children}) => {

    const location = useLocation()

    const [ShowNavbarFooter, setShowNavbarFooter] = useState(false)

    useEffect(() => {
        console.log('this is location: ', location)
        if(location.pathname === '/login' || location.pathname === '/signup'){
            setShowNavbarFooter(false)
        } else {
            setShowNavbarFooter(true)
        }
    }, [location])

    return (
    <div>{ShowNavbarFooter && children}</div>
    )
}

export default MaybeShowNavbarFooter