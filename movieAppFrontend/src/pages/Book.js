import Base from "../components/Base";
import { useState } from "react";
import { NavLink as ReactLink, useNavigate} from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { toast } from 'react-toastify';
import { login } from "../services/UserService";
import { doLogin } from "../auth";

const Book = () => {
    const navigate = useNavigate();
    const [movieDetails,setmovieDetails]=useState({
        loginId:localStorage.getItem("LoginId"),
        movieName:localStorage.getItem("movieName"),
        theatreName:localStorage.getItem("theatreName"),
        noOfTickets:'',
        seatNumber:[]
    })

    //handle change
    const handleChange=(event,property)=>{
            //dynamic setting values
            setmovieDetails({...movieDetails,[property]:event.target.value})
    }
    //reset form
    const resetData=()=>{
        movieDetails({
            noOfTickets:'',
            seatNumber:[]
        })
    }

    //submit form
    const submitForm=(event)=>{
        event.preventDefault()
        console.log(movieDetails)
        // //call server api
        // login(data).then((response) => {
        //     console.log(response);
        //     console.log("User is Login");
        //     //save login response to local storage
        //     doLogin(response)
        //     toast.success("User is succesfully Login ");
        //     navigate('/movie');            
        // }).catch((error) => {
        //     console.log(error);
        //     console.log("Error Log---");
        //     if(error.response.data.status !== "401")
        //     toast.error("Something Went Wrong!! ")
        //     else
        //     toast.error("Unauthorized : Enter Valid Credentials ")
            
        // });
    }

    return (
        <Base>
            <Container >
            <Row className="mt-4">
                <Col sm={{size:6,offset:3}}>
                    <Card color="rgb(14,56,90)">
                    <CardHeader className="text-center"><b>Book ticket</b></CardHeader>
                    <CardBody>
                        <Form onSubmit={submitForm}>
                            <FormGroup>
                                <Label for="loginId">Name on Ticket</Label>
                                <Input type="text" placeholder="Ticket on Name" id="loginId"
                                onChange={(e)=>handleChange(e,'loginId')}
                                value={movieDetails.loginId}
                                disabled>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="movieName">Movie Name</Label>
                                <Input type="text" placeholder="movieName" id="movieName"
                                onChange={(e)=>handleChange(e,'movieName')}
                                value={movieDetails.movieName}
                                disabled>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="theatreName">theatre Name</Label>
                                <Input type="text" placeholder="theatreName" id="theatreName"
                                onChange={(e)=>handleChange(e,'theatreName')}
                                value={movieDetails.theatreName}
                                disabled>
                                </Input>
                            </FormGroup>
                            <Row>
                                <Col>D1</Col>
                                <Col>D2</Col>
                                <Col>D3</Col>
                                <Col>D4</Col>
                                <Col>D5</Col>
                            </Row>
                            <Row>
                                <Col>C1</Col>
                                <Col>C2</Col>
                                <Col>C3</Col>
                                <Col>C4</Col>
                                <Col>C5</Col>
                            </Row>
                            <Row>
                                <Col></Col>
                                <Col>B1</Col>
                                <Col>B2</Col>
                                <Col>B3</Col>
                                <Col></Col>
                            </Row>
                            <Row>
                                <Col></Col>
                                <Col>A1</Col>
                                <Col>A2</Col>
                                <Col>A3</Col>
                                <Col></Col>
                            </Row>
                            <Row>{movieDetails.seatNumber}</Row>
                            <Container className="text-center">
                                <Button type="submit" color="success" >Book Movie</Button>
                                <Button type="reset" onClick={resetData} className="ms-2">Clear</Button>
                            </Container>
                        </Form>
                    </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
        </Base>
    );
};
export default Book;