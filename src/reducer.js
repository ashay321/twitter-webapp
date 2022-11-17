export const initialState = {
    userId: 3
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