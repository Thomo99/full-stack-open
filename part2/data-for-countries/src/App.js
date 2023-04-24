import { useState, useEffect } from "react";
import axios from "axios";


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
      {countriesToShow.length > 1 &&
      <ul style={{listStyleType: "none"}}>
      {countriesToShow.map((country) => (
        <div>
        <li key={country.name.common}>{country.name.common}</li>
        <button onClick={() => setNewSearch(country.name.common)}>show</button>
        </div>
      ))}
      </ul>
      }
      
      {countriesToShow.length === 1 && (
        <div>
          <h1>{countriesToShow[0].name.common}</h1>
          <p>capital {countriesToShow[0].capital}</p>
          <p>area {countriesToShow[0].area}</p>
          <div></div>
          <div>
            <h2>languages</h2>
            <ul>
              {Object.values(countriesToShow[0].languages).map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
          <img src={countriesToShow[0].flags.png}/>
          </div>
        </div>
      )}
      
      
    </div>
  );
}

export default App;
