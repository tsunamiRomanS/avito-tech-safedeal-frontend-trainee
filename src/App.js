import React, { useState } from "react";
import Title_app from "./components/Title_app/Title_app";
import Card_modal_320 from "./components/Card_list/Card_modal_320/Card_modal_320";
import Card_list from "./components/Card_list/Card_list";
import Card_modal_wrapperFullscreen from "./components/Card_list/Card_modal/Card_modal_wrapperFullscreen";
export default function App() {
    const [id, setId] = useState("")
    if (!id) return <>
        <section>
            <Title_app />
        </section>
        <section>
            <Card_list setId={setId} />
        </section>
    </>
    else if (window.screen.width < 768) return <section>
        <Card_modal_320 card_url={id} setId={setId} />
    </section>
    else return <>
        <section>
            <Title_app />
        </section>
        <section>
            <Card_list setId={setId} />
            <Card_modal_wrapperFullscreen setId={setId} card_url={id} />
        </section>
    </>
};