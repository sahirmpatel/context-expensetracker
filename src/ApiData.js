import React, { Component } from "react";

export class ApiData extends Component {
  render() {
    console.log("the props are", this.props.quote);

    return <div>api data here</div>;
  }
}

export default ApiData;
