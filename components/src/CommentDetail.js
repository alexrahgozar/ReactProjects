import React from "react";
// import Faker from "faker";

const CommentDetail = props => {
  console.log(props);
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img
          style={{ height: "70px", width: "70px" }}
          alt="avatar"
          src={props.avatar}
        />
      </a>
      <div style={{ marginLeft: "40%" }} className="content">
        <a
          style={{ fontSize: "12px", color: "black" }}
          href="/"
          className="name"
        >
          {props.name}
        </a>
        <div className="metadata">
          <span style={{ fontSize: "12px", color: "black" }} className="date">
            Time: {props.timeAt}
          </span>
        </div>
        <div style={{ fontSize: "15px", color: "black" }} className="text">
          {props.comments}
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
