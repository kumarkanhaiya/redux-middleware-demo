export const fetchAllCountry = (countries) => {
    return {
        type: "GET_ALL_COUNTRY",
        payload: countries
    }
}

export const setSelectedCountry = (selectedCountry) => {
    return {
        type: "SELECTED_COUNTRY",
        payload: selectedCountry
    }
}

export const getCountries = () => {

    return async (dispatch, getState) => {
        const response = await fetch("http://localhost:8081/ProductReg/countries/")
        const countries = await response.json()
        dispatch(fetchAllCountry(countries.data))
    }
}