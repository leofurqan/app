import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

export default function ForecastCard() {
    return (
        <Col md={2}>
            <Card>
                <Card.Body>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <h2>32&deg;</h2>
                    <p>12:00 PM</p>
                </Card.Body>
            </Card>
        </Col>
    )
}
