import styled from "styled-components";

const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${props => (props.bgImage ? `url(${props.bgImage})` : "none")};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    text-align: center;
    h1,
    h3 {
      color: #fff;
      font-weight: bold;
      margin-bottom: 1rem;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
    }
  }
  &::before {
    display: block;
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      270deg,
      rgba(45, 156, 219, 0.32) 0%,
      rgba(63, 43, 150, 0.74) 100%
    );
  }
`;

export default HeroContainer;
