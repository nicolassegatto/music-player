import styled from "styled-components";

export const PlayerSM = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  background-color: #2a2141;
  width: 23rem;
  border-radius: 0.5rem;
  padding: 2.375rem 2.375rem;
`

export const PlayerSMImageInfo = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`

export const PlayerSMImage = styled.div`
  max-width: 5.25rem;
  max-height: 5.25rem;
  img{
    max-width: 100%;
    border-radius: 0.5rem;
    -webkit-box-shadow: 0px 2px 77px -22px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 2px 77px -22px rgba(0,0,0,0.75);
    box-shadow: 0px 2px 77px -22px rgba(0,0,0,0.75);
  }
`

export const PlayerSMTitle = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: column; 
  justify-content: flex-start;
  

  h1{
    font-size: 1.5rem;
    font-weight: bold;
  }
  h2{
    font-size: 1.125rem;
    font-weight: normal;
    opacity: 0.6;
  }

`

export const PlayerSMButtons = styled.div`
  display: flex;
  justify-content: space-evenly;

  button{
    cursor: pointer;
    box-sizing: border-box;
    background-color: transparent;
    border: none;
    color: #E1E1E6;
  }
`