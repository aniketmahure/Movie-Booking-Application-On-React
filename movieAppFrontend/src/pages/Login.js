import Base from "../components/Base";
import { useState } from "react";
import { NavLink as ReactLink, useNavigate} from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { toast } from 'react-toastify';
import { login } from "../services/UserService";
import { doLogin } from "../auth";

const Login = () => {
    const navigate = useNavigate();
    const [data,setData]=useState({
        loginId:'',
        password:''
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
            password:''
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
        login(data).then((response) => {
            console.log(response);
            console.log("User is Login");
            //save login response to local storage
            doLogin(response)
            toast.success("User is succesfully Login ");
            navigate('/movie');            
        }).catch((error) => {
            console.log(error);
            console.log("Error Log---");
            if(error.response.data.status !== "401")
            toast.error("Something Went Wrong!! ")
            else
            toast.error("Unauthorized : Enter Valid Credentials ")
            
        });
        setData({
            loginId:'',
            password:''
        })
    }

    return (
        <Base>
            <Container >
            <Row className="mt-4">
                <Col sm={{size:6,offset:3}}>
                    <Card color="rgb(14,56,90)">
                    <CardHeader className="text-center"> Login to Book ticket </CardHeader>
                    <CardBody>
                        <Form onSubmit={submitForm}>
                            <FormGroup>
                                <Label for="loginId">Userename</Label>
                                <Input type="text" placeholder="Enter your Username" id="loginId"
                                onChange={(e)=>handleChange(e,'loginId')}
                                value={data.loginId}
                                required>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input type="password" placeholder="Enter your Password" id="password"
                                onChange={(e)=>handleChange(e,'password')}
                                value={data.password}
                                required>
                                </Input>
                            </FormGroup>
                            <Container className="text-center">
                                <Button type="submit" color="success" >Login</Button>
                                <Button type="reset" onClick={resetData} className="ms-2">Clear</Button>
                            </Container>
                            <br></br>
                            <Container>
                                <center>If you are new, register your account <Button tag={ReactLink} to="/register" color="success" outline size="sm">click here</Button></center>
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
export default Login;