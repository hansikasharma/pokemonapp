import React from 'react'
import { Navigate } from 'react-router-dom'
function Protected({ user, children }) {
if(!user || user.error){
    return <Navigate to="/login" replace />
  }
  
  
  return children
}

export default Protected