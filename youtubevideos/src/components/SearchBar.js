import React from "react";

class SearchBar extends React.Component {
  state = { userInput: "" };
  onInputChange = e => {
    this.setState({ userInput: e.target.value });
    // console.log(this.state.userInput);
  };

  onFormSubmit = e => {
    e.preventDefault();

    // Todo make sure to callback from parent component
    this.props.onFormUserSubmit(this.state.userInput);
  };
  render() {
    return (
      <div
        style={{ marginTop: "4%", backgroundColor: "#ff0000" }}
        className="search-bar ui segment"
      >
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label style={{ fontSize: "20px", fontFamily: "sansSerif" }}>
              Video Search
            </label>
            <input
              type="text"
              value={this.state.userInput}
              onChange={this.onInputChange}
              style={{ backgroundColor: "#ffffff", fontSize: "17px" }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
