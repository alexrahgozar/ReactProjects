import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import BrowserHistory from "../../BrowserHistory";
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends Component {
  componentDidMount() {
    // console.log(this.props);
    // this.props.match.params.id
    this.props.fetchStream(this.props.match.params.id);
  }
  renderActions() {
    const Id = this.props.match.params.id;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(Id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui green button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return "Warning, are you sure you want to delete this stream?";
    }
    return `Warning, are you sure you want to delete this stream: ${
      this.props.stream.title
    }`;
  }
  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => BrowserHistory.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);
