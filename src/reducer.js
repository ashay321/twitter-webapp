export const initialState = {
    userId: 1
}

function reducer(state, action) {
    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                userId: action.user
            }
        default:
            return state;
    }
}

export default reducer;