import NET from "../network";

const itemsSubmit = async (url, data, method, navigate, navigateUrl) => {

    await fetch(`${NET.APP_URL}${url}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(async data => {
        if (data.status === 200) {
            const response = await data.json()
            navigate(`${navigateUrl}${method !== 'DELETE' ? `/${response.dataID.id}` : ''}`)
        }
    }).catch((e) => {
        console.info(e);
    });
}

export default itemsSubmit