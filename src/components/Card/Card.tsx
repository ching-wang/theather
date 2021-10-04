import React from "react";
import { Link } from "react-router-dom";
import { Show } from "../../types"
import { CardWrapper, Thumbnail, Title} from "./card.styles";


export const Card = ({ show } : {show: Show} ) => {
    return (
        <CardWrapper>
            <Link key={show.id} to={`/show/${show.id}`}>
                <Thumbnail src={show?.image?.medium} alt="thumbnail" />
                <Title>
                    {show.name}
                </Title>
            </Link>
        </CardWrapper>
    )
}

export default Card;