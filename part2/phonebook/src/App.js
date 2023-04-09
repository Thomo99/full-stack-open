import { useState } from "react";
import Name from "./Name";

function App() {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      id: 1,
    }
  ])
  const [newName, setNewName] = useState('')
  

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      id: persons.length + 1
    }
    for (let j = 0; j < persons.length; j++){
      if (persons[j].name === newName){
        alert(`${newName} is already added to the phonebook`)
        return null
      }
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
    console.log(persons)
  }
  const handleNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNewName}
          />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul style = {{ listStyle: "none" }}>
        {persons.map(name =>
          <Name key = {name.id} name = {name} />
        )}
      </ul>
    </div>
  )
}

export default App;
