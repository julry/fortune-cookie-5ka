import { resolve } from "url";
import {present} from "../constants/images";

export const getShareParams = (result) => {
    const url = [window.location.protocol, '//', window.location.host, window.location.pathname].join('');

    const shareTitle = '';
    const shareDescription = '';
    const shareImage = resolve(url, present);
    const queryParams = new URLSearchParams();
    queryParams.append('url', url);
    queryParams.append('title', shareTitle);
    queryParams.append('comment', shareDescription);
    queryParams.append('image', shareImage);

    return `http://vk.com/share.php?${queryParams.toString()}`;
};