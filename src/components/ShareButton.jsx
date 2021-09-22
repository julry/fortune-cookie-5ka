import React from "react";
import styled from 'styled-components';
import {Share} from "./svg/Share";

const Button = styled.button`
   display: flex;
   align-items: center;
   padding: 8px 23px;
   background: #FFFFFF;
   border-radius: 10px;
   border: none;
   outline: none;
   cursor: pointer;

   @media screen and (min-width: 640px){
      padding: 14px 34px;
      border-radius: 20px;
   }
`

const ShareIcon = styled(Share)`
   flex-shrink: 0;
   width: 27px;
   height: 30px;

   @media screen and (min-width: 640px){
      width: 41px;
      height: 44px;
   }
`;

const ShareText = styled.span`
   font-weight: 600;
   font-size: 15px;
   line-height: 103.3%;
   color: #000000;
   margin-left: 12px;

   @media screen and (min-width: 640px){
      font-size: 25px;
      margin-left: 15px;
   }
`;

export const ShareButton = (props) => {
    return (
        <Button {...props}>
            <ShareIcon />
            <ShareText>Поделиться</ShareText>
        </Button>
    );
}