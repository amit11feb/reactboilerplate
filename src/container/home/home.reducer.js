const initialState = {
    isLoading: false

};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "GET_APPLICATION_PENDING":
            return {
                ...state, isLoading: !state.isLoading,

            };
        default:
            return state;
    }
}