import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
const Header = () => {
  return (
    <div
      style={{
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "#FF9900"
      }}
      className="ui secondary pointing menu"
    >
      <Link
        style={{ fontSize: "25px", fontFamily: "red Monospace" }}
        to="/"
        className="item"
      >
        Streamy
      </Link>
      <div className="right menu">
        <Link
          style={{ fontSize: "25px", fontFamily: "red Monospace" }}
          to="/"
          className="item"
        >
          ALL Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
