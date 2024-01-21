import Base from "../components/Base";
import CustomNavbar from "../components/CustomNavbar";
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
  Table,
} from "reactstrap";
import { allMovies, bookMovie, login, searchMovie } from "../services/UserService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Movie = () => {
  const [tableData, setTableData] = useState([]);
  const navigate = useNavigate();

  const [data, setData] = useState({
    movieName: "",
  });

  //handle change
  const handleChange = (event, property) => {
    //dynamic setting values
    setData({ ...data, [property]: event.target.value });
  };
  //reset form
  const resetData = () => {
    setData({
      movieName: "",
    });
    fetchData();
    navigate("/movie");
  };

  const fetchData = () => {
    allMovies()
      .then((response) => {
        console.log("Data Fetched From /api/v1.0/moviebooking/all");
        setTableData(response);
      })
      .catch((error) => {
        console.log("Error while listing movies");
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  //searching movies by movie name
  const submitForm = (event) => {
    event.preventDefault();
    searchMovie(data.movieName)
      .then((response) => {
        console.log("Data Fetched From /api/v1.0/moviebooking/movies/search");
        // setTableData([]);
        setTableData(response);
      })
      .catch((error) => {
        console.log("Error while searching");
        console.log(error);
      });
  };

  const buyTicket = (event, data) => {
    console.log("Buying Tickets "+data.movieName);
    //buy ticket of a specific movie
    localStorage.setItem("movieName",data.movieName);
    localStorage.setItem("theatreName",data.theatreName)
    navigate("/book")
  };

  return (
    <Base>
      <Container>
        <Row className="mt-4">
          <Col l={{ size: 6, offset: 3 }}>
            <Card color="rgb(14,56,90)">
              <CardHeader className="text-center">All Movies</CardHeader>
              <CardBody>
                <Form onSubmit={submitForm}>
                  <FormGroup>
                    <Input
                      type="text"
                      placeholder="Enter Movie Name to Search"
                      id="movieName"
                      onChange={(e) => handleChange(e, "movieName")}
                      value={data.movieName}
                      required
                    ></Input>
                  </FormGroup>
                  <Row>
                    <Container className="text-center">
                      <Button type="submit" color="warning">
                        Search
                      </Button>
                      <Button type="reset" onClick={resetData} className="ms-2">
                        Clear
                      </Button>
                    </Container>
                  </Row>
                </Form>
                <br></br>
                <Row>
                  <Table hover bordered>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Movie Name</th>
                        <th>Theatre Name</th>
                        <th>Tickets Status</th>
                        <th>Book Tickets</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((data, index) => {
                        return (
                          <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{data.movieName}</td>
                            <td>{data.theatreName}</td>
                            <td>{data.ticketsStatus}</td>
                            <td>
                              <Container className="text-center">
                                <Button
                                  onClick={(event) => buyTicket(event, data)}
                                  className="ms-2"
                                >Buy Ticket</Button>
                              </Container>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};
export default Movie;
