import React from 'react'
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components"
const Img = styled.img`
&:hover {
    cursor: pointer
}`
export default function Card_c({ card_inf, setId }) {
    return (
        <Img src={card_inf.url} alt={card_inf.id} onClick={() => setId(card_inf.id)} />
    )
}