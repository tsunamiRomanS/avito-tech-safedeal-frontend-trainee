import React, { useState } from 'react'
import { Input, Button } from "reactstrap"
import styledComponents from "styled-components"
const WrapperInput = styledComponents.div`
padding: 20px 0;
`
export default function Card_form() {
    const [name, setName] = useState("")
    const [comm, setComm] = useState("")
    return (
        <>
            <div>
                <Input placeholder="Ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <WrapperInput>
                <Input placeholder="Ваш комментарий" type="textarea"
                    value={comm}
                    onChange={(e) => setComm(e.target.value)}
                />
            </WrapperInput>
            <div>
                <Button block color="primary">
                    Оставить комментарий
                </Button>
            </div>
        </>
    )
}
