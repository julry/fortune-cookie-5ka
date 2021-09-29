import React, {useEffect, useState} from "react";
import styled, {keyframes} from 'styled-components';
import Background from "./Background";
import {FullLogo} from "./svg/FullLogo";
import {StartButton} from "./StartButton";
import {bus, cookie, present} from "../constants/images";
import {getText} from "../utils/getText";
import {ShareButton} from "./ShareButton";

const Wrapper = styled.div`
    position: relative;
    overflow: hidden;
`
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

const BottomRectangle = styled.div`
    position: absolute;
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

const Bus = styled.div`
    position: absolute;
    width: fit-content;
    bottom: 13.58vh;
    right: 50%;
    transform: translate(50%, 0);
    z-index: 3;
    height: 23.7676vh;
    max-width: 100%;
    max-height: 100%;
    
    @media screen and (min-width: 640px){
      height: 30.789vh;
    }
    
    @media screen and (min-width: 800px){
        right: 1.8194vw;
        transform: none;
        max-height: none;
    }
    
    @media screen and (min-width: 1100px){
        height: 39.8888vh;
    }
`

const BusImg = styled.img`
    height: 100%;
    object-fit: contain;
`
const PresentWrapper = styled.div`
  position: absolute;
  left: 43%;
  bottom:46.2%;
  height: 37%;
  overflow: hidden;
  
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
const GifWrapper = styled.div`
    width: 100%;
    position:absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%,0);
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

const Gif = styled.img`
    transform: rotate(-38deg);
    animation: ${animateGifSize} 2s;
    width: 1050px;
    object-fit: contain;
    @media screen and (min-width: 640px){
          transform: rotate(-22deg);
          width: 2000px;
    }

    @media screen and (min-width: 1235px){
        animation: none;
        transform: none;
        width: 1440px;
    }

`

const FortuneTextWrapper = styled.div`
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
    animation: ${animateTextSizeSm} 1.3s linear;
    animation-fill-mode: both;
    will-change: width, transform;

    @media screen and (min-width: 640px){
        animation: ${animateTextSizeMd} 1s linear;
        animation-fill-mode: both;
    }

    @media screen and (min-width: 1235px){
        animation: ${animateTextSizeLg} 1.3s linear;
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

const Link = styled.a`
    color: #009023;
    position: absolute;
    text-decoration: none;
    font-size: 14px;
    bottom: 6.5vh;
    left: 50%;
    transform: translate(-50%, 0);
    width: max-content;
    
    border-radius: 20px;
    padding: 8px;
    cursor: pointer;
    background: white;
    font-family: '5kaSansDesign', Tahoma, Geneva, sans-serif;
    border: 1px solid #009023;
    
    @media screen and (min-width: 640px){
        bottom: 6vh;
        font-size: 24px;
        padding: 10px;

    }
    @media screen and (min-width: 1100px){
        font-size: 32px;
        bottom: 4.5vh;
        padding: 10px 15px;
    }
`

const ShareButtonStyled = styled(ShareButton)`
    position: absolute;
    right: 2vw;
    bottom: 6vh;
    animation: ${animateShare} 0.3s ease-in;
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



const Landing = () => {
    const [isCookieShow, setIsCookieShown] = useState(false);
    const [loadSrc, setLoadSrc] = useState(cookie+"?a="+Math.random()*1000);
    const [text, setText] = useState('');
    const [isTextShown, setIsTextShown] = useState(false);
    const [isGifLoaded, setIsGifLoaded] = useState(false);

    const onOpenGif = () => {
        setIsCookieShown(true);
    }

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
            setLoadSrc(cookie+"?a="+Math.random()*1000)
        }, 0)

    }

    const onLinkOpen = (event) => {
        event.stopPropagation();
        window.location.href = 'https://rabota5ka.ru/perspective'
    };


    return (<Wrapper>
        <Background />
        <Link href={'https://startup5.ru/?utm_source=tg&utm_medium=channel&utm_campaign=fortune&utm_content=24.09.2021'} target={'_blank'}> Участвуй в кейс-чемпионате «Пятёрочки»!</Link>
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
        <Bus>
            <BusImg src={bus} alt={''}/>
            <PresentWrapper onClick={onOpenGif}>
                <PresentImg src={present} alt={''}/>
            </PresentWrapper>
        </Bus>
        {isCookieShow && (
            <GifWrapper onClick={onCloseGif}>
                <CookieWrapper>
                    <Gif src={loadSrc} alt={''} onLoad={()=>setIsGifLoaded(true)}/>
                    {isTextShown && isGifLoaded && (
                        <PredictWrapper>
                            <FortuneTextWrapper>
                                <FortuneTitle>{text.title}</FortuneTitle>
                                <FortuneText>{text.text}</FortuneText>
                            </FortuneTextWrapper>
                        </PredictWrapper>

                    )}
                </CookieWrapper>
                {isTextShown && isGifLoaded && <ShareButtonStyled onClick={onLinkOpen} />}
            </GifWrapper>
        )}
        <BottomRectangle />
    </Wrapper>)
}

export default Landing;