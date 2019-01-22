import React from "react";
import routes from "../api/routes";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async term => {
    const list = await routes.get("/search/photos", {
      params: { query: term }
    });
    this.setState({ images: list.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
