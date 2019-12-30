import React from "react";
import SearchBar from "./SearchBar";
import credentials from "../credentials";
import youtube from "../apis/youtube";

class App extends React.Component {
  onTermSubmit = term => {
    debugger;
    youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        type: "video",
        maxResult: 5,
        key: credentials.API_KEY
      }
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
