import AudioControls from "../components/audioControls/audioControls";
import CircleAnim from "../components/circleAnim/circleAnim";
import Header from "../components/header/Header";
import TextContent from "../components/textContent/textContent";
import "../styles/main.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <Header />
        <CircleAnim />
        <TextContent />
        <AudioControls />
      </div>
    </>
  );
};
export default Home;
