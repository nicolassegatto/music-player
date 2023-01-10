import styled from "styled-components";

export const PlayerMD = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  background-color: #2a2141;
  width: 23rem;
  border-radius: 0.5rem;
  padding: 2.375rem 2.375rem;
`

export const PlayerMDImageInfo = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`

export const PlayerMDImage = styled.div`
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

export const PlayerMDTitle = styled.div`
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

export const PlayerMDButtons = styled.div`
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

export const PlayerMDTime = styled.div`
 display: flex;
 flex-direction: column;
 gap: 1rem;
`

export const PlayerMDTimeBar = styled.div`
  width:100%;
  height: 0.375rem;
  border-radius: 1rem;
  background-color: #5E586F;
`
export const PlayerMDTimeBarCurrent = styled.div`
  width: 75%;
  height: inherit;
  border-radius: 1rem;
  background-color: #ffffff;
`

export const PlayerMDTimeSeconds = styled.div`
  display: flex;
  justify-content: space-between;
  opacity: 0.7;
  font-size: 0.75rem;
`