import React, { useState } from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";


const ContainerSlide = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 70%;
  @media screen and (min-width: 1000px) {
    flex-direction: row;
  }
  .ContainerButtons {
    display: flex;
    position: absolute;
    top: 325px;
    right: 0;
    @media screen and (min-width: 1000px) {
      top: auto;
      bottom: 0;
      right: auto;
      left: 55%;
    }
    .Button {
      width: 75px;
      height: 75px;
      background-color: black;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      cursor: pointer;

      :hover {
        background-color: gray;
      }
    }
    .Arrow {
      position: relative;
      width: 14px;
      height: 24px;
    }
  }
  .ImageSlide {
    position: relative;
    width: 100%;
    height: 400px;
    @media screen and (min-width: 1000px) {
      width: 55%;
      height: 100%;
    }
  }
  .Information {
    width: 100vw;
    padding: 6vw;
    padding-top: 6vh;
    padding-bottom: 0;
    @media screen and (min-width: 1000px) {
      width: 40%;
      height: 100%;
    }
    h1 {
      font-size: 2.5rem;
    }
    p {
      margin-top: 20px;
      font-size: 16px;
      margin-bottom: 20px;
      color: gray;
    }

    .ButtonShopNow {
      display: flex;
      align-items: center;
      cursor: pointer;
      letter-spacing: 10px;
      padding-top: 30px;
      padding-bottom: 30px;
      padding-right: 30px;
      font-weight: 600;
      margin-bottom: 50px;
      @media screen and (min-width: 1000px) {
      }
      :hover {
        color: #cacaca;
      }
      .ArrowImg {
        position: relative;
        width: 30px;
        height: 12px;
      }
    }
  }
`;

function Slider(props) {
  const content = [
    {
      src: "/desktop-image-hero-1.jpg",
      title: "Discover innovative ways to decorate",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, alias nesciunt, maiores omnis atque blanditiis pariatur vitae tempore a, distinctio ab deleniti! Beatae aperiam obcaecati eum vero nulla tenetur illum?Provident, alias nesciunt, maiores omnis atque blanditiis pariatur vitae tempore a, distinctio ab deleniti! Beatae aperiam obcaecati eum vero nulla tenetur illum?",
    },
    {
      
      src: "/desktop-image-hero-2.jpg",
      title: "We are available all across the globe",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, alias nesciunt, maiores omnis atque blanditiis pariatur vitae tempore a, em ipsum dolor sit, amet consectetur adipisicing elit. Provident, alias nesciunt, maiores omnis atque blanditiis pariatur vitae tempore a,distinctio ab deleniti! Beatae aperiam obcaecati eum vero nulla tenetur illum?",
    },

    {
      src: "/desktop-image-hero-3.jpg",
      title: "Manufactured with the best materials",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, alias nesciunt,em ipsum dolor sit, amet consectetur adipisicing elit. Provident, alias nesciunt, maiores omnis atque blanditiis pariatur vitae tempore a, maiores omnis atque blanditiis pariatur vitae tempore a, distinctio ab deleniti! Beatae aperiam obcaecati eum vero nulla tenetur illum?",
    },
  ];
  const [activeSlide, setActiveSlide] = useState(0);

  function NextSlide() {
    content.length - 1 === activeSlide
      ? setActiveSlide(0)
      : setActiveSlide(activeSlide + 1);


  }
  function BackSlide() {
    0 === activeSlide
      ? setActiveSlide(content.length - 1)
      : setActiveSlide(activeSlide - 1);
  }

  return (
    <ContainerSlide>
      <div className="ImageSlide">
        <Image src={content[activeSlide].src} layout="fill" />
      </div>
      <div className="Information">
        <h1>{content[activeSlide].title}</h1>
        <p>{content[activeSlide].text}</p>

        <a href="#" className="ButtonShopNow">
          SHOP NOW{" "}
          <div className="ArrowImg">
            <Image src="/icon-arrow.svg" layout="fill" />
          </div>
        </a>
      </div>
      <div className="ContainerButtons">
        <button className="Button" onClick={BackSlide}>
          <div className="Arrow Left">
            <Image src="/icon-angle-left.svg" layout="fill" />
          </div>
        </button>
        <button className="Button" onClick={NextSlide}>
          <div className="Arrow right">
            <Image src="/icon-angle-right.svg" layout="fill" />
          </div>
        </button>
      </div>
    </ContainerSlide>
  );
}

export default Slider;
