import styled from "styled-components";

const PresentWrapper = styled.div`
  position: absolute;
  left: 43%;
  bottom:46.2%;
  height: 37%;
  overflow: hidden;
  cursor: pointer;
`
const PresentImg = styled.img`
  object-fit: cover;
  width: 45%;
  min-width: 85px;
  
  @media screen and (max-width: 330px){
    min-width: 60px;
  }
  
  @media screen and (min-width: 640px){
      width: auto;
  }
  
  @media screen and (min-width: 1000px){
        min-width: 100px;
        max-width: 16vh;
  }
  
  @media screen and (min-width: 1235px){
        min-width: auto;
        max-width: none;
        
        @media screen and (max-height: 600px){
            max-width: 125px;
        }
        
        @media screen and (min-height: 900px){
            min-width: 22vh;
        }
  }
`

export {PresentImg, PresentWrapper};