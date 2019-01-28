import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";
// const StreamEdit = props => {
//   console.log("PROPS: ", props);
//   // match then params id: "?"
//   return <div style={{ color: "pink" }}>StreamEdit</div>;
// };

class StreamEdit extends Component {
  componentDidMount() {
    // console.log("props: A", this.props);
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    // console.log("FormValues: ", formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  };
  render() {
    // console.log("PROPS: ", this.props);
    // match then params id: "?"
    // same concept as stream delete and show
    // initialValues={{ title: "Edit ME", description: "NBA LIVE 2" }}
    // initialValues={this.props.stream}
    // initialValues={{title:this.props.stream.title}}
    if (!this.props.stream) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <h2>Edit Stream</h2>
        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownCompProps) => {
  return { stream: state.streams[ownCompProps.match.params.id] };
};
export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);
