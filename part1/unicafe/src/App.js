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
  const [total, setTotal] = useState(0)
  const [score, setScore] = useState(0)
  const [count, setCount] = useState(0)
  const [positiveCount, setPositiveCount] = useState(0)
  
  const average = score/count;
  const positive = positiveCount/count * 100;

  const setToGood = newValue => {
    console.log('value now', newValue)
    setGood(newValue)
    setTotal(newValue)
    setScore(score + 1)
    setCount(count + 1)
    setPositiveCount(positiveCount + 1)
  }
  const setToNeutral = newValue => {
    console.log('value now', newValue)
    setNeutral(newValue)
    setTotal(newValue)
    setScore(score + 0)
    setCount(count + 1)
  }
  const setToBad = newValue => {
    console.log('value now', newValue)
    setBad(newValue)
    setTotal(newValue)
    setScore(score - 1)
    setCount(count + 1)
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
        <p>Total {total}</p>
        <p>Average {average}</p>
        <p>Positive {positive}%</p>
      </div>
    </div>
    
  )
}


export default App;
