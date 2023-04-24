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

export default Course