import { Col, Carousel, Badge, Button } from "react-bootstrap";
import { RiHeart3Line, RiStarFill, RiHeart3Fill } from "react-icons/ri";
import { BsSquare, BsArrowRight, BsCheckSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";

const SingleItem = ({ data }) => {
    const [isFavourite, setIsFavourite] = useState(false);
    const [isCompare, setIsCompare] = useState(false);

    const isFav = () => {
        setIsFavourite(!isFavourite);
    };

    const isComp = () => {
        setIsCompare(!isCompare);
    };

    return (
        <>
            <Col
                md={12}
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: "15px",
                }}
            >
                {isFavourite ? (
                    <RiHeart3Fill className="icon" onClick={() => isFav()} />
                ) : (
                    <RiHeart3Line className="icon" onClick={() => isFav()} />
                )}

                {data.state === "usato" ? (
                    <div className="squareDiv">
                        <p className="state">{data.state}</p>
                        <div className="triangleDiv"></div>
                    </div>
                ) : (
                    <div className="squareDivGray">
                        <p className="state">{data.state}</p>
                        <div className="triangleDiv"></div>
                    </div>
                )}
            </Col>

            <Col md={12} style={{ display: "flex" }}>
                <Carousel className="carousel">
                    <Carousel.Item>
                        <img
                            className="d-block w-100 imgCarousel"
                            src={data.img1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 imgCarousel"
                            src={data.img2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 imgCarousel"
                            src={data.img3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Col>

            <Col md={6}>
                <p style={{ fontWeight: "bold", textTransform: "uppercase" }}>
                    {data.category} | {data.year}
                </p>
            </Col>

            <Col md={4} style={{ justifyContent: "flex-end" }}>
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
            </Col>{" "}

            <Col md={2}>
                <p> 8.000</p>
            </Col>

            <Col md={12}>
                <h3
                    style={{
                        fontStyle: "italic",
                        paddingLeft: "0",
                        marginLeft: "0",
                        fontWeight: "bold",
                    }}
                >
                    {data.title}
                </h3>
            </Col>

            <Col md={12}>
                <p className="description">{data.description}</p>
            </Col>

            <Col md={12}>
                <Badge className="badge">{data.tag}</Badge>
            </Col>

            <Col md={12}>
                <p>
                    TAGLIA <span style={{ fontWeight: "bold" }}> S M L XL</span>
                </p>
            </Col>

            <Col md={12}>
                <p>
                    COLORI <span style={{ fontWeight: "bold" }}> {data.colori}</span>
                </p>
            </Col>

            <Col md={12}>
                <p
                    style={{
                        fontWeight: "bold",
                        fontSize: "1.5rem",
                        fontFamily: "Titillium Web",
                    }}
                >
                    € {data.discountPrice}{" "}
                    <span
                        style={{
                            fontWeight: "gray",
                            color: "gray",
                            fontSize: "1rem",
                            textDecoration: "line-through",
                        }}
                    >
                        € {data.prezzo}
                    </span>
                </p>
            </Col>

            <Col
                md={6}
                style={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "baseline",
                    paddingBottom: "15px",
                }}
            >
                {isCompare ? (
                    <BsCheckSquare onClick={() => isComp()} />
                ) : (
                    <BsSquare onClick={() => isComp()} />
                )}
                <p style={{ marginLeft: "10px" }}>COMPARA</p>{" "}
            </Col>

            <Col md={6}>
                <Link to="/detail">
                    <Button style={{ backgroundColor: "black", border: "none" }}>
                        SCOPRI <BsArrowRight />
                    </Button>
                </Link>
            </Col>
        </>
    );
};

export default SingleItem;
