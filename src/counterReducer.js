const initialState = {
    counterOne : 0,
    counterTwo : 0
}
export const counterReducer = (state = initialState , action) => {
    switch(action.type) {
        case "INCREMENT": 
        // console.log(state)
            return {
                ...state,
                counterOne: state.counterOne + 1,
                counterTwo: state.counterTwo + 2
            }
        case "DECREMENT":
            // console.log(state)
            return {
                ...state,
                counterOne: state.counterOne - 1,
                counterTwo: state.counterTwo - 2
            }
        default:
            return state;
    }
}