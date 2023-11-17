import React from 'react'
import styled from 'styled-components'

const Score = () => {
  return (
    <ScoreContainer>
        <h1>0</h1>
        <p>Total Score</p>
    </ScoreContainer>
  )
}

export default Score

const ScoreContainer = styled.div`

    text-align: center;
    max-width: 200px;
    
    h1 {
        font-size: 100px;
        line-height: 100px;
        
    }

    p{
        font-size: 24px;
        font-weight: 500px;
    }
`