import React from 'react'

export default function Person({ name, number, deletePerson }) {
  return (
    <div>
      <li>{name} {number} <button onClick={deletePerson}>Delete</button> </li>
    </div>
    
  )
}
