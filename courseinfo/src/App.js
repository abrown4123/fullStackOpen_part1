import React from 'react';


const Header = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      {props.parts.map((part, index) => <Part course={part.name} exercise={part.exercises} index={index} />)}
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p key={props.index + props.course}> {props.course} {props.exercise} </p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.numberOfCourses}</p>
    </>
  )
}

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
      <Header title={course.name}/>
      <Content parts={course.parts}/>
      <Total numberOfCourses={course.parts.length}/>
    </div>
  )
}

export default App;
