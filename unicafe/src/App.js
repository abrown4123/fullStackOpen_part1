import React, {useState} from "react";

const Title = ({ title }) => <h1>{title}</h1>;

const Button = ({ feedback, handleClick }) => <button onClick={handleClick}>{feedback}</button>;

const Display = ({ text, value}) => <p>{text} {value}</p>;

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good-bad)/all || 0; 
  const postive = (good/all)*100 || 0;

  return (
    <>
      <Display text="good" value={good}/>
      <Display text="neutral" value={neutral}/>
      <Display text="bad" value={bad}/>
      <Display text="all" value={all}/>
      <Display text="average" value={average}/>
      <Display text="postive" value={postive + "%"}/>
    </>
  )
}

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Title title="give feedback"/>
      <Button handleClick={() => setGood(good + 1)} feedback="good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} feedback="neutral" />
      <Button handleClick={() => setBad(bad + 1)} feedback="bad" />
      <Title title="statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad} />
      
    </div>
  )
}

export default App