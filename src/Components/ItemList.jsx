import { Col, Container, Row, Carousel, Badge, Button } from 'react-bootstrap'
import { RiHeart3Line, RiStarFill, RiHeart3Fill } from "react-icons/ri";
import { BsSquare, BsArrowRight, BsCheckSquare } from "react-icons/bs";
import { Link } from 'react-router-dom'
import { useState } from "react"

const ItemList = () => {

    const [isFavourite, setIsFavourite] = useState(false)
    const [isCompare, setIsCompare] = useState(false)

    const isFav = () => {
        setIsFavourite(!isFavourite)
    }

    const isComp = () => {
        setIsCompare(!isCompare)
    }


    return (
        <Container>
            <Row>
                <Col md={6} className="card">
                    <Row>
                        <Col md={12} style={{ display: "flex", justifyContent: "space-between", paddingTop: "15px" }}>
                            {isFavourite ? <RiHeart3Fill className="icon" onClick={() => isFav()} /> : <RiHeart3Line className="icon" onClick={() => isFav()} />
                            }<div height="40" width="80" style={{ backgroundColor: "orange", paddingTop: "20px", borderBottom: "solid 20px white", paddingBottom: "0" }}><p style={{ fontWeight: "bold", marginBottom: "0" }}>USATO</p></div></Col>
                        <Col md={12} style={{ display: "flex" }}>
                            <Carousel className="carousel">
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 imgCarousel"
                                        src="https://m.media-amazon.com/images/I/51fES+YRTYL._AC_SY355_.jpg"
                                        alt="First slide"
                                    />

                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 imgCarousel"
                                        src="https://m.media-amazon.com/images/I/61hzbxbJW2L._AC_SY355_.jpg"
                                        alt="Second slide"
                                    />


                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 imgCarousel"
                                        src="https://m.media-amazon.com/images/I/51fES+YRTYL._AC_SY355_.jpg"
                                        alt="Third slide"
                                    />


                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col md={6}><p style={{ fontWeight: "bold" }}>CANNONDALE | 2019</p></Col>
                        <Col md={4} style={{ justifyContent: "flex-end" }}><RiStarFill /><RiStarFill /><RiStarFill /><RiStarFill /></Col>   <Col md={2}><p> 8.000</p></Col>
                        <Col md={12}><h3 style={{ fontStyle: "italic", paddingLeft: "0", marginLeft: "0", fontWeight: "bold" }}>ADVENTURE NEO 1 EQ</h3></Col>
                        <Col md={12}><p className="description">Una bici elettrica ideale per andare a lavoro e godersi le caratteristiche stradine di campagna</p></Col>
                        <Col md={12}><Badge className="badge">E-BIKE CORSA</Badge></Col>
                        <Col md={12}><p>TAGLIA <span style={{ fontWeight: "bold" }}> S M L XL</span></p></Col>
                        <Col md={12}><p>COLORI <span style={{ fontWeight: "bold" }}> +4</span></p></Col>
                        <Col md={12}><p style={{ fontWeight: "bold", fontSize: "1.5rem" }}>€ 3.900,00 <span style={{ fontWeight: "gray", color: "gray", fontSize: "1rem", textDecoration: "line-through" }}> € 4.000,00</span></p></Col>
                        <Col md={6} style={{ display: "flex", justifyContent: "left", alignItems: "baseline", paddingBottom: "15px" }}>
                            {isCompare ? <BsCheckSquare onClick={() => isComp()} /> : <BsSquare onClick={() => isComp()} />}<p style={{ marginLeft: "10px" }}>COMPARA</p> </Col>
                        <Col md={6}><Link to="detail"><Button style={{ backgroundColor: "black", border: "none" }}>SCOPRI <BsArrowRight /></Button></Link></Col>
                    </Row>
                </Col>

            </Row >
        </Container >
    );
}

export default ItemList;