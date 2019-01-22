import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";
class PostList extends Component {
  componentDidMount() {
    // this.props.fetchPosts();
    this.props.fetchPostsAndUsers();
  }
  renderList() {
    return this.props.posts.map(item => {
      return (
        <div className="item" key={item.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </div>
            <UserHeader userId={item.userId} />
          </div>
        </div>
      );
    });
  }
  render() {
    // console.log("POST: ", this.props.posts);
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};
export default connect(
  mapStateToProps,
  { fetchPostsAndUsers }
)(PostList);
