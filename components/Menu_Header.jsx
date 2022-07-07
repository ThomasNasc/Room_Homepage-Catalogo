import Image from "next/image";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
const Opacity = keyframes`
  0%{opacity: 0}
  100%{opacity: 1}
`;
const Blink = keyframes`
  0%{background-color: #4644446a}
  100%{background-color: transparent}
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  width: 100vw;
  z-index: 1;
  height: 150px;
  .Logo {
    padding: 30px;
    padding-bottom: 25px;
    border-radius: 15px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    animation: alternate infinite 1s ${Blink};
    @media screen and (min-width: 850px) {
      left: 120px;
    }
  }
  .Icon {
    margin-left: 15px;
    padding: 20px;
    @media screen and (min-width: 850px) {
      display: none;
    }
  }

  .menuOptions {
    display: ${(props) => (props.openedMenu ? "none" : "flex")};
    position: absolute;
    top: 0;
    align-items: center;
    background-color: #ffffff;
    width: 100%;
    height: 100%;
    transition: 1s;
    justify-content: space-between;
    animation: normal 1s ${Opacity};

    @media screen and (min-width: 850px) {
      display: flex;
      background-color: transparent;
      left: 200px;
      top: -5px;
      color: white;
      justify-content: start;
      width: auto;
    }
    .Opcoes {
      display: flex;
    }
    a {
      display: flex;
      width: 7vw;
     
      font-weight: 600;
      height: 80px;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      background-color: #36353547;
      border-radius: 5px;
      margin-right: 10px;
   -webkit-tap-highlight-color: transparent;
      :hover {
        text-decoration: underline;
        text-underline-offset: 10px;
      }
      @media screen and (max-width: 850px) {
        width: 15vw;
        background-color: transparent;
      }
    }
  }
`;
function Menu_Header(props) {
  const [openedMenu, setOpenedMenu] = useState(true);
  return (
    <Menu openedMenu={openedMenu}>
      <div className="Icon Open">
        <Image
          layout="fixed"
          width={"20px"}
          onClick={() => setOpenedMenu(!openedMenu)}
          height={"20px"}
          src={"/icon-hamburger.svg"}
        />
        
      </div>
      <div className="Logo">
        <Image
          layout="fixed"
          width={"80px"}
          height={"20px"}
          src={"/logo.svg"}
        />
      </div>

      <div className="menuOptions">
        <div className="Icon Close">
          <Image
            className="Icon Close"
            layout="fixed"
            width={"20px"}
            onClick={() => setOpenedMenu(!openedMenu)}
            height={"20px"}
            src={"/icon-close.svg"}
          />
        </div>
        <div className="Opcoes">
          <a>home</a>
          <a>shop</a>
          <a>about</a>
          <a>contact</a>
        </div>
      </div>
    </Menu>
  );
}

export default Menu_Header;
