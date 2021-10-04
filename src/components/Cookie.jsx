import React from "react";
import styled from "styled-components";
import {TalentsLinkButton} from "./TalentsLinkButton";
import {FortuneText, FortuneTextWrapper, FortuneTitle} from "./styles/textStyles";
import {CookieWrapper, Gif, GifWrapper, PredictWrapper} from "./styles/cookieStyles";
import * as keyframes from "../utils/keyframes";
import { isIE } from 'react-device-detect';

const TalentsButtonStyled = styled(TalentsLinkButton)`
    position: absolute;
    right: 2vw;
    bottom: 6vh;
    animation: ${keyframes.animateShare} 0.3s ease-in;
    animation-fill-mode: both;
    
    @media screen and (min-width: 640px){
        right: 3vw;
        bottom: 4vh;
    }
    @media screen and (min-width: 1100px){
        right: 3vw;
        bottom: 5vh;
    }
`


export const Cookie = (props) => {
    const {isTextShown, isGifLoaded, onCloseGif, loadSrc, onLoadGif, text, onTalentBtnClick} = props;
   return (
       <GifWrapper onClick={onCloseGif} height={isIE ? '100vh' : '100%'}>
        <CookieWrapper>
            <Gif src={loadSrc} alt={''} onLoad={onLoadGif}/>
            {isTextShown && isGifLoaded && (
                <PredictWrapper>
                    <FortuneTextWrapper>
                        <FortuneTitle>{text.title}</FortuneTitle>
                        <FortuneText>{text.text}</FortuneText>
                    </FortuneTextWrapper>
                </PredictWrapper>

            )}
        </CookieWrapper>
        {isTextShown && isGifLoaded && <TalentsButtonStyled onClick={onTalentBtnClick} />}
    </GifWrapper>
   );
}