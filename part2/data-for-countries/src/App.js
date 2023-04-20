import { useState, useEffect } from "react";
import axios from "axios";
import Country from "./Country";


function App() {

  const [countries, setCountries] = useState([])
  const [ newSearch, setNewSearch] = useState('')
  const [showAll, setShowAll] = useState(true)
  
  const handleNewSearch = (event) => {
    event.preventDefault()
    setShowAll(false)
    console.log(event.target.value)
    const searchValue = event.target.value
   
    setNewSearch(searchValue, () => {
      console.log(`searching for ${newSearch}`)
      axios
      .get(`https://restcountries.com/v3.1/name/${newSearch}`)
      .then (response => {
        setCountries(response.data)
      })
      .catch (error => {
        console.log('error')
      })
    })
  }

  const countriesToShow = showAll
  ? countries
  : countries.filter (country => country.toLowerCase().includes(newSearch.toLowerCase()))


  return (
    <div>
      <input
      value={newSearch}
      onChange={handleNewSearch}
      />
      <ul>
        {countriesToShow.map(countries=>
        <Country
          name ={countries.name}
          />
          )}
          
      </ul>
      
    </div>
  );
}

export default App;
