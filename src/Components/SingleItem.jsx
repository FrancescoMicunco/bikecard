import { Col, Carousel, Badge, Button } from 'react-bootstrap'
import { RiHeart3Line, RiStarFill, RiHeart3Fill } from "react-icons/ri";
import { BsSquare, BsArrowRight, BsCheckSquare } from "react-icons/bs";
import { Link } from 'react-router-dom'
import { useState } from "react"


const SingleItem = ({ data }) => {
    const [isFavourite, setIsFavourite] = useState(false)
    const [isCompare, setIsCompare] = useState(false)
    console.log("props", data)

    const isFav = () => {
        setIsFavourite(!isFavourite)
    }

    const isComp = () => {
        setIsCompare(!isCompare)
    }

    return (
        <>
            {
                data.map(bike =>
                    <>
                        <Col md={12} style={{ display: "flex", justifyContent: "space-between", paddingTop: "15px" }}>

                            {isFavourite ? <RiHeart3Fill className="icon" onClick={() => isFav()} /> :
                                <RiHeart3Line className="icon" onClick={() => isFav()} />
                            }

                            {bike.state === "usato" ? <div height="40" width="80" style={{ backgroundColor: "orange", paddingTop: "20px", borderBottom: "solid 20px white", paddingBottom: "0" }}><p style={{ fontWeight: "bold", marginBottom: "0" }}>{bike.state}</p></div>
                                :
                                <div height="40" width="80" style={{ backgroundColor: "gray", paddingTop: "20px", borderBottom: "solid 20px white", paddingBottom: "0" }}><p style={{ fontWeight: "bold", marginBottom: "0" }}>{bike.state}</p></div>
                            }
                        </Col>
                        <Col md={12} style={{ display: "flex" }}>


                            <Carousel className="carousel">
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 imgCarousel"
                                        src={bike.img1}
                                        alt="First slide"
                                    />

                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 imgCarousel"
                                        src={bike.img2}
                                        alt="Second slide"
                                    />


                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 imgCarousel"
                                        src={bike.img3}
                                        alt="Third slide"
                                    />


                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col md={6}><p style={{ fontWeight: "bold" }}>{bike.category} | {bike.year}</p></Col>
                        <Col md={4} style={{ justifyContent: "flex-end" }}><RiStarFill /><RiStarFill /><RiStarFill /><RiStarFill /></Col>   <Col md={2}><p> 8.000</p></Col>
                        <Col md={12}><h3 style={{ fontStyle: "italic", paddingLeft: "0", marginLeft: "0", fontWeight: "bold" }}>{bike.title}</h3></Col>
                        <Col md={12}><p className="description">{bike.description}</p></Col>
                        <Col md={12}><Badge className="badge">{bike.tag}</Badge></Col>
                        <Col md={12}><p>TAGLIA <span style={{ fontWeight: "bold" }}> S M L XL</span></p></Col>
                        <Col md={12}><p>COLORI <span style={{ fontWeight: "bold" }}> {bike.colori}</span></p></Col>
                        <Col md={12}><p style={{ fontWeight: "bold", fontSize: "1.5rem" }}>{bike.discountPrice} <span style={{ fontWeight: "gray", color: "gray", fontSize: "1rem", textDecoration: "line-through" }}> {bike.prezzo}</span></p></Col>
                        <Col md={6} style={{ display: "flex", justifyContent: "left", alignItems: "baseline", paddingBottom: "15px" }}>

                            {isCompare ? <BsCheckSquare onClick={() => isComp()} /> : <BsSquare onClick={() => isComp()} />}<p style={{ marginLeft: "10px" }}>COMPARA</p> </Col>

                        <Col md={6}><Link to="detail"><Button style={{ backgroundColor: "black", border: "none" }}>SCOPRI <BsArrowRight /></Button></Link></Col>;
                    </>
                )}
        </>)
}

export default SingleItem;