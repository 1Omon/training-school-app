import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='w-full min-h-screen bg-primary-dark text-color-dark'>
      {children}
    </div>
  )
}

export default layout
