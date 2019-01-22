import React from "react";
// import Faker from "faker";

const CommentDetail = props => {
  console.log(props);
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatar} />
      </a>
      <div className="content">
        <a href="/" className="name">
          {props.name}
        </a>
        <div className="metadata">
          <span className="date">Time: {props.timeAt}</span>
        </div>
        <div className="text">{props.comments}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
