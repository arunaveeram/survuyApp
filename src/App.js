import React, { Component } from "react";
import "./App.css";
import Modal from "./components/Modal";

class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      message: "Loading Survey .....",
    };
  }
  componentDidMount() {
    this.timerHandle = setTimeout(() => {
      this.setState({ show: true });
    }, 2000);
  }

  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }
  toggleModel = () => {
    this.setState({ show: false, message: "Thanks for taking survey!" });
  };

  render() {
    return (
      <main>
        <h1> {this.state.message}</h1>
        <Modal
          show={this.state.show}
          level={this.state.level}
          closeModal={this.toggleModel}
        />
      </main>
    );
  }
}

export default App;
