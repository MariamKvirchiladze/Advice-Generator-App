import mobileimg from "../assets/pattern-divider-mobile.svg";
import desktopimg from "../assets/pattern-divider-desktop.svg";
import dice from "../assets/icon-dice.svg";
import styled from "styled-components";

const AdviceContainer = (): JSX.Element => {
  return (
    <Container>
      <h5 className="title">ADVICE # 112</h5>
      <h2 className="adviceText">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.”
      </h2>
      <img className="mobile-divider" src={mobileimg} alt="divider-mobile" />
      <img className="desktop-divider" src={desktopimg} alt="divider-desktop" />
      <div className="button">
        <img src={dice} alt="dice-img" />
      </div>
    </Container>
  );
};

export default AdviceContainer;

const Container = styled.div`
  width: 343px;
  padding: 40px 24px 64px;
  background: #313a48;
  box-shadow: 30px 50px 80px rgba(0, 0, 0, 0.100202);
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  @media (min-width: 1024px) {
    width: 540px;
    padding: 48px 48px 72px;
  }

  .title {
    font-size: 11px;
    line-height: 15px;
    letter-spacing: 3.46px;
    color: #53ffaa;
    @media (min-width: 1024px) {
      font-size: 13px;
      line-height: 17.75px;
      letter-spacing: 4.09px;
    }
  }

  .adviceText {
    font-size: 24px;
    color: #cee3e9;
    line-height: 33px;
    letter-spacing: -0.257px;
    text-align: center;
    @media (min-width: 1024px) {
      font-size: 28px;
      line-height: 38.25px;
      letter-spacing: -0.3px;
      margin-bottom: 16px;
    }
  }

  .mobile-divider {
    display: block;
    @media (min-width: 1024px) {
      display: none;
    }
  }

  .desktop-divider {
    display: none;
    @media (min-width: 1024px) {
      display: block;
    }
  }

  .button {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    position: absolute;
    background-color: #53ffaa;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: -32px;
    box-shadow: 0px 0px 0px 0px #53ffaa;
    transition: box-shadow 0.3s ease-in-out;
    cursor: pointer;
  }
  @keyframes shadowAnimation {
    0% {
      box-shadow: 0px 0px 30px 5px #53ffaa;
    }
    50% {
      box-shadow: 0px 0px 40px 8px #53ffaa;
    }
    100% {
      box-shadow: 0px 0px 30px 5px #53ffaa;
    }
  }
  .button:hover {
    box-shadow: 0px 0px 30px 5px #53ffaa;
    animation: shadowAnimation 1s infinite;
  }
`;
