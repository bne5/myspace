import React from 'react';
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
        <Header as='h1' textAlign='left'>
          Register
        </Header>
          <Form onSubmit={this.handleSubmit}>
            <Form.Input 
            width="10"
            label='Email'
            required
            autoFocus
            name='email'
            value={email}
            placeholder='Email'
            type='email'
            onChange={this.handleChange}
            />
            <Form.Input 
            width="10"
            label='Password'
            required
            name='password'
            value={password}
            placeholder='Password'
            type='password'
            onChange={this.handleChange}
            />
            <Form.Input 
            width="10"
            label='Password Confirmation'
            required
            name='passwordConfirmation'
            value={passwordConfirmation}
            placeholder='Password Confirmation'
            type='password'
            onChange={this.handleChange}
            />
            <Segment textAlign='center' basic>
              <Button 
              floated='left' 
              inverted 
              color="blue" 
              type='submit'
              >
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