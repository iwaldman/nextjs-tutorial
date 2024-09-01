'use client'

const error = (error) => {
  return <div>there was an error... {error.error.message}</div>
}

export default error
