import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import VikingV1 from "./components/VikingV1";

import Webcam from "react-webcam";
import { createFaceLandmarker, predictWebcam } from "./helpers/faceLandmarkHelpers";

function App() {
  const [count, setCount] = useState(0);

  const [rightEye, setRightEye] = useState(0);

  const [faceValues, setFaceValues] = useState({
    rightEye: 0,
    leftEye: 0,
    mouth: 0,
  });

  const webcamRef = useRef();
  console.log(webcamRef.current);

  const handleWebcamFeed = async () => {
    console.log("Webcam feed started!");
    console.log(webcamRef.current.video);

    const faceLandmark = await createFaceLandmarker();

    const updateEyeSize = (value) => setRightEye(value);

    const updateFaceValues = (rightEye, leftEye, mouth) =>
      setFaceValues({ rightEye, leftEye, mouth });

    predictWebcam(faceLandmark, webcamRef.current.video, updateFaceValues);

    // axios.get("/some/api")
  };
  return (
    <>
      {/* <VikingV1 style={{width:"10em", height:"10em"}}/> */}
      <Webcam ref={webcamRef} style={{ width: "15em" }} onUserMedia={handleWebcamFeed} />
      <div className="face">
        <div
          className="rightEye"
          style={{ scale: `${faceValues.rightEye * 100}%` }}
        ></div>
        <div className="leftEye" style={{ scale: `${faceValues.leftEye * 100}%` }}></div>
        <div className="mouth" style={{ height: `${faceValues.mouth * 100}%` }}></div>
      </div>
    </>
  );
}

export default App;
