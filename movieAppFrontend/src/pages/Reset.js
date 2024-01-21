import Base from "../components/Base";
import { NavLink as ReactLink, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { useState } from "react";
import { forgotPassword } from "../services/UserService";
import { toast } from "react-toastify";
import { isUserLogin } from "../auth";

const Reset = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: localStorage.getItem("LoginId"),
    password: "",
  });
  //handle change
  const handleChange = (event, property) => {
    //dynamic setting values
    setData({ ...data, [property]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (isUserLogin && localStorage.getItem("LoginId") == data.username) {
      forgotPassword(data)
        .then((response) => {
          console.log(response);
          toast.success("Password Reset Succesfully");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Error Occured While Resetting Password");
        });
    }
  };
  return (
    <Base>
      <Container>
        <Row className="mt-4">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="rgb(14,56,90)">
              <CardHeader className="text-center">
                {" "}
                Reset Password Here{" "}
              </CardHeader>
              <CardBody>
                <Form onSubmit={onSubmit}>
                  <FormGroup>
                    <Label for="username">Userename</Label>
                    <Input disabled
                      type="text"
                      placeholder="Enter your Username"
                      id="username"
                      value={data.username}
                      required
                    ></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Changed Password</Label>
                    <Input
                      type="password"
                      placeholder="Enter your Changed Password"
                      onChange={(e) => handleChange(e, "password")}
                      value={data.password}
                      required
                    ></Input>
                  </FormGroup>
                  <Container className="text-center">
                    <Button type="submit" color="success">
                      Reset Password
                    </Button>
                  </Container>
                  <br></br>
                  <Container>
                    <center>
                      Login into your account{" "}
                      <Button
                        tag={ReactLink}
                        to="/login"
                        color="success"
                        outline
                        size="sm"
                      >
                        click here
                      </Button>
                    </center>
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
export default Reset;
