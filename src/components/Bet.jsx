import React, { useState } from 'react'
import styled from 'styled-components'

const Bet = () => {

    const arrNum = [ 1, 2, 3, 4, 5, 6 ];

    const [selectedNum, setSelectedNum] = useState();
  return (
    <NumContainer>
        <div className="flex">
        {
            arrNum.map((value, i) => (
                <Box isSelected={value == selectedNum} key={i} onClick={() => setSelectedNum(value)}>
                    {value}
                </Box>
            ))
        }
        
        </div>
        <p>Select a Number</p>
        
    </NumContainer>
    
  )
}

export default Bet

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;

    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (props.isSelected ? "white" : "black")};
`

const NumContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
gap: 10px;
    .flex {
        display: flex;
        gap: 24px;
    }

    p{
        font-size: 24px;
        font-weight: 600;
    }
`