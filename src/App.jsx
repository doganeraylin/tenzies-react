import './App.css'
import Dice from "./Dice"
import {useState} from  "react"


function App() {

  const [dice, setDice] = useState(allNewDice())

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        newDice.push(Math.ceil(Math.random() * 6))
    }
    return newDice
}

  const diceElements = dice.map(die => <Dice value = {die}/>
)
 
  return(
    <main>
       <div className='dice-container'>
            {diceElements}
        </div>
    </main>
   
  )
}

export default App
