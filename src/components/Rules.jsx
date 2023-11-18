import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to Play the Dice Game</h2>
        <div className="text">
            <ol>
                <li>Select any Number</li>
                <li>Click on dice image</li>
                <li>after click on  dice  if selected number is equal to dice number you will get same point as dice </li>
                <li>if you get wrong guess then  2 point will be dedcuted </li>
            </ol>
        </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
    background-color: #fbf1f1;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 20px;
    border-radius: 10px;

    h2 {
        font-size: 24px;
    }

    text {
        margin-top: 24px;
    }
`