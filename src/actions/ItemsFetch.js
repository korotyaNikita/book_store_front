import NET from "../network";

const itemsFetch = async (url, dispatchData, dispatchDataType) => {
    try {
        const response = await fetch(`${NET.APP_URL}${url}`)
        if (response.status === 200) {
            
            dispatchData({
                type: dispatchDataType,
                payload: await response.json()
            })
        }
    } catch (e) {
        console.log(e);
    }
}

export default itemsFetch