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
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.userInput}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
