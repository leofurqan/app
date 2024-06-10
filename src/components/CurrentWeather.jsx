import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'

export default function CurrentWeather({ current, location }) {
    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col md={10}>
                        {current ? <h2>{current.temp_c}&deg;</h2> : <h2>32&deg;</h2>}

                        {location ? <p>{location.name + ', ' + location.country + ", " + location.region}</p> : ''}
                    </Col>

                    <Col md={2}>
                        <Card.Img variant="top" src={current ? current.condition.icon : ''} />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}
