import React from 'react'
import './DisplayRoutes.css'

const DisplayRoutes = (props) => {
    const content = props.routes.length !== 0 ? props.routes.map((route) => {
        return (
            <div className='air-card'>
                <h3>Airline: {route.Airline}</h3>
                <h4>{`Source Airport: ${route["Source airport"]}`}</h4>
                <h4>{`Destination Airport: ${route["Destination airport"]}`}</h4>
            </div>
        )
    }) : 'No Routes available'
    return (
        <div className='air-route-container'>
            {content}
        </div>
    )
}

export default DisplayRoutes