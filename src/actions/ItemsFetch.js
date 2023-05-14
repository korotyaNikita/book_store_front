import NET from "../network";

const itemsFetch = async (url, dispatchData, dispatchDataType) => {
    try {
        const response = await fetch(`${NET.APP_URL}${url}`)
        if (response.status === 200) {
            const result = await response.json()
            dispatchData({
                type: dispatchDataType,
                payload: result
            })
        }
    } catch (e) {
        console.log(e);
    }
}

export default itemsFetch