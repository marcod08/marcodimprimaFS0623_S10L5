import React from "react";
import '../assets/style/BottomCard.css'
import { Col, Container, Row } from "react-bootstrap";

const BottomCard = ({ data }) => {
    const getDayOfWeek = (dateString) => {
        const options = { weekday: 'long' };
        const dayOfWeek = new Date(dateString).toLocaleDateString('it-IT', options);
        return dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);
      };

    return (
        <Container className="mt-4 fs-5">
            <Row>
                
                <Col>
                    {data.list ? <p className="fw-bold" >Domani</p> : null}
                    {data.list && data.list.length > 0 ? (
                        <img
                            src={`https://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png`}
                            alt="Weather Icon"
                        />
                    ) : null}
                    {data.list ? <p className="fw-bold">{data.list[8].main.temp.toFixed()}°C</p> : null}
                </Col>

                <Col>
                    {data.list ? <p className="fw-bold">{getDayOfWeek(data.list[16].dt_txt)}</p> : null}
                    {data.list && data.list.length > 0 ? (
                        <img
                            src={`https://openweathermap.org/img/wn/${data.list[16].weather[0].icon}@2x.png`}
                            alt="Weather Icon"
                        />
                    ) : null}
                    {data.list ? <p className="fw-bold">{data.list[16].main.temp.toFixed()}°C</p> : null}
                </Col>

                <Col>
                    {data.list ? <p className="fw-bold">{getDayOfWeek(data.list[24].dt_txt)}</p> : null}
                    {data.list && data.list.length > 0 ? (
                        <img
                            src={`https://openweathermap.org/img/wn/${data.list[24].weather[0].icon}@2x.png`}
                            alt="Weather Icon"
                        />
                    ) : null}
                    {data.list ? <p className="fw-bold">{data.list[24].main.temp.toFixed()}°C</p> : null}
                </Col>

                <Col>
                    {data.list ? <p className="fw-bold">{getDayOfWeek(data.list[32].dt_txt)}</p> : null}
                    {data.list && data.list.length > 0 ? (
                        <img
                            src={`https://openweathermap.org/img/wn/${data.list[32].weather[0].icon}@2x.png`}
                            alt="Weather Icon"
                        />
                    ) : null}
                    {data.list ? <p className="fw-bold">{data.list[32].main.temp.toFixed()}°C</p> : null}
                </Col>
            </Row>

        </Container>
    )
}

export default BottomCard