import React from 'react';

const Hello = (props) => (
  <div>
    <p>Hello {props.name}, you are {props.age} years old</p>
  </div>
)

const App = () => {
  const name = "George"
  const age = Math.floor(Math.random()*100)
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={name} age={age}/>
      <Hello name="Debra" age={age}/>
      <Hello name="Becky" age={age}/>
    </div>
  )
}
export default App;
