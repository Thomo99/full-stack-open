const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
  return (
    <div>
      <header>
        <h1>{course.name}</h1>
      </header>
      <content>
          {course.parts.map(part => (
            <Content part = {part.name} exercises = {part.exercises} />
          ))}
       </content>
      <total>
        <p>Number of exercises {course.parts.reduce ((total, part) => total + part.exercises, 0 )}</p>
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