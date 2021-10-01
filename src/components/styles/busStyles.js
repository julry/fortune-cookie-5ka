import styled from "styled-components";

const BusWrapper = styled.div`
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

export {BusWrapper, BusImg};