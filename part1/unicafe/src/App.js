import { useState } from 'react'

const Button = ({update, text}) => {
  return (
    <button onClick={update}>{text}</button>
  )
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = newValue => {
    console.log('value now', newValue)
    setGood(newValue)
  }
  const setToNeutral = newValue => {
    console.log('value now', newValue)
    setNeutral(newValue)
  }
  const setToBad = newValue => {
    console.log('value now', newValue)
    setBad(newValue)
  }

  return (
    <div>
      <div>
        <h1>Give Feedback</h1>
        <Button update={() => setToGood(good + 1)} text='good'/>
        <Button update={() => setToNeutral(neutral + 1)} text='neutral'/>
        <Button update={() => setToBad(bad + 1)} text='bad'/>
      </div>
      <div>
        <h1>Statistics</h1>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
      </div>
    </div>
    
  )
}


export default App;
