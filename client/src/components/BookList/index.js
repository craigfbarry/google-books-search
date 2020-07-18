import React from "react";
import { Container, Row, Col } from "../Grid";
import Thumbnail from "../Thumbnail";


export function BookList({children}) {
    return <ul className="list-group">{children}</ul>
}

export function BookListItem({
    title,
    authors,
    description,
    link,
    image
}) {
    return (
        <li className="list-group-item">
            <Container>
                <Row>
                    <Col size="xs-3 sm-3">
                        <Thumbnail src={image || "https://placehold.it/300x300"} />
                    </Col>
                    <Col size="xs-9 sm-9">
                        <h5>{title}</h5>
                        Authors
                        <p>{authors}</p>
                        <p>{description}</p>
                        <a rel="noreferrer noopener" target="_blank" href={link}>Go to book</a>
                    </Col>
                </Row>
            </Container>
        </li>
    );
}