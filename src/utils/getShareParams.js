import { resolve } from "url";
import {shareImg} from "../constants/images";

export const getShareParams = (result) => {
    const url = [window.location.protocol, '//', window.location.host, window.location.pathname].join('');

    const shareTitle = 'Кто ты в офисе «Пятёрочки»?';
    const shareDescription = `${result.title} - моя будущая профессия в компании «Пятёрочка»! Хочешь узнать, какая карьера ждёт тебя в топовой компании в сфере ритейла? Переходи по ссылке и получи предсказание.`
    const shareImage = resolve(url, shareImg);
    const queryParams = new URLSearchParams();
    queryParams.append('url', url);
    queryParams.append('title', shareDescription);
    queryParams.append('image', shareImage);
    queryParams.append("comment", shareDescription);
    queryParams.append("noparse", 'true');

    return `http://vk.com/share.php?${queryParams.toString()}`;
};