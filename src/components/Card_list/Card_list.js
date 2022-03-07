import React, { useEffect, useState } from 'react';
import Card_c from "./Card/Card_c";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
export default function Card_list({ setId }) {
    const [card, setCard] = useState([])
    useEffect(() => {
        axios({
            method: "get",
            url: "https://boiling-refuge-66454.herokuapp.com/images"
        }).then((response) => setCard(response.data))
    }, [])
    return (
        <Container>
            <Row>
                {card.map((item) =>
                    <Col key={item.id} className="col-lg-3 mt-4">
                        <Card_c card_inf={item} setId={setId} />
                    </Col>
                )}
            </Row>
        </Container>
    )
}