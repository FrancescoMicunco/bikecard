import { Col, Container, Row, Carousel, Badge, Button } from 'react-bootstrap'
import { RiHeart3Line, RiStarFill, RiHeart3Fill } from "react-icons/ri";
import { BsSquare, BsArrowRight, BsCheckSquare } from "react-icons/bs";
import { Link } from 'react-router-dom'
import SingleItem from '../Components/SingleItem.jsx'
import data from '../data.js'

const ItemList = () => {




    return (
        <Container style={{ display: 'flex' }}>
            <Row >
                <Col md={5} className="card">
                    <Row >
                        <SingleItem data={data} />
                    </Row>
                </Col>
            </Row >
        </Container >
    );
}

export default ItemList;