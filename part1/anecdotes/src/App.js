import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.value}>{props.text}</button>
)


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  //Anecdote displayed
  const [selected, setSelected] = useState(0)
  //Random number to select Array
  const setToSelected = newSelect=> {
    newSelect = Math.floor(Math.random() * anecdotes.length);
    setSelected(newSelect)
  }
  //Votes - Zero filled array
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  

  const setVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }


  return (
    <div>
      {anecdotes[selected]}
      <div>
        <Button value={() => setToSelected()} text='Next anecdote'/>
        <Button value={() => setVote()} text='Vote'/>
      </div>
      {votes[selected]}
    </div>
  )
}

export default App