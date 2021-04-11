import React, {useState} from "react";

const Title = ({ title }) => <h1>{title}</h1>;

const Button = ({ feedback, handleClick }) => <button onClick={handleClick}>{feedback}</button>;

const Stats = ({ text, value}) => <p>{text} {value}</p>;

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;
  const average = (good-bad)/all || 0; 
  const postive = (good/all)*100 || 0;

  return (
    <div>
      <Title title="give feedback"/>
      <Button handleClick={() => setGood(good + 1)} feedback="good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} feedback="neutral" />
      <Button handleClick={() => setBad(bad + 1)} feedback="bad" />
      <Title title="statistics"/>
      <Stats text="good" value={good}/>
      <Stats text="neutral" value={neutral}/>
      <Stats text="bad" value={bad}/>
      <Stats text="all" value={all}/>
      <Stats text="average" value={average}/>
      <Stats text="postive" value={postive + "%"}/>
    </div>
  )
}

export default App