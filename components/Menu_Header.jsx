import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";

const Menu = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  width: 100vw;
  z-index: 1;
  height: 150px;
  .Logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

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
    display: ${(props) => (props.openedMenu ? "flex" : "none")};
    position: absolute;
    top: 0;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 100%;
    transition: 1s;
    justify-content: space-between;
    @media screen and (min-width: 850px) {
      display: flex;
      background-color: transparent;
      left: 200px;
      top: -5px;
      color: white;
      justify-content: start;
      width: auto;
    }
    .Opcoes{
        display: flex;
    }
    a {
      display: flex;
      width: 7vw;
      min-width: 80px;
      font-weight: 600;
      height: 100px;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      :hover {
        text-decoration: underline;
        text-underline-offset: 10px;
      }
      @media screen and (max-width: 850px) {
    width: 20vw;
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
          onClick={() => setOpenedMenu(true)}
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
            onClick={() => setOpenedMenu(false)}
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
