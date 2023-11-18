import styled from 'styled-components'

const Bet = ({error, setError, selectedNum, setSelectedNum }) => {

    const arrNum = [ 1, 2, 3, 4, 5, 6 ];

    const numSelectorHandler = (value) => {
        setSelectedNum(value)
        setError("")
    }
    
  return (
    <NumContainer>
        <p className='error'>{error}</p>
        <div className="flex">
        {
            arrNum.map((value, i) => (
                <Box isSelected={value == selectedNum} key={i} onClick={() => numSelectorHandler(value)}>
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

    .error {
        color: red;
    }
`