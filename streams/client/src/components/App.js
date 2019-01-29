import React from "react";
// import { BrowserRouter, Route } from "react-router-dom";
import { Router, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import StreamList from "./streams/StreamList";
import Header from "./Header";
import BrowserHistory from "../BrowserHistory";

const App = () => {
  return (
    <div
      style={{
        marginTop: "5%",
        padding: "25px",
        border: "2px solid black",
        borderRadius: "5px",
        backgroundColor: "#dfe3ee"
      }}
      className="ui container"
    >
      <Router history={BrowserHistory}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;

// example
// const PageOne = () => {
//   return (
//     <div style={{ color: "red" }}>
//       <h1> PAGE ONE </h1>
//       <Link to="/two">GO TO PAGE TWO </Link>
//     </div>
//   );
// };
// const PageTwo = () => {
//   return (
//     <div style={{ color: "blue" }}>
//       <h1> PAGE TWO</h1>
//       <Link to="/">GO TO PAGE ONE </Link>
//     </div>
//   );
// };
