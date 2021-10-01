import styled from "styled-components";
import * as keyframes from "../../utils/keyframes";

const GifWrapper = styled.div`
    width: 100%;
    position:absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 300;
    background: rgba(0,0,0,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    
`
const CookieWrapper = styled.div`
    position: relative;
    display: inline-flex;
    flex-direction: column;
    z-index: 0;
    transform: translateZ(0);
`

const Gif = styled.img`
    transform: rotate(-38deg);
    animation: ${keyframes.animateGifSize} 2s;
    width: 1050px;
    object-fit: contain;
    @media screen and (min-width: 640px){
          transform: translate(-8vw, 6vw) rotate(-22deg);
          width: 2000px;
    }

    @media screen and (min-width: 1235px){
        animation: none;
        transform: none;
        width: 1440px;
    }

`
const PredictWrapper = styled.div`
    position: absolute;
    width: auto;
    top: 40%;
    left: 51%;
    -webkit-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
    -moz-transform: translate3d(-50%, -50%, 0);
    -ms-transform: translate3d(-50%, -50%, 0);
    -o-transform: translate3d(-50%, -50%, 0);
    
    @media screen and (min-width: 640px){
        top: 42%;
        left: 51%;
    }
    @media screen and (min-width: 1235px){
        left: 55%;
    }
`


export {PredictWrapper, GifWrapper, Gif, CookieWrapper}