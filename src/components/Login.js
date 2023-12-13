import React,{useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from './Auth'

function Login() {
    const navigate = useNavigate()
    const [user,setUser] = useState('')
    const auth = useAuth()
    const location = useLocation()

    const redirectPath = location.state?.path || '/'

    const handlelogin = () => {
        auth.login(user)
        navigate(redirectPath, {replace: true})
    }
  return (
    <div>
        <label>
            Username: <input type='text' onChange={(e) => setUser(e.target.value)} placeholder='enter username'/>
        </label>
        <button onClick={handlelogin}>Login</button>
    </div>
  )
}

export default Login