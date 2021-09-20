import React from "react";
import styled from 'styled-components';
import {NextArrow} from "./svg/NextArrow";

const Button = styled(NextArrow)`
   width: 38px;
   height: 38px;
   margin-right: 15px;
   
   @media screen and (min-width: 640px){
      width: 5.5989vw;
      height: 5.5989vw;
      margin-right: 2.132vw;
   }
   
   @media screen and (min-width: 1100px){
      width: 5.1vw;
      height: 5.1vw;
      margin-right: 1.666vw;
   }
`

export const StartButton = (props) => {
    return <Button {...props} />
}