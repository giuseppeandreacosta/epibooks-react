import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MyFooter = () => {
    return (
        <footer bg="light" variant="light" className="mt-auto py-3  fixed-bottom " >
            <Container>
                <Row>
                    <Col className="text-center">
                        <p>© {new Date().getFullYear()} All rights reserved by Costa Giuseppe Andrea </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default MyFooter;