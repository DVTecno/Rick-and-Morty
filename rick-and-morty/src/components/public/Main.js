import React, { Component } from "react";
import { Cards } from "./Cards";

export default class Main extends Component {
  //constructor(props) {
  // super(props);
  // // Inicializo el estado del componente en 0
  // this.state = {
  //   contador: 0,
  // };
  render() {
    return (
      <>
        <main>
          <Cards />
        </main>
      </>
    );
  }
}
