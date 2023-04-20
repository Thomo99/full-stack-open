import { useState, useEffect } from "react";



function App() {

  const [countries, setCountries] = useState([])
  const [ newSearch, setNewSearch] = useState('')
  const [showAll, setShowAll] = useState(true)
  
  const handleNewSearch = (event) => {
    setShowAll(false)
    console.log(event.target.value)
    setNewSearch(event.target.value)
  }

  const countriesToShow = showAll
  ? countries
  : countries.filter (country => country.toLowerCase.includes(newSearch.toLowerCase()))


  return (
    <div>
      <input
      value={newSearch}
      onChange={handleNewSearch}
      />
      <ul>
        {countriesToShow.map(countries=>
          {countries.name})}
      </ul>
      
    </div>
  );
}

export default App;
