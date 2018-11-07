import React, { Component } from 'react';
import Math from './Math';
import Home from './Home';
import { Route, Switch, Redirect } from 'react-router-dom';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/:operation/:num1/:num2"
          render={props => (
            <Math {...props} operations={this.props.operations} />
          )}
        />
        <Route exact path="/" render={props => <Home {...props} />} />
      </Switch>
    );
  }
}

export default Routes;
