import React from 'react';
import styled from 'styled-components';
import {Background_top} from "./svg/Backround_top";
import {Background_top_tablets} from "./svg/Background_top_tablets";
import { isIE } from 'react-device-detect';

const Wrapper = styled.div`
  width: 100vw;
  overflow: hidden;
  margin-top: -1px;
`
const TopRectangleWrapper = styled.div`
    width: 100vw;
    overflow: hidden;
    height: 45.5vh;
    position: relative;
    max-height: 32vw;
    @media screen and (max-width: 1240px){
        display: none;
    }
`
const TopRectangle = styled(Background_top)`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    @media screen and (max-width: 1240px){
        display: none;
    }
`
const TopRectangleTablets = styled(Background_top_tablets)`
    display: none;
    @media screen and (max-width: 1240px) and (min-width: 640px){
        display: block;
        width: 100vw;
    }
`

const TopRectangleMobile = styled(Background_top)`
    width: 100vw;
    @media screen and (min-width: 640px){
        display: none;
    }
`

const IeBackground = styled.div`
    height: 50vh;
    background: rgb(0, 143, 50);
    transform: skew(0deg, -13deg) translate(0, -26vh);
    position: relative;
    border-bottom: 2px solid black;
`

const IeRedSqr = styled.div`
    background: rgb(235, 35, 22);
    width: 300px;
    height: 150px;
    border: 2px solid black;
    transform: skew(0deg, 13deg) rotate(-13deg);
    position: absolute;
    bottom: -152px;
    left: 85vw;
`

const IeRedSqrTop = styled(IeRedSqr)`
    bottom: 1px;
    left: calc(85vw - 34px);
`

const Background = () => {
    return (<Wrapper>
        { isIE ?
            <IeBackground>
                <IeRedSqrTop/>
                <IeRedSqr />
            </IeBackground>
            : (<>
                <TopRectangleWrapper>
                    <TopRectangle />
                </TopRectangleWrapper>
                <TopRectangleMobile />
                <TopRectangleTablets />
            </>
        )}
    </Wrapper>)
}

export default Background;