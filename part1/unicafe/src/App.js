import { useState } from 'react'

const Button = ({update, text}) => {
  return (
    <button onClick={update}>{text}</button>
  )
}

const Display = ({text}) => <p>{text}</p>


//Statistics Table
const Statistics = (props) => {
  return(
    <div>
        <h1>Statistics</h1>
        {props.count === 0 ? <Display text = 'No feedback given' value=''/> :
        <>
        <table>
          <tbody>
            <tr>
              <td><Display text = 'Good'/></td>
              <td>{props.good}</td>
            </tr>
            <tr>
              <td><Display text = 'Neutral'/></td>
              <td>{props.neutral}</td>
            </tr>
            <tr>
              <td><Display text = 'Bad'/></td>
              <td>{props.bad}</td>
            </tr>
            <tr>
              <td><Display text = 'Total'/></td>
              <td>{props.total}</td>
            </tr>
            <tr>
              <td><Display text = 'Average'/></td>
              <td>{props.average}</td>
            </tr>
            <tr>
              <td><Display text= 'Positive'/></td>
              <td>{props.positive} %</td>
            </tr>
          </tbody>
        </table>
        </>
  }
      </div>
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

  //Good 
  const setToGood = newValue => {
    console.log('value now', newValue)
    setGood(newValue)
    setTotal(newValue)
    setScore(score + 1)
    setCount(count + 1)
    setPositiveCount(positiveCount + 1)
  }
  //Neutral
  const setToNeutral = newValue => {
    console.log('value now', newValue)
    setNeutral(newValue)
    setTotal(newValue)
    setScore(score + 0)
    setCount(count + 1)
  }
  //Bad
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
        <Statistics count={count} good={good} bad={bad} neutral={neutral} total={total} average={average} positive={positive}/>
    </div>
    
  )
}


export default App;
