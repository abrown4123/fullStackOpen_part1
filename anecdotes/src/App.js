import React, {useState} from "react";

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;

const Votes = ({ votes, selected }) => {
  if (!votes[selected]) {
    return (
      <div>this quote has no votes</div>
    );
  }
  return (
    <div>has {votes[selected]} votes</div>
  );
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ];
  
  const initVotes = () => {
    let initObj={};
    for (let i=0; i < anecdotes.length; i++) {
      initObj[i] = 0;
    }
    return initObj;
  }

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(initVotes());
  

  const randomQuote = () => {
    let newSlected = Math.floor(Math.random()*anecdotes.length);
    setSelected(newSlected);
  }

  const quoteVote = () => {
    setVotes({...votes, [selected]: votes[selected] + 1});
  }

  return (
    <div>
      {anecdotes[selected]}
      <Votes selected={selected} votes={votes} />
      <div>
        <Button handleClick={quoteVote} text="vote" /> 
        <Button handleClick={randomQuote} text="next anecdote" />
      </div>
    </div>
  )
}

export default App;
