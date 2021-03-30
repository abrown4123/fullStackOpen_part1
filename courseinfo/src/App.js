import React from 'react';

// const courses = [
//   {
//     part: "Fundamentals of React",
//     exercise: 10,
//   },
//   {
//     part: "Using props to pass data",
//     exercise: 7,
//   },
//   {
//     part: "State of a component",
//     exercise: 14,
//   }
// ]


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
      <Part course={props.part1.name} exercise={props.part1.exercises}/>
      <Part course={props.part2.name} exercise={props.part2.exercises}/>
      <Part course={props.part3.name} exercise={props.part3.exercises}/>
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
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      <Header title={course}/>
      <Content part1={part1} part2={part2} part3={part3} />
      <Total numberOfCourses={3}/>
    </div>
  )
}

export default App;
