import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Form, FormGroup, FormControl, Col, ControlLabel, Checkbox,
         Button
       } from 'react-bootstrap';

export default class App extends Component {

  render() {
    return(
    <div className="container centered">
      <div className="text-center">
        <h1>Welcome to V like TO-DO!</h1>
      </div>
      <form className="form-horizontal">
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Username
          </Col>
          <Col sm={10}>
            <FormControl type="username" placeholder="Username" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Checkbox>Remember me</Checkbox>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">
               Sign in
            </Button>
          </Col>
        </FormGroup>
      </form>
    </div>
    )
  }

}