import React from 'react'
import {AuthContextProvider, useAuthContext}  from '../../../contexts/auth';

export default function ActivityPage() {
  const {user} = useAuthContext()
  console.log(user)
  return (
    <div>Activity</div>
  )
}
