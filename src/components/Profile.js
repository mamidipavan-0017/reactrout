import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'

function Profile() {
  const navigate = useNavigate()
  const auth = useAuth()

  const handleLogout = () => {
    auth.logout()
    navigate('/')
  }
  return (
    <div>
      Welcome {auth.user}
      <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default Profile