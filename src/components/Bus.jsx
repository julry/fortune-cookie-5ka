import React from "react";
import {BusImg, BusWrapper} from "./styles/busStyles";
import {bus, present} from "../constants/images";
import {PresentImg, PresentWrapper} from "./styles/presentStyles";

export const Bus = (props) => {
    const {onOpenGif} = props;
    return (
        <BusWrapper>
            <BusImg src={bus} alt={''}/>
            <PresentWrapper onClick={onOpenGif}>
                <PresentImg src={present} alt={''}/>
            </PresentWrapper>
        </BusWrapper>
    );
}