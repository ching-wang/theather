import React from "react";
import { Wrapper } from "./scrollContainer.styles";


type Props = {
    children?: JSX.Element
}

export const ScrollContainer = (props: Props) => {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}

export default ScrollContainer;