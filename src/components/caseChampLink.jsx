import React from "react";
import styled from "styled-components";

const Link = styled.a`
    color: #009023;
    position: absolute;
    text-decoration: none;
    font-size: 14px;
    bottom: 3.5vh;
    left: 50%;
    transform: translate(-50%, 0);
    width: max-content;
    display: inline-block;
    text-align: center;
    border-radius: 20px;
    padding: 8px;
    cursor: pointer;
    background: white;
    font-family: '5kaSansDesign', Tahoma, Geneva, sans-serif;
    border: 1px solid #009023;
    
     @media screen and (max-width: 290px){
         max-width: 270px;
         bottom: 1.5vh;
     }
     
    @media screen and (min-width: 640px){
        bottom: 2vh;
        font-size: 18px;
        padding: 10px;
        max-width: none;
    }
    @media screen and (min-width: 1100px){
        font-size: 23px;
        bottom: 2.5vh;
        padding: 10px 12px;
        width: max-content;
    }
`

export const CaseChampLink = (props) => {
    return (
        <Link
            href={'https://startup5.ru/?utm_source=tg&utm_medium=channel&utm_campaign=fortune&utm_content=24.09.2021'}
            target={'_blank'}
        >
            Участвуй в кейс-чемпионате «Пятёрочки»!
        </Link>
    );

}