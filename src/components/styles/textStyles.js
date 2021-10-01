import styled from "styled-components";
import * as keyframes from "../../utils/keyframes";

const Text = styled.p`
    white-space: pre-wrap;
    font-size: 18px;
    line-height: 22px;
    
   @media screen and (min-width: 640px){ 
        font-size: 20px;
        line-height: 24px;
   }
   @media screen and (min-width: 1235px){ 
        font-size: 30px;
        line-height: 33px;
   }
    
`
const TitleDesktop = styled(Text)`
    color: #FFFFFF;
    margin: 0.8888vh 0 0 2.6vh;
    font-weight: 900;
    font-size: 20px;
    line-height: 23px;
    @media screen and (max-width: 1235px){
      display: none;
    }
`

const Title = styled(Text)`
    font-weight: 900;
    margin-left: 11.25vw;
    margin-bottom: 3.8554vh;
    font-size: 18px;
    
    @media screen and (min-width: 640px){
        font-size: 24px;
        margin-left: 14.5vw;
        margin-bottom: 1.8554vh;
        margin-top: -3.5vh;
    }
    
    @media screen and (min-width: 1235px){
      display: none;
    }
`

const FortuneTextWrapper = styled.div`
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
    animation: ${keyframes.animateTextSizeSm} 1.3s linear;
    animation-fill-mode: both;
    will-change: width, transform;

    @media screen and (min-width: 640px){
        animation: ${keyframes.animateTextSizeMd} 1s linear;
        animation-fill-mode: both;
    }

    @media screen and (min-width: 1235px){
        animation: ${keyframes.animateTextSizeLg} 1.3s linear;
        animation-fill-mode: both;
    }
`
const FortuneText = styled.p`
    font-size: 13px;
    line-height: 14px;
    width: 450px;
    
    @media screen and (max-width: 300px) and (min-height: 600px) {
      width: 350px;
    }

    @media screen and (min-width: 640px){
        font-size: 18px;
        line-height: 20px;
        width: 700px;
    }
   
    
     @media screen and (min-width: 1235px){
        width: 650px;
    }
`
const FortuneTitle = styled(FortuneText)`
  font-weight: 900;
`

export {FortuneText, FortuneTextWrapper, FortuneTitle, Title, Text, TitleDesktop}