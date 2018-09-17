import React, { Component } from "react";
import apiClient from "../api";
import { TrackItem, UnorderedList } from "./ListItem";

export default class TrackList extends Component {
  state = {
    items:
      (localStorage.getItem("tracks") &&
        JSON.parse(localStorage.getItem("tracks"))) ||
      []
  };
  fetchData = () => {
    apiClient
      .getTopTracks({ limit: 50, time_range: "long_term", offset: 0 })
      .then(tracks => {
        console.log(`Canciones: ${tracks.items}`);
        localStorage.setItem("tracks", JSON.stringify(tracks.items));
        this.setState(function(prevState) {
          return {
            items: tracks.items
          };
        });
      });
  };
  componentDidMount() {
    if (this.state.items.length === 0) {
      this.fetchData();
    }
  }
  render() {
    return (
      <UnorderedList>
        {this.state.items.map((item, i) => (
          <TrackItem position={i} item={item} key={i} />
        ))}
      </UnorderedList>
    );
  }
}
