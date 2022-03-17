import React from 'react'

function todo({title, datetime}) {
  return (
    <div className='todo'>
    <h1>{title}</h1>
    <p>{datetime}</p>
    </div>
  )
}

export default todo