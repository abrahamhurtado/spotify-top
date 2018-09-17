import React, { Component } from "react";
import apiClient from "../api";
import { ArtistItem, UnorderedList } from "./ListItem";

export default class ArtistList extends Component {
  state = {
    items:
      (localStorage.getItem("artists") &&
        JSON.parse(localStorage.getItem("artists"))) ||
      []
  };
  fetchData = () => {
    apiClient
      .getTopArtists({ limit: 50, time_range: "long_term", offset: 0 })
      .then(artists => {
        console.log(`Artistas: ${artists.items}`);
        localStorage.setItem("artists", JSON.stringify(artists.items));
        this.setState(function(prevState) {
          return {
            items: artists.items
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
          <ArtistItem position={i} item={item} key={i} />
        ))}
      </UnorderedList>
    );
  }
}
