import { useState, useEffect } from "react";
import axios from "axios";
import Country from "./Country";


function App() {

  const [countries, setCountries] = useState([])
  const [ newSearch, setNewSearch] = useState('')
  const [showAll, setShowAll] = useState(true)


  
  const handleNewSearch = (event) => {
    event.preventDefault();
    setShowAll(false);
    const searchValue = event.target.value;
    setNewSearch(searchValue);
  };
  
  useEffect(() => {
    console.log(`searching for ${newSearch}`);
    axios
      .get(`https://restcountries.com/v3.1/name/${newSearch}`)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.log('error');
      });
  }, [newSearch]);

  const countriesToShow = showAll
  ? countries
  : countries.filter((country) =>
      typeof country.name.common === 'string' &&
      country.name.common.toLowerCase().includes(newSearch.toLowerCase())
    );


  return (
    <div>
      <input
      value={newSearch}
      onChange={handleNewSearch}
      />
      <ul style={{listStyleType: "none"}}>
      {countriesToShow.map((country) => (
        <Country
          key={country.name.common}
          name={country.name.common}
        />
      ))}
      {countriesToShow.length === 1 && (
        <div>
          <p>capital {countriesToShow[0].capital}</p>
          <p>area {countriesToShow[0].area}</p>
        </div>
      )}
      </ul>
      
    </div>
  );
}

export default App;
