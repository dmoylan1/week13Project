import React from 'react';
import LoginForm from './login-form';
import Navigation from './navigation';


export default class Container extends React.Component {
    render() {
      return (
        <div className="container">
          <Navigation />
          <LoginForm />
        </div>
      );
    }
  }