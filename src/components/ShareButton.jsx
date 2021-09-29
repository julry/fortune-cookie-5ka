import React from "react";
import styled from 'styled-components';

const Button = styled.button`
   display: flex;
   align-items: center;
   padding: 10px 10px;
   background: #FFFFFF;
   border-radius: 10px;
   border: none;
   outline: none;
   cursor: pointer;
   max-width: 65vw;
   @media screen and (min-width: 640px){
      padding: 14px 28px;
      border-radius: 20px;
      max-width: 400px;
   }
`


const ShareText = styled.span`
   font-weight: 600;
   font-size: 14px;
   line-height: 103.3%;
   color: #000000;
   @media screen and (min-width: 640px){
      font-size: 20px;
      margin-left: 15px;
   }
`;

export const ShareButton = (props) => {
    return (
        <Button {...props}>
            <ShareText>Узнай, как применить свои таланты в «Пятёрочке»!</ShareText>
        </Button>
    );
}