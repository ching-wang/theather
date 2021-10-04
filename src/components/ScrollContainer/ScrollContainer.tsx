import React from "react";
import { Wrapper } from "./scrollContainer.styles";

export const ScrollContainer = (props: {children: React.ReactNode}) => {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}

export default ScrollContainer;