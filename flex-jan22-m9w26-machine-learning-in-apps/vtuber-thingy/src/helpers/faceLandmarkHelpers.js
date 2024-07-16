import vision from "@mediapipe/tasks-vision";
import { distanceBetweenTwo3dPoints } from "./mathHelpers";
const { FaceLandmarker, FilesetResolver } = vision;

let lastVideoTime = -1;
let results = undefined;

export const createFaceLandmarker = async () => {
  const filesetResolver = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm"
  );
  const faceLandmarker = await FaceLandmarker.createFromOptions(filesetResolver, {
    baseOptions: {
      modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
      delegate: "GPU",
    },
    outputFaceBlendshapes: true,
    runningMode: "VIDEO",
    numFaces: 1,
  });

  return faceLandmarker;
}

export const predictWebcam = async (faceLandmarker, video, callback) => {
  // Now let's start detecting the stream.

  let startTimeMs = performance.now();

  if (lastVideoTime !== video.currentTime) {
    lastVideoTime = video.currentTime;
    results = faceLandmarker.detectForVideo(video, startTimeMs);
  }
  if (results && results.faceLandmarks && results.faceLandmarks[0]) {
    // console.log(results.faceLandmarks[0])
    const face = results.faceLandmarks[0]
    const topRightEye = face[159]
    const bottomRightEye = face[145]
    const rightEyeDistance = distanceBetweenTwo3dPoints(topRightEye, bottomRightEye)
    const normalizedrightEyeDistance = (Math.round(rightEyeDistance * 1000) - 5) / 20

    const topLeftEye = face[386]
    const bottomLeftEye = face[374]
    const leftEyeDistance = distanceBetweenTwo3dPoints(topLeftEye, bottomLeftEye)
    const normalizedLeftEyeDistance = (Math.round(leftEyeDistance * 1000) - 5) / 20


    const topMouth = face[13]
    const bottomMouth = face[14]
    const mouthDistance = distanceBetweenTwo3dPoints(topMouth, bottomMouth)
    const normalizedMouthDistance = Math.round(mouthDistance * 1000) / 80

    callback(normalizedrightEyeDistance, normalizedLeftEyeDistance, normalizedMouthDistance)
  }

  // Call this function again to keep predicting when the browser is ready.
  // if (webcamRunning === true) {
    window.requestAnimationFrame(() => predictWebcam(faceLandmarker, video, callback));
  // }
}
