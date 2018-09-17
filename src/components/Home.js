import React from "react";
import { tokenExpired } from "../utils";
import Hero from "./Hero";
import TopMusic from "./TopMusic";

const Home = props => {
  if (tokenExpired()) {
    return <Hero />;
  } else {
    return <TopMusic />;
  }
};

export default Home;
