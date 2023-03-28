const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <header>
        <h1>{course}</h1>
      </header>
      <content>
          {parts.map(part => (
            <Content part = {part.name} exercises = {part.exercises} />
          ))}
       </content>
      <total>
        <p>Number of exercises {parts.reduce ((total, part) => total + part.exercises, 0 )}</p>
      </total>
        
    </div>
  )
}

const Content = (props) => {
  return(
  <div>
      <p>{props.part} {props.exercises}</p>
  </div>
  )


}

export default App