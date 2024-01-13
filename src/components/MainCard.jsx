import React from "react";
import '../assets/style/MainCard.css'
import { Col, Row, Container } from "react-bootstrap";

const MainCard = ({ data }) => {
    return (
        <Container className="mt-3 p-3">

            <Row>
                <Col className="fs-1 fw-bold">
                    <p>{data.name}</p>
                </Col>
            </Row>

            <Row>
                <Col>
                    {data.weather ? (
                        <img
                            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                            alt="Weather Icon"
                        />) : null}
                </Col>
            </Row>

            <Row>
                <Col className="fs-1 fw-bold">
                    {data.main ? <p>{data.main.temp.toFixed()}°C</p> : null}
                </Col>
            </Row>

            <Row>
                {data.main ? <Col className="fs-5">Max: {data.main.temp_max.toFixed()}°C || Min: {data.main.temp_min.toFixed()}°C</Col> : null}
            </Row>

            <Row className="mt-4 fs-5">
                {data.main ? <Col><i className="bi bi-thermometer-half m-1"></i>Percepiti: {data.main.feels_like.toFixed()}°C</Col> : null}
                {data.main ? <Col><i className="bi bi-box-arrow-in-down m-1"></i>Pressione: {data.main.pressure.toFixed()} hPA</Col> : null}

            </Row>

            <Row className="fs-5">
                {data.main ? <Col><i className="bi bi-droplet-fill m-1"></i>Umidità: {data.main.humidity.toFixed()}%</Col> : null}
                {data.wind ? <Col><i className="bi bi-wind m-1"></i>Vento: {data.wind.speed.toFixed()} Km/h</Col> : null}
            </Row>

        </Container>
    )
}

export default MainCard