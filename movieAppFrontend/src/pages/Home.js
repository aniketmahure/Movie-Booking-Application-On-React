import { Button, Container, Row } from "reactstrap";
import Base from "../components/Base";
import { NavLink as ReactLink} from 'react-router-dom';
import CustomNavbar from "../components/CustomNavbar";

const Home = () => {
    return (
        <Base>
        <Container>
            <Row>
                <center><h1>Book Latest Movies Here</h1></center>
            </Row>
            <br></br>
            <br></br>
            <Row>
                <center>
                    <Button tag={ReactLink} to="/register" color="warning">Register</Button>
                    <Button tag={ReactLink} to="/login" color="success" className="ms-5">Login</Button>
                </center>
            </Row>
        </Container>        
        </Base> 
    );
};
export default Home;