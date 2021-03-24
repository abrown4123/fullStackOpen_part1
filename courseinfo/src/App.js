import React from 'react';

const courses = [
  {
    part: "Fundamentals of React",
    exercise: 10,
  },
  {
    part: "Using props to pass data",
    exercise: 7,
  },
  {
    part: "State of a component",
    exercise: 14,
  }
]


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
      {props.parts.map((course, i) => <p key={i + course.part}> {course.part} {course.exercise} </p>)}
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.exercises}</p>
    </>
  )
}

const App = () => {
  return (
    <div>
      <Header title="Half Stack application development"/>
      <Content parts={courses}/>
      <Total exercises={courses.length}/>
    </div>
  )
}

export default App;
