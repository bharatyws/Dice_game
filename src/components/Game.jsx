import React from 'react'
import Score from './Score'
import Bet from './Bet'
import styled from 'styled-components'

const Game = () => {
  return (
    <MainContainer>
        <div className='top__section'>
            <Score/>
            <Bet/>
        </div>
    </MainContainer>
  )
}

export default Game


const MainContainer = styled.div`

padding-top: 60px;
  
  .top__section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
`
