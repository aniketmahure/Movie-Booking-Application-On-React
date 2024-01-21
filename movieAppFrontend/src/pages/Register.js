import { useState } from "react";
import { NavLink as ReactLink} from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Base from "../components/Base";
import { signUp } from "../services/UserService";
import { toast } from 'react-toastify';

const Register = () => {

    const [data,setData]=useState({
        loginId:'',
        firstName:'',
        lastName:'',
        email:'',
        contactNumber:'',
        password:'',
        roles:'user'
    })

    const [error,setError]=useState({
        errors:{},
        isError:false
    })

    //handle change
    const handleChange=(event,property)=>{
            //dynamic setting values
        setData({...data,[property]:event.target.value})
    }
    //reset form
    const resetData=()=>{
        setData({
            loginId:'',
            firstName:'',
            lastName:'',
            email:'',
            contactNumber:'',
            password:'',
            roles:''
        })
    }

    //submit form
    const submitForm=(event)=>{
        event.preventDefault()
        console.log(data)

        // if(error.isError){
            
        //     return;
        // }

        // validate

        //call server api
        signUp(data).then((response) => {
            console.log(response);
            console.log("User is Registered")
            toast.success("User is succesfully Registered ")
        }).catch((error) => {
            console.log(error);
            console.log("Error Log---");
            toast.error("Something Went Wrong!! ")
            // //handle errors
            // setError({
            //     errors:error,
            //     isError:true
            // })
        });
        setData({
            loginId:'',
            firstName:'',
            lastName:'',
            email:'',
            contactNumber:'',
            password:'',
            roles:''
        })
    }

    return (
        <Base>
        <Container>
            <Row className="mt-4">
                {JSON.stringify(data)}
                <Col sm={{size:6,offset:3}}>
                    <Card>
                    <CardHeader className="text-center"> Fill The Information for Registration</CardHeader>
                    <CardBody>
                        <Form onSubmit={submitForm}>
                            <FormGroup>
                                <Label for="loginId">Username</Label>
                                <Input type="text" placeholder="Enter your Name" id="loginId" 
                                onChange={(e)=>handleChange(e,'loginId')}
                                value={data.loginId}
                                required> 
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="firstName">Firstname</Label>
                                <Input type="text" placeholder="Enter your Firstname" id="firstName"
                                onChange={(e)=>handleChange(e,'firstName')}
                                value={data.firstName}
                                required></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="lastName">Lastname</Label>
                                <Input type="text" placeholder="Enter your Lastname" id="lastName"
                                onChange={(e)=>handleChange(e,'lastName')}
                                value={data.lastName}
                                required></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="email" placeholder="Enter your Email" id="email"
                                onChange={(e)=>handleChange(e,'email')}
                                value={data.email}
                                required></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="contactNumber">Contact Number</Label>
                                <Input type="number" placeholder="Enter your Contact Number" id="contactNumber"
                                onChange={(e)=>handleChange(e,'contactNumber')}
                                value={data.contactNumber}
                                maxLength={10} minLength={10}
                                required></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input type="password" placeholder="Enter your Password" id="password"
                                onChange={(e)=>handleChange(e,'password')}
                                value={data.password}
                                required></Input>
                            </FormGroup>
                            <Container className="text-center">
                                <Button type="submit" color="success">Register</Button>
                                <Button onClick={resetData} type="reset" className="ms-2">Clear</Button>
                            </Container>
                            <br></br>
                            <Container>
                                <center>If already user login your account <Button tag={ReactLink} to="/login" color="success" outline size="sm">here</Button></center>
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
export default Register;