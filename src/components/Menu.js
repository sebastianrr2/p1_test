import React from "react";

import TitleBar from "./TitleBar";
import CarouselImages from "./CarrouselImages";

function Menu() {
    return (
        <>
            <TitleBar title={"Menu"} />
            <div style={{ paddingTop: "70px" }}>
                <CarouselImages />
            </div>
        </>
    );
}

export default Menu;
