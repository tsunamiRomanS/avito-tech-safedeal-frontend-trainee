import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Container } from "reactstrap";
import styledComponents from "styled-components";
import Card_form from "./Card_form/Card_form";
import Card_comments from "./Card_comments/Card_comments";
import { Row, Col, Container, Button } from "reactstrap";
const WrapperFullscreen = styledComponents.div`
background-color: rgba(0, 0, 0, 0.7);
width: 100%;
height: 100vh;
position: fixed;
top: 0;
left: 0;
overflow: hidden;
`
const Modal = styledComponents.div`
margin-top: 115px;
background: #FFFFFF;
`
const Img = styledComponents.img`
width: 100%;
height: auto;
`
export default function Card_modal_wrapperFullscreen({ card_url, setId }) {
    const [card, setCard] = useState({});
    useEffect(() => {
        axios({
            method: "get",
            url: `https://boiling-refuge-66454.herokuapp.com/images/${card_url}`
        }).then((response) => {
            setCard(response.data);
        });
    }, []);
    return (
        <WrapperFullscreen>
            <Modal className="offset-3 col-6 p-4">
                <Row>
                    <Col className="col-6">
                        <Img src={card.url} />
                        <div className="mt-4">
                            <Card_form />
                        </div>
                    </Col>
                    <Col className="col-5">
                        <Card_comments card_inf={card} />
                    </Col>
                    <Col className="col-1 d-flex justify-content-end">
                        <Button close onClick={() => setId("")} />
                    </Col>
                </Row>
            </Modal>
        </WrapperFullscreen>
    );
};
