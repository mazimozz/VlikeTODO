import React, { Component, PropTypes, LinkedStateMixin } from 'react';
import ReactDOM from 'react-dom';
import linkState from 'react-link-state';
import { Form, FormGroup, FormControl, Col, ControlLabel, Checkbox,
         Button
       } from 'react-bootstrap';

let isValid = {
  password(password) {
    return password.length >= 6 || alert('Password must be at least 6 characters long');
  },
  username(username) {
    return username.length >= 3 || alert('Username must be at least 3 characters long');
  },
  loginPasswordRepeat(password, passwordRepeat) {
    if (! passwordRepeat) {
      return true;
    }

    return password === passwordRepeat || alert('Password don\'t match');
  },
  changePasswordRepeat(password, passwordRepeat) {
    if (! passwordRepeat) {
      return false;
    }

    return password === passwordRepeat || alert('Password don\'t match');
  }
};

@reactMixin.decorate(LinkedStateMixin)
export default class Admin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      createAccount: false,
      username: '',
      password: '',
      passwordRepeat: ''
    };
  }
/*  onCreateAccountClick() {
    this.setState({
      createAccount: true
    });
  }*/

  onSubmit() {
    let options = {
      username: this.state.username,
      password: this.state.password
    };

    if (! isValid.username(options.username) ||
        ! isValid.password(options.password) ||
        ! isValid.loginPasswordRepeat(options.password, this.state.passwordRepeat)) {
      return false;
    }

    Accounts.createUser(options, (err) => {
      if (err) {
        alert(err.reason || 'Unknown error');
      } else {
        this.props.onCloseClick.call(this);
      }
    });
  }

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
            <FormControl type="username" placeholder="Username" valueLink={linkState(this, 'username')}/>
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" valueLink={linkState(this, 'password')}/>
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalPasswordRepeat">
          <Col componentClass={ControlLabel} sm={2}>
            PasswordRepeat
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="PasswordRepeat" valueLink={linkState(this, 'passwordRepeat')}/>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="button" onClick={this.onSubmit.bind(this)}>
               Sign up
            </Button>
          </Col>
        </FormGroup>
      </form>
    </div>
    )
  }

}