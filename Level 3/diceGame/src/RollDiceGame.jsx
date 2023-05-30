import { useState } from 'react'


const RollDiceGame = () => {
const [diceNumber, setDiceNumber] = useState(1);

const rollDice = () => {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  setDiceNumber(randomNumber)
};












  return (
  <>
<h1>Roll Dice Game</h1>
<p> Current dice number; {diceNumber}</p>
<button onClick={rollDice}>Roll_the_ Dice_  brotha!</button>
  </>
)






}

export default RollDiceGame