import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Webcam from "react-webcam";
import Face from "./components/Face";

import { createFaceLandmarker, predictWebcam } from "./helpers/media-pipe-vision";

function App() {
  const [face, setFace] = useState(undefined);
  const webcamRef = useRef();

  // console.log(webcamRef.current);

  const updateFaceState = (positions) => {
    const { eyeLeft, eyeRight, mouth, browLeft, browRight } = positions;

    setFace({ eyeLeft, eyeRight, mouth, browLeft, browRight });
  };

  const onWebcamReady = () => {
    console.log(webcamRef.current);

    createFaceLandmarker().then((faceLandmarker) => {
      predictWebcam(faceLandmarker, webcamRef.current.video, updateFaceState);
    });
  };

  return (
    <>
      <header>
        <h1>VTUBER PARTY!</h1>
      </header>
      <main>
        {face && <Face {...face} />}
        <Webcam onUserMedia={onWebcamReady} ref={webcamRef} style={{ width: 600 }} />
      </main>
    </>
  );
}

export default App;
