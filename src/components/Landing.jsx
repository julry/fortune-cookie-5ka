import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import Background from "./Background";
import {FullLogo} from "./svg/FullLogo";
import {StartButton} from "./StartButton";
import {cookie} from "../constants/images";
import {getText} from "../utils/getText";
import {Text, Title, TitleDesktop} from "./styles/textStyles";
import {Cookie} from "./Cookie";
import {Bus} from "./Bus";
import {preloadImage} from "../utils/preloadImage";

const Wrapper = styled.div`
    position: relative;
    overflow: hidden;
`

const Info = styled.div`
    position: absolute;
    top: 0.5vh;
    left: 0.9861vw;
    
    @media screen and (min-width: 640px){
          top: 5vh;
          left: 2.9861vw;
    }
`

const Logo = styled(FullLogo)`
    width: 38.75vw;
    height: 5.4577vh;
    position: relative;
    z-index: 400;

    @media screen and (min-width: 640px){
        width: 27.4739vw;
        height: 5.07812vh;
        min-height: 60px;
    }
    @media screen and (min-width: 1235px){
        height: 11vh;
        width: 39.1111vh;
        max-width: 352px;
        max-height: 99px;
    }
`

const BottomRectangle = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    background: #98C21F;
    height: 14.8888vh;
    width: 100vw;
    z-index: -1;
`
const StartWrapper = styled.div`
      display: flex;
      margin-left: 11.25vw;
      ${Text}:last-child{
          margin-top: 5px;
      }
      
      @media screen and (min-width: 640px){
            margin-left: 14.5vw;
            
            ${Text}:last-child{
                margin-top: 8px;
            }
      }
      
      @media screen and (min-width: 1235px){
            margin-left: 10vw;
            margin-top: -4.4vh;
            
             ${Text}:last-child{
                margin-top: 10px;
            }
      }    
`

const Landing = () => {
    const [isCookieShow, setIsCookieShown] = useState(false);
    const [loadSrc, setLoadSrc] = useState(cookie+"?a="+Math.random()*1000);
    const [text, setText] = useState('');
    const [isTextShown, setIsTextShown] = useState(false);
    const [isGifLoaded, setIsGifLoaded] = useState(false);

    const onOpenGif = () => {
        setIsCookieShown(true);
    }

    useEffect(()=>preloadImage(loadSrc), [loadSrc]);

    useEffect(()=>{
       if (isGifLoaded) {
            const cookieText = getText();
            setText(cookieText);
            setTimeout(() => {
                setIsTextShown(true)
            }, 2000)
        }
    }, [isGifLoaded])

    const onCloseGif = () => {
        setLoadSrc('');
        setIsTextShown(false);
        setIsGifLoaded(false);
        setIsCookieShown(false);
        setText('');
        setTimeout(() => {
            const src = cookie+"?a="+Math.random()*1000;
            setLoadSrc(src);
            preloadImage(src);
        }, 0)

    }

    const onOpenUseTalentLink = (event) => {
        event.stopPropagation();
        window.location.href = 'https://rabota5ka.ru/perspective'
    };


    return (
        <Wrapper>
            <Background />
            <Info>
                <Logo />
                <TitleDesktop>{'Предлагаем испытать\nудачу и поиграть в игру :)'}</TitleDesktop>
            </Info>
            <Title>{'Предлагаем испытать\nудачу и поиграть в игру :)'}</Title>
            <StartWrapper>
                <StartButton onClick={onOpenGif}/>
                <div>
                    <Text>
                        {'Открой коробку –\nполучи печеньку!'}
                    </Text>
                    <Text>
                        {'И узнай свою роль\nв офисе «Пятёрочки»!'}
                    </Text>
                </div>
            </StartWrapper>
            <Bus onOpenGif={onOpenGif} />
            {isCookieShow && <Cookie
                isTextShown={isTextShown}
                isGifLoaded={isGifLoaded}
                onCloseGif={onCloseGif}
                loadSrc={loadSrc}
                onLoadGif={()=>setIsGifLoaded(true)}
                text={text}
                onTalentBtnClick={onOpenUseTalentLink}
            />}
            <BottomRectangle />
        </Wrapper>
    );
}

export default Landing;