import { useState, useEffect } from "react";
import Person from "./Person";
import axios from "axios";

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [newSearch, setNewSearch]= useState('')
  
  //Fill database
  useEffect (() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  //Add to database
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
    axios
    .post('http://localhost:3001/persons', nameObject)
    .then(response => {
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
      console.log(persons)
    })
  }
  //Remove from database
  const deleteThisPerson = (id) => {
    const url = `http://localhost:3001/persons/${id}`
    const person = persons.find(n => n.id ===id)
    const deletePerson = { ...person, deleted: true }

    axios
    .delete(url)
    .then(response => {
      // handle success
      setPersons(persons.filter((person) => person.id !== id))
    })
    .catch(error => {
      // handle error
      console.log(error)
    })
  }

  const namesToShow = showAll
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))

  const handleNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNewNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleNewSearch = (event) => {
    setShowAll(false)
    console.log(event.target.value)
    setNewSearch(event.target.value)
  }
  const handleDelete = (id) => {
    if (window.confirm("Delete this person?")) {
      deleteThisPerson(id);
    }
  };
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
          <Person
          key = {person.id} 
          name = {person.name} 
          number = {person.number}
          handleDelete = {() => handleDelete(person.id)}
          />
        )}
      </ul>
    </div>
  )
}

export default App;
