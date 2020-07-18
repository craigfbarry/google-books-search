import React from "react";
import { Container, Row, Col } from "../Grid";


export function BookList({children}) {
    return <ul className="list-group">{children}</ul>
}

export function BookListItem({
    title 
}) {
    return (
        <li className="list-group-item">
            <Container>
                <Row>
                    <Col>
                        <h3>{title}</h3>
                    </Col>
                </Row>
            </Container>
        </li>
    );
}