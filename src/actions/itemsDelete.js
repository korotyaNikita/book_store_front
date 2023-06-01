import NET from "../network";
import http from "./axios";

const itemsDelete = async (url, data, navigate, navigateUrl) => {
    await http.delete(`${NET.APP_URL}${url}`, data).then(async response => {
        if (response.status === 200) {
            navigate(`${navigateUrl}`)
        }
    }).catch((e) => {
        console.info(e);
    });
}

export default itemsDelete