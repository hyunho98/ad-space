import { useState, useEffect, createContext } from 'react'
import { useNavigate } from 'react-router-dom'

export const UserContext = createContext()

function UserProvider({ children }) {
    const [user, setUser] = useState()
    const [ads, setAds] = useState([])
    const navigate = useNavigate()

    useEffect(async () => {
        await fetch('/ads')
            .then((response) => response.json())
            .then((data) => {
                setAds(data)
            })
        fetch('/me')
            .then((response) => {
                if (response.ok) {
                    response.json().then((data) => setUser(data))
                }
            })
    }, [])

    return (
        <UserContext.Provider value={{
            user, setUser,
            ads, setAds,
            navigate
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider