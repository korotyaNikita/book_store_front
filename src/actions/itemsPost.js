import NET from "../network";
import http from "./axios";

const itemsPost = async (url, data, navigate, navigateUrl) => {
    await http.post(`${NET.APP_URL}${url}`, data).then(async response => {
        if (response.status === 200) {
            navigate(`${navigateUrl}/${response.data.dataID.id}${navigateUrl === '/library' ? '?page=1' : ''}`)
        }
    }).catch((e) => {
        console.info(e);
    });
}

export default itemsPost