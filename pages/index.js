import Menu_Header from "../components/Menu_Header";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Slider from "../components/Slider";
import DownSection from "../components/DownSection";
const App = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  height: auto;
  margin-right: auto;
  margin-left: auto;
  @media screen and (min-width: 1000px) {
    height: 100vh;
  }
`;

export default function Home() {
  return (
    <App className={styles.container}>
      <Menu_Header />
      <Slider />
      <DownSection />
    </App>
  );
}
