import React from "react";
import { Spinner } from "reactstrap";
import styledComponents from "styled-components";
const Comment = styledComponents.p`
font-size: 13px;
font-weight: 400px;
color: #000000;
line-height: 15,23px;
`
const Date = styledComponents.span`
color: #999999;
font-size: 13px;
line-height: 20px;
`
export default function Card_comments({ card_inf }) {
    return (
        <>
            {
                card_inf.comments ?
                    card_inf.comments.map((item) => <>
                        <Date>{item.date}</Date>
                        <Comment key={item.id}>{item.text}</Comment>
                    </>)
                    :
                    <Spinner />
            }
        </>
    );
};
