const initialCountyList = {
    countries: [],
    selectedCountry: ""
}

export const countryReducer = (state = initialCountyList, action) => {
    switch(action.type) {
        case "GET_ALL_COUNTRY": 
        // console.log(state)
            return {
                ...state,
                countries : action.payload
            }
        case "SELECTED_COUNTRY":
            // console.log(state)
            return {
                ...state,
                selectedCountry: action.payload
            }
        case "RESET_COUNTRY":
            // console.log(state)
            return initialCountyList;
        default:
            return state;
    }
}