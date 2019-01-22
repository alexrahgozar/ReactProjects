import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onInputSubmit("buildings");
  }

  onInputSubmit = async input => {
    const listOfVideos = await youtube.get("/search", {
      params: {
        q: input
      }
    });
    // console.log(listOfVideos.data.items);
    this.setState({
      videos: listOfVideos.data.items,
      selectedVideo: listOfVideos.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormUserSubmit={this.onInputSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                myVideos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
