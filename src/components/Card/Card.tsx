import React from "react";
import { Link } from "react-router-dom";
import { Show } from "../../types"
import { CardWrapper, Thumbnail, Title} from "./card.styles";


export const Card = ({ show } : {show: Show} ) => {

    const imagePlaceHolder = "http://lorempixel.com/210/295/abstract/"

    return (
        <CardWrapper>
            <Link key={show.id} to={`/show/${show.id}`}>
                <Thumbnail src={show?.image?.medium || imagePlaceHolder } alt="thumbnail" />
                <Title>
                    {show.name}
                </Title>
            </Link>
        </CardWrapper>
    )
}

export default Card;