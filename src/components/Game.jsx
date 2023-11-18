import React from 'react'
import Score from './Score'
import Bet from './Bet'
import styled from 'styled-components'
import RollDice from './RollDice'
import { useState } from 'react'
import { Button, OutlinedButton } from '../styled/Button'
import Rules from './Rules'

const Game = () => {

  const [score, setScore] = useState(0);

  const [selectedNum, setSelectedNum] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("")
  const [showRules, setShowrules] = useState(false)

  const generateRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const rollDice = () => {
  if(!selectedNum) {
                      setError("You have not selected any Number")
                      return;
                    }

    setError("");

    const randomNum = generateRandomNum(1, 7)
    setCurrentDice((prev) => randomNum)

    if(selectedNum == randomNum){
      setScore(prev => prev + randomNum)
    } else {
      setScore(prev => prev -2)
    }

    setSelectedNum(undefined)
}

  const resetScore = () => {
    setScore(0);
  }

  

  return (
    <MainContainer>
        <div className='top__section'>
            <Score score={score}/>
            <Bet error={error} setError={setError} selectedNum={selectedNum} setSelectedNum={setSelectedNum}/>
        </div>
        <RollDice currentDice={currentDice} rollDice={rollDice}/>

        <div className="btns">
          <OutlinedButton onClick={resetScore}>Reset Scores</OutlinedButton>
          <Button onClick={() => setShowrules((prev) => !prev)}>{showRules ? "Hide" : "Show"} Rules</Button>
        </div>

        {showRules && <Rules/> }
    </MainContainer>
  )
}

export default Game


const MainContainer = styled.div`

padding-top: 30px;
  
  .top__section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    gap: 20px;
  }
`
