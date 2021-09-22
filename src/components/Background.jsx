import React from 'react';
import styled from 'styled-components';
import {Background_top} from "./svg/Backround_top";
import {Background_top_tablets} from "./svg/Background_top_tablets";

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

const Background = () => {
    return (<Wrapper>
        <TopRectangleWrapper>
            <TopRectangle />
        </TopRectangleWrapper>
        <TopRectangleMobile />
        <TopRectangleTablets />
    </Wrapper>)
}

export default Background;