import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loading from "./Loading";
class App extends React.Component {
  state = {
    lat: null,
    errorMessage: ""
  };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }
  componentDidUpdate() {
    console.log("component Did Update");
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error Message: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Loading message="Please accept location request" />;
  }
  render() {
    return <div className="some text">{this.renderContent()}</div>;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));

// constructor(props) {
//   super(props);
//   this.state = {
//     lat: null,
//     errorMessage: ""
//   };
// }
