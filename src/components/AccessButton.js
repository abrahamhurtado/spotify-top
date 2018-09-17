import React from "react";
import styled from "styled-components";
import Spotify from "../media/spotify.svg";

const SpotifyButton = styled.button`
  color: #fff;
  text-align: center;
  font-size: 1.5rem;
  border: 0;
  padding: 0;
  border-radius: 4px;
  background: #1ed760;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  margin: 0 auto;
  cursor: pointer;
  transition: all 0.2s;
  svg {
    fill: #fff;
    height: 2rem;
    margin-left: 9px;
  }
  &:hover {
    background: #149241;
  }
`;

const AccessButton = props => (
  <SpotifyButton
    onClick={e => {
      e.preventDefault();
      const requestParameters = {
        client_id: "020d684d88ac44968071ae95d4dd8860",
        response_type: "token",
        redirect_uri: encodeURIComponent(`${window.location.href}/authorized`),
        state: 1,
        scope: "user-top-read"
      };

      const qs = Object.keys(requestParameters)
        .map(key => `${key}=${requestParameters[key]}`)
        .reduce((x, y) => `${x}&${y}`);

      window.location = `https://accounts.spotify.com/authorize?${qs}`;
    }}
  >
    Accede a <Spotify />
  </SpotifyButton>
);

export default AccessButton;
