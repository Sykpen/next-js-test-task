import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import Link from "next/link";
import { connect } from "react-redux";
import {
  getClientData,
  changeLoginStatus,
} from "../store/actions/clientActions";

interface MyProps {
  getClientData: (client_params: Object) => void;
  changeLoginStatus: () => void;
}

interface MyState {
  email?: string;
  password?: string;
  name?: string;
}

class RegisterForm extends React.Component<MyProps, MyState> {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = () => {
    let client_params = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
    };

    this.props.getClientData(client_params);
    this.props.changeLoginStatus();
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <Container>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              name="name"
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={this.handleInputChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Link href={"/"}>
            <Button variant="success" type="submit" onClick={this.handleSubmit}>
              Submit
            </Button>
          </Link>
        </Form>
      </Container>
    );
  }
}

const mapDispatchToProps = { getClientData, changeLoginStatus };

export default connect(null, mapDispatchToProps)(RegisterForm);
