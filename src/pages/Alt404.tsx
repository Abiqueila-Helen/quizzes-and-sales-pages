import React from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

const Alt404 = () => {
    return (
        <React.Fragment>
            <div className="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
                <div className="bg-overlay"></div>
                <div className="auth-page-content overflow-hidden pt-lg-5">
                    <Container>
                        <Row className="justify-content-center">
                            <Col xl={5}>
                                <Card className="overflow-hidden">
                                    <CardBody className="p-4">
                                        <div className="text-center">
                                            <i className="ri-bard-line display-5 text-success"></i>
                                            <h1 className="text-primary mb-4">Oops!</h1>
                                            <h4 className="text-uppercase">Desculpe, página não encontrada 😭</h4>
                                            <p className="text-muted mb-4">A página que você procura não está disponível!</p>
                                            <a href="https://wa.me/19991703327" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">Fale com o suporte</a>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </React.Fragment>
    );
};

if (typeof window !== "undefined") {
    document.title = "404 Error Alt | Velzon - React Admin & Dashboard Template";
}

export default Alt404;