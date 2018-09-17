import React, { Component } from "react";
import styled from "styled-components";
import bg from "../media/music2.jpg";
import ArtistList from "./ArtistsList";
import TrackList from "./TracksList";
// import MusicList from "./MusicList";

const MainBackground = styled.div`
  width: 100%;
  min-height: 100vh;
  background: rgba(34, 193, 195, 0.5),
    ${props => (props.bgImage ? `url(${props.bgImage})` : "none")};
  background: -webkit-linear-gradient(
      to right,
      rgba(253, 187, 45, 0.5),
      rgba(34, 193, 195, 0.5)
    ),
    ${props => (props.bgImage ? `url(${props.bgImage})` : "none")};
  background: linear-gradient(
      to right,
      rgba(253, 187, 45, 0.5),
      rgba(34, 193, 195, 0.5)
    ),
    ${props => (props.bgImage ? `url(${props.bgImage})` : "none")};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainText = styled.h2`
  color: #fff;
  font-size: 2.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Button = styled.button`
  width: 40%;
  padding: 0.75rem 1rem;
  border: 0;
  font-weight: bold;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.5);
  }
`;

const OptionButton = styled(Button)`
  background: ${props =>
    props.primary
      ? "linear-gradient(to right, #fd746c, #ff9068);"
      : "linear-gradient(to right, #6a3093, #a044ff);"};
`;

export default class TopMusic extends Component {
  state = {
    mode: "artists"
  };
  changeMode = mode => {
    if (mode === "artists" || mode === "tracks") {
      this.setState({ mode });
    }
  };
  render() {
    return (
      <MainBackground bgImage={bg}>
        <MainText>Elige lo que quieres conocer</MainText>
        <ButtonContainer>
          <OptionButton primary onClick={() => this.changeMode("artists")}>
            Top artistas favoritos
          </OptionButton>
          <OptionButton onClick={() => this.changeMode("tracks")}>
            Top canciones
          </OptionButton>
        </ButtonContainer>
        {this.state.mode === "artists" ? (
          <ArtistList />
        ) : this.state.mode === "tracks" ? (
          <TrackList />
        ) : null}
      </MainBackground>
    );
  }
}
