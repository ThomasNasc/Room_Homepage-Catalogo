import React from "react";
import Image from "next/image";
import styled from "styled-components";
const Footer = styled.div`
  display: flex;
  height: 30%;
  flex-direction: column;
  @media screen and (min-width: 1000px) {
    flex-direction: row;
  }
  .Info {
    width: 100%;
    padding: 6vw;
    /* height: 300px; */
    padding-top: 6vh;
    padding-bottom: 6vh;
    p {
      color: gray;
      font-size: 1rem;
    }
    h2 {
      font-size: 1.5rem;
      letter-spacing: 3px;
      margin-bottom: 10px;
    }

    @media screen and (min-width: 1000px) {
      width: 50%;
      height: auto;
    }
  }
  .AboutImage {
    width: 100%;
    height: 300px;
    position: relative;
    @media screen and (min-width: 1000px) {
      width: 25%;
      height: 100%;
    }
  }
`;
function DownSection(props) {
  return (
    <Footer>
      <div className="AboutImage Dark">
        <Image src={"/image-about-dark.jpg"} layout="fill" />
      </div>
      <div className="Info">
        <h2>ABOUT OUR FURNITURE</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero
          voluptatum obcaecati non, totam, accusamus repudiandae sit nobis
          accusantium magnam assumenda eius error natus, ab nemo molestiae porro
          provident dolorem? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ut vero voluptatum obcaecati non, totam, accusamus repudiandae
          pro
        </p>
      </div>
      <div className="AboutImage Light">
        <Image src={"/image-about-light.jpeg"} layout="fill" />
      </div>
    </Footer>
  );
}

export default DownSection;
