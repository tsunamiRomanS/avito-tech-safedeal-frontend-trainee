import React, { useState, useEffect } from "react";
import axios from "axios";
import Card_comments from "../Card_modal/Card_comments/Card_comments";
import Card_form from "../Card_modal/Card_form/Card_form";
import { Row, Col, Button } from "reactstrap";
import styledComponents from "styled-components"
const Img = styledComponents.img`
width: 100%;
height: auto;
`
const Wrapper320 = styledComponents.div`
overflow: hidden;
`
const ButtonClose = styledComponents.div`
position: absolute;
top: 7%;
left: 88%;
`
const WrapperButtonClose = styledComponents.div`
position: relative;`
const PaddingEl = styledComponents.div`
padding: 25px`
export default function Card_modal_320({ card_url, setId }) {
    const [card, setCard] = useState({})
    useEffect(() => {
        axios({
            method: "get",
            url: `https://boiling-refuge-66454.herokuapp.com/images/${card_url}`
        }).then((response) => {
            setCard(response.data)
        })
    }, [])
    return (
        <Wrapper320>
            <Row>
                <Col>
                    <WrapperButtonClose>
                        <Img src={card.url} />
                        <ButtonClose>
                            <Button close onClick={() => setId("")} />
                        </ButtonClose>
                    </WrapperButtonClose>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PaddingEl>
                        <Card_comments card_inf={card} />
                    </PaddingEl>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PaddingEl>
                        <Card_form />
                    </PaddingEl>
                </Col>
            </Row>
        </Wrapper320>
    )
}
