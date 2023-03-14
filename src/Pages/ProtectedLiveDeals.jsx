import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ProtectedLiveDeals = ({ LiveDealsDetails }) => {
    const navigate = useNavigate()
    const { userData } = useSelector((state) => state.loginData)
    useEffect(() => {
        if (!userData?.id) navigate('/login')
    }, [])

    if (userData?.id) {
        return LiveDealsDetails
    } else {
        return "Please login to see content!"
    }
}

export default ProtectedLiveDeals