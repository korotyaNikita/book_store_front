const ReducerData = (state, action) => {
    switch (action.type) {
        case "FETCH_ITEMS":
        return {
            ...state,
            items: action.payload
        }

        case "FETCH_ITEM":
        return {
            ...state,
            item: action.payload
        }

        default:
        return state
    }
}
export default ReducerData