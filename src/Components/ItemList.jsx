import { Col, Container, Row, Carousel, Badge, Button } from 'react-bootstrap'
import { RiHeart3Line, RiStarFill, RiHeart3Fill } from "react-icons/ri";
import { BsSquare, BsArrowRight, BsSquareFill } from "react-icons/bs";


const ItemList = () => {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <Row>
                        <Col md={12} style={{ display: "flex", justifyContent: "space-between" }}><RiHeart3Line /><h5>USATO</h5></Col>
                        <Col md={12} style={{ display: "flex" }}>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://via.placeholder.com/500x250C/O https://placeholder.com/#content"
                                        alt="First slide"
                                    />

                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://via.placeholder.com/500x250C/O https://placeholder.com/#content"
                                        alt="Second slide"
                                    />


                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://via.placeholder.com/500x250C/O https://placeholder.com/#content"
                                        alt="Third slide"
                                    />


                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col md={6}><h5>CANNONDALE | 2019</h5></Col>
                        <Col md={6}><RiStarFill /><RiStarFill /><RiStarFill /><RiStarFill /><h5>8.000</h5></Col>
                        <Col md={12}><h3 style={{ fontStyle: "italic", paddingLeft: "0", marginLeft: "0", fontWeight: "bold" }}>ADVENTURE NEO 1 EQ</h3></Col>
                        <Col md={12}><p>Una bici elettrica ideale per andare a lavoro e godersi le caratteristiche stradine di campagna</p></Col>
                        <Col md={12}><Badge variant="secondary">E-BIKE CORSA</Badge></Col>
                        <Col md={12}><p>TAGLIA <span style={{ fontWeight: "bold" }}> S M L XL</span></p></Col>
                        <Col md={12}><p>COLORI <span style={{ fontWeight: "bold" }}> +4</span></p></Col>
                        <Col md={12}><p style={{ fontWeight: "bold", fontSize: "1.5rem" }}>€ 3.900,00 <span style={{ fontWeight: "gray", color: "gray", fontSize: "1rem", textDecoration: "line-through" }}> € 4.000,00</span></p></Col>
                        <Col md={6}><BsSquare />COMPARA</Col><Col md={6}><Button variant="dark">SCOPRI <BsArrowRight /></Button></Col>
                    </Row>
                </Col>
                <Col md={6}>

                    <RiHeart3Line />

                </Col>
            </Row >
        </Container >
    );
}

export default ItemList;