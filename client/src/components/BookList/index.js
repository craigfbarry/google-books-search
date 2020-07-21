import React from "react";
import { Row, Col } from "../Grid";
import Thumbnail from "../Thumbnail";



export function BookList({children}) {
    return <ul className="list-group">{children}</ul>
}

export function BookListItem({    
    key,
    title,
    authors,
    description,
    link,
    image
}) {

   return (
        <li className="list-group-item">            
                <Row>
                    <Col size="xs-3 sm-3">
                        <Thumbnail src={image || "https://placehold.it/300x300"} alt={title}/>
                    </Col>
                    <Col size="xs-9 sm-9">
                        <h5>{title}</h5>
                        Authors
                        <p>{authors}</p>
                        <p>{description}</p>
                    </Col>
                </Row>            
        </li>
    );
}