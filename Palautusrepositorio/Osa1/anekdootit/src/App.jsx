import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [allVotes, setVote] = useState (Array(8).fill(0))

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const Button = ({ onClick, text}) => (
    <button onClick={onClick}>
      {text}
    </button>
  )

  const handleVote = () => {
   let valittu = (anecdotes.indexOf(anecdotes[selected])); 
   //console.log('Valittu =', valittu)
   //console.log('Allvotes =', allVotes)
   const copy = [ ...allVotes ]
   copy[valittu] += 1   
   //console.log('copy = ', copy)
   setVote(copy) 
}

  const MostVotes = () => {
    const palaute = (Math.max(...allVotes))
    //console.log(allVotes.indexOf(palaute))
    return anecdotes[allVotes.indexOf(palaute)]
  }

  return (
    <div>
       <h3>Anecdote of the day</h3>
       <p>{anecdotes[selected]}</p>
       <p> has {allVotes[anecdotes.indexOf(anecdotes[selected])]} votes</p>
       <Button onClick={handleVote} text='vote' />
       <Button onClick={() => setSelected((getRandomInt(8)))} text="next anecdote" />
       <h3>Anecdote with most votes</h3>
       <p> <MostVotes /></p>
       <p> has {Math.max(...allVotes)} votes</p>
     </div>
  )
}

export default App