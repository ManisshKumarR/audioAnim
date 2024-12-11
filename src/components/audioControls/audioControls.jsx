import { Mic, Description } from "@mui/icons-material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import "./audioControls.css";
const AudioControls = () => {
  return (
    <div className="audio-controls">
      <div>
        <button className="audio-btn">
          <VolumeUpIcon />
        </button>
      </div>
      <div>
        <button className="audio-btn">
          <Mic />
        </button>
        <p>hold to speak</p>
      </div>
      <div>
        <button className="audio-btn">
          <Description />
        </button>
      </div>
    </div>
  );
};
export default AudioControls;
