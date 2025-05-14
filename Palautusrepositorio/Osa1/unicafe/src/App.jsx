import { useState } from 'react'


const Button = ({ onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const StatisticLine = (props) => {return<tr><td>{props.text}</td><td>{props.value}</td></tr>}

const Statistics = (props) => {
return (
  <table>
    <tbody>
    <StatisticLine text="good" value={props.stats.good} />
    <StatisticLine text="neutral" value={props.stats.neutral} />
    <StatisticLine text="bad" value={props.stats.bad} />
    <StatisticLine text="all" value={props.stats.summa} />
    <StatisticLine text="average" value={props.stats.karvototal} />
    <StatisticLine text="positive" value={props.stats.posit} />
    </tbody>    
  </table>
  )
}

const History = (props) => {
  if (props.stats.good == 0 && props.stats.neutral == 0 && props.stats.bad == 0) {
    return (<>No feedback given</> )
  }
  return (
    <Statistics stats = {props.stats} />
   )

}

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [karvo, setKarvo] = useState(0)
 
  const tulokset = {
    good: good,
    bad: bad,
    neutral: neutral,
    summa: good + bad + neutral,
    karvototal: karvo / (good + bad + neutral),
    posit: good / (good + bad + neutral) * 100 + ' %'
  }
  
   const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    const updatedKarvo = karvo + 1
    setKarvo(updatedKarvo)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    const updatedKarvo = karvo + 0
    setKarvo(updatedKarvo)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    const updatedKarvo = karvo - 1
    setKarvo(updatedKarvo)
 }

  return (
    <div>
      <h3>Give feedback</h3>
       
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      
      <h3>Statistics</h3>
      
      <History stats = {tulokset} />
      
    </div>
  )
}

export default App