import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (

        <div mt={5} className="home">

            <h1>Bike Store</h1>
            <h5><span style={{ fontStyle: "italic" }}>created by Francesco Micunco for</span> FastLoop</h5>
            <Link to="list">
                <Button >ENTER</Button></Link>
        </div>
    );
}

export default HomePage;