import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

class Math extends Component {
  add(a, b) {
    return +a + +b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }

  render() {
    let operation = this.props.operations.find(
      e => e === this.props.match.params.operation
    );

    let a = this.props.match.params.num1;
    let b = this.props.match.params.num2;

    if (!operation) {
      return <Redirect to="/" />;
    }

    return <div>{this[operation](a, b)}</div>;
  }
}

export default Math;
