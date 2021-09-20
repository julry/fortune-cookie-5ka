import {texts} from "../constants/texts";

export const getText = () => {
    return texts[Math.floor(Math.random() * texts.length)];
}