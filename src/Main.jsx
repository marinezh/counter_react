import React, { Component } from "react";
import Button from "./UI/Button";
import "./Main.css";

class Main extends Component {
  state = {
    counter: 0,
  };

  addOneHandler = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  addFiveHandler = () => {
    this.setState({ counter: this.state.counter + 5 });
  };
  removeFiveHandler = () => {
    if (this.state.counter < 5) {
      this.setState({ counter: 0 });
    } else {
      this.setState({ counter: this.state.counter - 5 });
    }
  };
  removeOneHandler = () => {
    if (this.state.counter < 1) {
      this.setState({ counter: 0 });
    } else {
      this.setState({ counter: this.state.counter - 1 });
    }
  };
  resetHandler = () => {
    this.setState({ counter: 0 });
  };

  render() {
    let counterClass = "";
    if (this.state.counter === 0) {
      counterClass = "Counter";
    } else if (this.state.counter %2 === 0) {
      counterClass = "Counter even";
    } else {
      counterClass = "Counter odd";
    }
    return (
      <main>
        <div>
          <h1 className={counterClass}>{this.state.counter}</h1>
        </div>
        <div className="buttons">
          <Button click={this.addOneHandler}>Add five</Button>
          <Button click={this.addFiveHandler}>Add one</Button>
          <Button click={this.resetHandler}>Reset</Button>
          <Button click={this.removeOneHandler}>Remove one</Button>
          <Button click={this.removeFiveHandler}>Remove five</Button>
        </div>
      </main>
    );
  }
}

export default Main;
// const Main = () => {
//   return (
//     <main>
//       <div className ="Circle">
//         <h1>0</h1>
//       </div>
//       <div className="Buttons">
//         <button>Add five</button>
//         <button>Add one</button>
//         <button>Reset</button>
//         <button>Remove one</button>
//         <button>Remove five</button>
//       </div>
//     </main>
//   );
// };

// export default Main;
