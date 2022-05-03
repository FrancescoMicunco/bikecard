import { Col, Container, Row } from 'react-bootstrap'
import SingleItem from '../Components/SingleItem.jsx'
import data from '../data.js'

const ItemList = () => {




    return (
        <Container style={{ display: 'flex' }}>
            <Row >
                {data.map(e =>
                    <Col md={6} className="card">
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