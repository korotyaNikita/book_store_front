import { createContext, useContext, useEffect, useState } from "react"
import http from "../../actions/axios"

import { useNavigate } from "react-router-dom"

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [errors, setErrors] = useState([])
    const csrf = () => http.get('/sanctum/csrf-cookie')
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            getUser()
        }
    }, [])

    const getUser = async () => {
        const { data } = await http.get("/api/user")
        setUser(data)
    }

    const login = async (email, password) => {
        const data = {
            email: email,
            password: password
        }
        await csrf()
        try {
            setErrors([])
            await http.post('/api/login', data)
            await getUser()
            navigate('/')
        } catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors)
            }
        }
    
    }

    const register = async (title, email, password, passwordConfirmation) => {
        const data = {
            title: title,
            email: email,
            password: password,
            password_confirmation: passwordConfirmation
        }
        await csrf()
        try {
            setErrors([])
            await http.post('/api/register', data)
            await http.post('/api/login', { email, password })
            await getUser()
            navigate('/')
        } catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors)
            }
        }   
    }

    const logout = () => {
        http.post("/api/logout").then(() => {
            setUser(null)
        })
    }

    return <AuthContext.Provider value={{ user, getUser, errors, login, register, logout }}>
        {children}
    </AuthContext.Provider>
}

export default function useAuthContext() {
    return useContext(AuthContext)
}