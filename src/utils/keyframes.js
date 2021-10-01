import {keyframes} from "styled-components";

const animateGifSize = keyframes`
  from {
    max-width: 100vw;
  }
  to {
    max-width: calc(100vh*1.8);
  }
`

const animateTextSizeSm = keyframes`
  0%{
      width: 80px;
      transform: rotate(-52deg) skew(-4deg,-1deg);
      -webkit-transform: rotate(-52deg) skew(-4deg,-1deg);
      -moz-transform: rotate(-52deg) skew(-4deg,-1deg);
      -ms-transform: rotate(-52deg) skew(-4deg,-1deg);
      -o-transform: rotate(-52deg) skew(-4deg,-1deg);

  }
  100%{
     width: 450px; 
      -webkit-transform: rotate(-52deg) skew(-8deg,-1deg);
      transform: rotate(-52deg) skew(-8deg,-1deg);
      -moz-transform: rotate(-52deg) skew(-8deg,-1deg);
      -ms-transform: rotate(-52deg) skew(-8deg,-1deg);
      -o-transform: rotate(-52deg) skew(-8deg,-1deg);
  }
`
const animateTextSizeMd = keyframes`
  0%{
      width: 150px;
      transform: rotate(-37.5deg) skew(-4deg,-1deg);
      -webkit-transform: rotate(-37.5deg) skew(-4deg,-1deg);
      -moz-transform: rotate(-37.5deg) skew(-4deg,-1deg);
      -ms-transform: rotate(-37.5deg) skew(-4deg,-1deg);
      -o-transform: rotate(-37.5deg) skew(-4deg,-1deg);

  }
  100%{
     width: 700px; 
      -webkit-transform: rotate(-37.5deg) skew(-10deg,-1deg);
      transform: rotate(-37.5deg) skew(-10deg,-1deg);
      -moz-transform: rotate(-37.5deg) skew(-10deg,-1deg);
      -ms-transform: rotate(-37.5deg) skew(-10deg,-1deg);
      -o-transform: rotate(-37.5deg) skew(-10deg,-1deg);
  }
`
const animateTextSizeLg = keyframes`
  0%{
      width: 150px;
      transform: rotate(-16.5deg) skew(-4deg,-1deg);
      -webkit-transform: rotate(-16.5deg) skew(-4deg,-1deg);
      -moz-transform: rotate(-16.5deg) skew(-4deg,-1deg);
      -ms-transform: rotate(-16.5deg) skew(-4deg,-1deg);
      -o-transform: rotate(-16.5deg) skew(-4deg,-1deg);

  }
  100%{
     width: 650px; 
      -webkit-transform: rotate(-16.5deg) skew(-8deg,1deg);
      transform: rotate(-16.5deg) skew(-8deg,1deg);
      -moz-transform: rotate(-16.5deg) skew(-8deg,1deg);
      -ms-transform: rotate(-16.5deg) skew(-8deg,1deg);
      -o-transform: rotate(-16.5deg) skew(-8deg,1deg);
  }
  
`

const animateShare = keyframes`
  0%{
     opacity: 0;
     visibility: hidden;

  }
  100%{
     opacity: 1;
     visibility: visible;
  }
  
`

export {animateShare, animateGifSize, animateTextSizeLg, animateTextSizeMd, animateTextSizeSm}