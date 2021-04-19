import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
import {useParams} from 'react-router-dom'
import {fetchBrands, fetchOneDevice, fetchTypes} from "../http/deviceAPI";
import {fetchBasket} from "../http/basketAPI";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const Basket = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchBasket().then(data => device.setBaskets(data))
    }, [])

    return (
        <Container className="mt-3">
            <Row className="d-flex">
                {device.baskets.map(basket =>
                    <Card
                        style={{cursor:'pointer'}}
                        key={basket.id}
                        className="p-3"

                    >
                        {basket.id}
                        {basket.userId}
                    </Card>

                )}
            </Row>
        </Container>

    );
});



export default Basket;
