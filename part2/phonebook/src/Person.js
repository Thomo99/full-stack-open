import React from 'react'

export default function Person({ name, number, handleDelete }) {
  return (
    <div>
      <li>{name} {number} <button onClick={handleDelete}>Delete</button> </li>
    </div>
    
  )
}
