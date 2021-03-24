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
      <Part course={props.parts[0].part} exercise={props.parts[0].part}/>
      <Part course={props.parts[1].part} exercise={props.parts[1].part}/>
      <Part course={props.parts[2].part} exercise={props.parts[2].part}/>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p> {props.course} {props.exercise} </p>
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
  return (
    <div>
      <Header title="Half Stack application development"/>
      <Content parts={courses}/>
      <Total numberOfCourses={courses.length}/>
    </div>
  )
}

export default App;
