import React from 'react'
import styled from "styled-components"

const Home = ( {toggle} ) => {
  return (
    <Container>
        <div><img src="/images/dices.png"/></div>
        
        <div className='home__heading'>
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default Home

const Container =styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    height: 100vh;
    align-items: center;

    .home__heading {
        h1 {
            font-size: 96px;
            white-space: nowrap;
        }
    }
`
const Button = styled.button`
    min-width: 220px;
    padding: 10px 18px;
    border: none;
    border-radius: 5px;
    background: #000;
    border: 1px solid transparent;
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    transition: 250ms background ease-in;
    cursor: pointer;

    &:hover {
        background: #fff;
        border: 1px solid black;
        color: #000;
        transition: 150ms background ease-in;
    }
`