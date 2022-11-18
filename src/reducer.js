export const initialState = {
    userId: null
}

function reducer(state, action) {
    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                userId: action.userId
            }
        default:
            return state;
    }
}

export default reducer;