import { useRouter } from 'next/router'
import React from 'react'

const Course = () => {
    const router = useRouter()
    
  return (
    <div>{router.pathname}</div>
  )
}

export default Course