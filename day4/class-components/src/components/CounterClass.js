import React, { Component } from "react";

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initial,
    };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { title, subTitle } = this.props;

    return (
      <div>
        <h2>{title}</h2>
        <h4>{subTitle}</h4>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default CounterClass;
