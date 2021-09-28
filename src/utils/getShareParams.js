import { isMobile } from "react-device-detect";
import {resolve} from "url";
import {shareImg} from "../constants/images";
export const getShareParams = (result) => {
    const url = [window.location.protocol, '//', window.location.host, window.location.pathname].join('');
    const shareDescription = `${result.title} - моя будущая профессия в компании «Пятёрочка»! Хочешь узнать, какая карьера ждёт тебя в топовой компании в сфере ритейла? Переходи по ссылке и получи предсказание. А еще - регистрируйся на кейс-чемпионат «Пятёрочки» по предпринимательским идеям в ритейле #Стартапни - чтобы не только гадать, но и готовиться к карьерному взлету!`;
    const shareImage = resolve(url, shareImg);
    const queryParams = new URLSearchParams();
    queryParams.append('url', url);
    !isMobile && queryParams.append("comment", shareDescription);
    queryParams.append('image', shareImage);

    return `http://vk.com/share.php?${queryParams.toString()}`;
};