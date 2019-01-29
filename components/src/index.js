import React from "react";
import ReactDOM from "react-dom";
import Faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
const getTime = () => {
  return new Date().toLocaleTimeString();
};

const App = () => {
  return (
    <div style={{ marginTop: "5%" }} className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          name="Alex"
          timeAt={getTime()}
          avatar={Faker.image.avatar()}
          comments="Great Job!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name="Sacha"
          timeAt={getTime()}
          avatar={Faker.image.avatar()}
          comments="Congrats My Friend"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name="Tom"
          timeAt={getTime()}
          avatar={Faker.image.avatar()}
          comments="Keep Up the Great Work"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
