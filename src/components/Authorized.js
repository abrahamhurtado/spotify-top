import React, { Component } from "react";

export default class Authorized extends Component {
  componentDidMount() {
    const { access_token, expires_in } = this.props.location.hash
      .slice(1)
      .split("&")
      .map(x => {
        const [n, m] = x.split("=");
        return {
          [n]: m
        };
      })
      .reduce((x, y) => Object.assign(x, y), {});

    if (access_token !== undefined && expires_in !== undefined) {
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("expires_in", expires_in);
      localStorage.setItem("issued_at", Date.now());
    }

    this.props.history.push("/");
  }
  render() {
    return <h2>Spotify has given authorization</h2>;
  }
}
