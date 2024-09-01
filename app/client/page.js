'use client'
import { useState } from 'react'

const ClientPage = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-7xl font-bold mb-4 '>{count}</h1>
      <button className='btn btn-primary' onClick={() => setCount((prev) => prev + 1)}>
        Increment
      </button>
    </>
  )
}

export default ClientPage
