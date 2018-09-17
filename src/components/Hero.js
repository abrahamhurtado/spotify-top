import React from "react";
import bg from "../media/music.jpg";
import AccessButton from "./AccessButton";
import HeroContainer from "./HeroContainer";

const Hero = props => (
  <HeroContainer bgImage={bg}>
    <div>
      <h1>Descubre cuáles son tus artistas y canciones favoritas</h1>
      <h3>Con la ayuda de los datos de Spotify</h3>
      <AccessButton />
    </div>
  </HeroContainer>
);

export default Hero;
