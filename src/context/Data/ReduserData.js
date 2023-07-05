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

        case "FETCH_BOOKS":
        return {
            ...state,
            books: action.payload
        }

        case "FETCH_BOOK":
        return {
            ...state,
            book: action.payload
        }

        case "FETCH_BLOGS":
        return {
            ...state,
            blogs: action.payload
        }

        case "FETCH_POST":
        return {
            ...state,
            post: action.payload
        }

        case "FETCH_CHAPTER":
        return {
            ...state,
            chapter: action.payload
        }

        case "FETCH_LIBRARY":
        return {
            ...state,
            library: action.payload
        }

        case "FETCH_PROFILE_BOOKS":
        return {
            ...state,
            profileBooks: action.payload
        }

        default:
        return state
    }
}
export default ReducerData