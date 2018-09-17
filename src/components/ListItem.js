import React from "react";
import styled from "styled-components";

const Card = styled.li`
  display: grid;
  grid-template-columns: minmax(300px, 300px) auto;
  grid-template-rows: repeat(4, 1fr);
  align-items: flex-end;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: minmax(300px, 300px);
    grid-template-rows: repeat(3, 1fr);
    align-items: baseline;
    margin-bottom: 2rem;
    box-shadow: 0 2px 10px rgba(, 0, 0, 0.25);
  }
`;

const Title = styled.h3`
  font-weight: bold;
  background: #333;
  padding: 1rem;
  font-size: 2.5rem;
  color: #f7f7f7;
  margin: 0;
  display: inline-block;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    display: block;
  }
`;

export const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 1rem;
`;

const createArtistsString = artists => {
  return artists.map(artist => artist.name).join(", ");
};

const TrackArtists = styled.p`
  margin: 0;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  color: #f7f7f7;
  display: inline-block;
  background: #8e2de2; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #4a00e0,
    #8e2de2
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #4a00e0,
    #8e2de2
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  @media (max-width: 768px) {
    font-size: 1rem;
    display: block;
  }
`;

const Position = styled.div`
  transition: all .2s;
  &::after {
    content: "${props => props.position}";
    display: block;
    position: absolute;
    background: red;
    color: #f7f7f7;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    opacity: .25;
    font-size: 1.5rem;
  }
  &:hover {
    &::after {
      opacity: 1;
    }
  }
`;

const AlbumContainer = styled(Position)`
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  grid-column: 1;
  grid-row: 1 / 5;
  @media (max-width: 768px) {
    grid-row: 1 / 4;
  }
`;

const AlbumImage = styled.img`
  object-fit: cover;
  max-width: 100%;
  width: 100%;
`;

const AlbumCover = props => {
  return (
    <AlbumContainer {...props}>
      <AlbumImage src={props.album.images[0].url} />
    </AlbumContainer>
  );
};

const TrackInfo = styled.div`
  grid-column: 2;
  grid-row: 1 / 5;
  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 4 / -1;
  }
`;

export const TrackItem = props => (
  <Card>
    <AlbumCover position={props.position + 1} album={props.item.album} />
    <TrackInfo>
      <Title>{props.item.name}</Title>
      <div />
      <TrackArtists>{createArtistsString(props.item.artists)}</TrackArtists>
    </TrackInfo>
  </Card>
);

export const ArtistItem = props => (
  <Card>
    <AlbumCover
      position={props.position + 1}
      album={{ images: props.item.images }}
    />
    <TrackInfo>
      <Title>{props.item.name}</Title>
    </TrackInfo>
  </Card>
);
