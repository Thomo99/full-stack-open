import { useState } from "react";
import Person from "./Person";

function App() {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '040-1234567',
      id: 1,
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [newSearch, setNewSearch]= useState('')
  

  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
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
    setNewNumber('')
    console.log(persons)
  }
  const namesToShow = showAll
    ? persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))
    : persons

  const handleNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNewNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleNewSearch = (event) => {
    console.log(event.target.value)
    setNewSearch(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter: <input 
          value={newSearch}
          onChange={handleNewSearch}
        />
      </div>
      <h2>Add new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNewName}
          />
        </div>
        <div>
          number: <input 
          value={newNumber}
          onChange={handleNewNumber}
          />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul style = {{ listStyle: "none" }}>
        {namesToShow.map(person =>
          <Person key = {person.id} name = {person.name} number = {person.number}/>
        )}
      </ul>
    </div>
  )
}

export default App;
