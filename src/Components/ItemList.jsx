import { Col, Container, Row } from 'react-bootstrap'
import SingleItem from '../Components/SingleItem.jsx'
import data from '../data.js'

const ItemList = () => {

    return (
        <Container style={{ display: 'flex' }}>
            <Row >
                {data.map(e =>
                    <Col md={6} className="card">
                        <div >
                            <svg xmlns="http://www.w3.org/2000/svg" className="flag" id="flag-icons-gb" viewBox="0 0 512 512">
                                <path fill="#012169" d="M0 0h512v512H0z" />
                                <path fill="#FFF" d="M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z" />
                                <path fill="#C8102E" d="m184 324 11 34L42 512H0v-3l184-185zm124-12 54 8 150 147v45L308 312zM512 0 320 196l-4-44L466 0h46zM0 1l193 189-59-8L0 49V1z" />
                                <path fill="#FFF" d="M176 0v512h160V0H176zM0 176v160h512V176H0z" />
                                <path fill="#C8102E" d="M0 208v96h512v-96H0zM208 0v512h96V0h-96z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="flag" id="flag-icons-it" viewBox="0 0 512 512">
                                <g fill-rule="evenodd" stroke-width="1pt">
                                    <path fill="#fff" d="M0 0h512v512H0z" />
                                    <path fill="#009246" d="M0 0h170.7v512H0z" />
                                    <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
                                </g>
                            </svg>
                        </div>
                        <Row>
                            <SingleItem data={e} />
                        </Row>
                    </Col>
                )}
            </Row >
        </Container >
    );
}

export default ItemList;