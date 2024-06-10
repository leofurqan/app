import React from 'react'
import CurrentWeather from '../components/CurrentWeather'
import ForecastWeather from '../components/ForecastWeather'
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios'

export default function Weather() {
    const [weather, setWeather] = useState({})

    useEffect(() => {
        loadWeather()
    }, [])

    const loadWeather = async () => {
        await axios.get('http://api.weatherapi.com/v1/forecast.json?key=abb0369475c54aeb8be120754230907&q=Lahore').then((response) => {
            setWeather(response.data)
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <Container>
            <Row>
                <CurrentWeather current={weather.current} location={weather.location} />
                <ForecastWeather forecast={weather.forecast.forecastday[0].hour}/>
            </Row>
        </Container>
    )
}
