const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return (
    <div>
    {courses.map(course => (
      <Course key={course.id} course={course} />
    ))}
    </div>
    )

  
}


//Printout of courses
const Course = ({course}) => {
  return(
    <div>
      <header>
        <h1>{course.name}</h1>
      </header>
      <div>
        {course.parts.map(part => (
        <Content key = {part.id} part = {part.name} exercises = {part.exercises} partId = {part.id}/>//courses
      ))}
      </div>
        <div>
          <p style={{ fontWeight: 'bold' }}>Total of {course.parts.reduce ((total, part) => total + part.exercises, 0 )} exercises</p>
        </div>
    </div>
  )
}

//Used to display the mapped array of the course parts
const Content = ({part, exercises}) => {
  return(
  <div>
      <p>{part} {exercises}</p>
  </div>
  )


}

export default App


{/* <total>
        <p>Number of exercises {course.parts.reduce ((total, part) => total + part.exercises, 0 )}</p>
      </total> */}
