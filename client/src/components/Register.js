import React, { Component } from 'react';
import { AuthConsumer, } from '../providers/AuthProvider';
import { Button, Form, Segment, Header } from 'semantic-ui-react';

class Register extends React.Component {
  state = { email: '', password: '', passwordConfirmation: '', };
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation } = this.state;
    const { auth: { handleRegister, }, history, } = this.props;

    if (password === passwordConfirmation)
      handleRegister({ email, password, passwordConfirmation, }, history);
      else
      alert('Passwords do not match!')
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  render() {
    const { email, password, passwordConfirmation, } = this.state;
    return (
      <Segment basic>
        <Header as='h1' textAlign='center'>
          Register
        </Header>
          <Form>
            <Form.Input 
            label='Email'
            required
            name='email'
            value={email}
            placeHolder='Email'
            type='email'
            onChange={this.handleChange}
            />
            <Form.Input 
            label='Password'
            required
            name='password'
            value={password}
            placeHolder='Password'
            type='password'
            onChange={this.handleChange}
            />
            <Form.Input 
            label='Password Confirmation'
            required
            name='passwordConfirmation'
            value={passwordConfirmation}
            placeHolder='Password Confirmation'
            type='password'
            onChange={this.handleChange}
            />
            <Segment textAlign='center' basic>
              <Button>
                Submit
              </Button>
            </Segment>
          </Form>
      </Segment>
    )
  }
}

export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Register { ...this.props } auth={auth} /> }
      </AuthConsumer>
    )
  }
}