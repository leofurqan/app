import React from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap'
import ForecastCard from './ForecastCard'

export default function ForecastWeather({ forecast }) {
    return (
        <Card>
            <Card.Body>
                <Container>
                    <Row>
                        {forecast ? forecast.map(() => {
                            <ForecastCard />
                        }) : ''}
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
}
