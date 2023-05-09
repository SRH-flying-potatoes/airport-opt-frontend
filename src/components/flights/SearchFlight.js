import React, { useEffect, useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import SelectLocation from './SelectLocation'
import axios from "axios"

const SearchFlight = (props) => {
    const [airportData, setAirportData] = useState([{ IATA: 'NA', City: 'Not Available' }])
    const [fromLocation, setFrom] = useState('')
    const [toLocation, setTo] = useState('')

    useEffect(() => {
        axios.get("http://localhost:5000/cities").then((res) => {
            setAirportData(res.data.airportData)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const getFromValue = (val) => setFrom(val)
    const getToValue = (val) => setTo(val)

    const handleOnSubmit = () => {
        axios.get(`http://localhost:5000/flightroutes`, {
            params: {
                from: fromLocation,
                to: toLocation
            }
        }).then((res) => {
            props.sendRoutes(res.data.routesData)
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <Form onSubmit={handleOnSubmit}>
            <Form.Group inline widths='equal'>
                <label>From</label>
                <SelectLocation airportData={airportData} sendVal={getFromValue} />
                <label>To</label>
                <SelectLocation airportData={airportData} sendVal={getToValue} />
                <Button primary type='submit'>Search</Button>
            </Form.Group>
        </Form>
    )
}

export default SearchFlight