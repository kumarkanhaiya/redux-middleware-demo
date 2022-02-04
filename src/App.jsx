import React, { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { increment, decrement } from './counterAction';
import { getCountries, setSelectedCountry } from './countryAction';
import { Form } from './Form';

const App = () => {
    const dispatch = useDispatch()
    const count1 = useSelector(state => state.counterReducer.counterOne)
    const count2 = useSelector(state => state.counterReducer.counterTwo)
    const countries = useSelector(state => state.countryReducer.countries)
    const selectedCountry = useSelector(state => state.countryReducer.selectedCountry)

    let countryOptions = [];

    function setectedCountry(event){
        dispatch(setSelectedCountry(event.target.value))
    }

    useEffect(() => {
        console.log("Inside use effect : ");
        console.log(countries);
        console.log(selectedCountry);
        console.log("counterOne : ", count1);
        console.log("counterTwo : ", count2);
    }, [count1, count2, countries, selectedCountry])
    return (
        <div>
            {formView()}
            <Container fluid>
                <div><h1>{count1} {count2}</h1></div>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <button onClick={() => dispatch(increment())}>Increment</button>
            </Container>

            <Container>
                <Row>
                    <Button onClick={() => dispatch(getCountries())}>Get Country</Button>
                </Row>

                <Row>
                    <Col>Countries</Col>
                    <select id="countries" onChange={setectedCountry}>
                        {countries.map((country, index) =>
                            <option
                                id={index}
                                key={country.iso2CountryCode}
                                name={country.iso2CountryCode}
                                value={JSON.stringify(country.iso2CountryCode)}>
                                {country.countryShortName}
                            </option>)}
                    </select>
                </Row>

                <Row>
                    <Col><h1>Selected Country: </h1></Col>
                    <Col><h2>{selectedCountry}</h2></Col>
                </Row>
            </Container>
            <Container>
                <Form></Form>
            </Container>
        </div>
    )
};

function formView (){
    return(<div>
        <h1>Test</h1>
    </div>)
}



export default connect(null, null) (App)


