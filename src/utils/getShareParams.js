import { isMobile } from "react-device-detect";
export const getShareParams = (result) => {
    const url = [window.location.protocol, '//', window.location.host, window.location.pathname].join('');

    const shareDescription = `${result.title} - моя будущая профессия в компании «Пятёрочка»! Хочешь узнать, какая карьера ждёт тебя в топовой компании в сфере ритейла? Переходи по ссылке и получи предсказание.`
    const queryParams = new URLSearchParams();
    const shareTitle = isMobile ? shareDescription : 'Кто ты в офисе «Пятёрочки»?';
    queryParams.append('url', url);
    queryParams.append('title', shareTitle);
    if (!isMobile) queryParams.append("comment", shareDescription);
    queryParams.append("noparse", 'true');

    return `http://vk.com/share.php?${queryParams.toString()}`;
};