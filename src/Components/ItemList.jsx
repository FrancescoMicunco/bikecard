import { Col, Container, Row, Carousel, Badge, Button } from 'react-bootstrap'
import { RiHeart3Line, RiStarFill, RiHeart3Fill } from "react-icons/ri";
import { BsSquare, BsArrowRight, BsCheckSquare } from "react-icons/bs";
import { Link } from 'react-router-dom'
import SingleItem from '../Components/SingleItem.jsx'


const ItemList = () => {




    return (
        <Container>
            <Row>
                <Col md={6} className="card">
                    <Row>
                        <SingleItem />
                    </Row>
                </Col>

            </Row >
        </Container >
    );
}

export default ItemList;