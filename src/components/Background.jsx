import React from 'react';
import styled from 'styled-components';
import {Background_top} from "./svg/Backround_top";
import {Background_top_tablets} from "./svg/Background_top_tablets";

const Wrapper = styled.div`
  width: 100vw;
  overflow: hidden;
  margin-top: -1px;
`

const TopRectangle = styled(Background_top)`
    width: 100vw;
    @media screen and (max-width: 1240px) and (min-width: 640px){
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

const Background = () => {
    return (<Wrapper>
        <TopRectangle />
        <TopRectangleTablets />
    </Wrapper>)
}

export default Background;