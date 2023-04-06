const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      }
    ]
  }
  return <Course course = {course}/>

  
}

const Course = ({course}) => {
  return(
    <div>
      <header>
      <h1>{course.name}</h1>
      </header>
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


{/* <total>
        <p>Number of exercises {course.parts.reduce ((total, part) => total + part.exercises, 0 )}</p>
      </total> */}
      // <div>
    //   <header>
    //     <h1>{course.name}</h1>
    //   </header>
      
    //       {course.parts.map(part => (
    //         <Content key = {part.id} part = {part.name} exercises = {part.exercises} partId = {part.id}/>
    //       ))}
       
      
        
    // </div>