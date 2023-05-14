import NET from "../network";

const itemsSubmit = async (url, inputValue, method, navigate, navigateUrl, navigateState) => {
    const data = {
        title: inputValue,
    }

    await fetch(`${NET.APP_URL}${url}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(async data => {
        if (data.status === 200) {
            const response = await data.json()
            if (method !== 'DELETE') {
                navigate(`${navigateUrl}/${response.dataID.id}`, {
                    state: {
                        from: navigateState
                    }
                })
            }
            else {
                navigate(`${navigateUrl}`)
            }
        }
    }).catch((e) => {
        console.info(e);
    });
}

export default itemsSubmit