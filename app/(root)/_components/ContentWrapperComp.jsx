import React from 'react'

const ContentWrapperComp = ({children}) => {
  return (
      <div className='h-[70vh] overflow-auto'>{children}</div>
  )
}

export default ContentWrapperComp