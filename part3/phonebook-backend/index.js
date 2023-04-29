const express = require('express')
const app = express()

app.use(express.json())

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]
//get
app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {

  const date = new Date('Sat Jan 22 2022 22:27:20 GMT+1000');
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'Australia/Sydney'
  };
  const formattedDate = date.toLocaleString('en-AU', options);
  
  console.log(formattedDate);
  response.send(`Phonebook has info for ${persons.length} people \n ${formattedDate}`)
})


const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)