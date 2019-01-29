import React from "react";

const ApprovalCard = props => {
  console.log(props.children);
  return (
    <div style={{ backgroundColor: "#38A1F3" }} className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="positive ui button">Approve</div>
          <div className="negative ui button">Decline</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
// style={{ backgroundColor: "red", text: "white" }}
