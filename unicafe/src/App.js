import React, {useState} from "react";

const Title = ({ title }) => <h1>{title}</h1>;

const Button = ({ feedback, handleClick }) => <button onClick={handleClick}>{feedback}</button>;

const Statistic = ({ text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  ) 
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good-bad)/all || 0; 
  const postive = (good/all)*100 || 0;

  if (!all) {
    return (
      <div>No feedback given</div>
    )
  }

  return (
    <table>
      <tbody>
        <Statistic text="good" value={good}/>
        <Statistic text="neutral" value={neutral}/>
        <Statistic text="bad" value={bad}/>
        <Statistic text="all" value={all}/>
        <Statistic text="average" value={average}/>
        <Statistic text="postive" value={postive + "%"}/>
      </tbody>
    </table>
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