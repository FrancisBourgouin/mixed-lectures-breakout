// Copyright 2023 The MediaPipe Authors.

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//      http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as vision from "@mediapipe/tasks-vision";
const { FaceLandmarker, FilesetResolver } = vision;

// Before we can use HandLandmarker class we must wait for it to finish
// loading. Machine Learning models can be large and take a moment to
// get everything needed to run.
export async function createFaceLandmarker() {
  let faceLandmarker;
  let runningMode = "VIDEO";

  const filesetResolver = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm"
  );
  faceLandmarker = await FaceLandmarker.createFromOptions(filesetResolver, {
    baseOptions: {
      modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
      delegate: "GPU",
    },
    outputFaceBlendshapes: true,
    runningMode,
    numFaces: 1,
  });

  return faceLandmarker;
}

/********************************************************************
// Demo: Continuously grab image from webcam stream and detect it.
********************************************************************/

let lastVideoTime = -1;
let results = undefined;

export async function predictWebcam(faceLandmarker, video, action) {
  // Now let's start detecting the stream.

  let startTimeMs = performance.now();

  if (lastVideoTime !== video.currentTime) {
    lastVideoTime = video.currentTime;
    results = faceLandmarker.detectForVideo(video, startTimeMs);
  }

  if (results.faceBlendshapes[0]) {
    // "mouthClose"
    // "eyeWideLeft" or "eyeBlinkLeft"
    const mouth = results.faceBlendshapes[0].categories.find(
      (category) => category.categoryName === "jawOpen"
    ).score;
    const eyeLeft = results.faceBlendshapes[0].categories.find(
      (category) => category.categoryName === "eyeBlinkLeft"
    ).score;
    const eyeRight = results.faceBlendshapes[0].categories.find(
      (category) => category.categoryName === "eyeBlinkRight"
    ).score;
    const browRight = results.faceBlendshapes[0].categories.find(
      (category) => category.categoryName === "browDownRight"
    ).score;
    const browLeft = results.faceBlendshapes[0].categories.find(
      (category) => category.categoryName === "browDownLeft"
    ).score;

    ("browDownLeft");
    console.log(results.faceBlendshapes[0]);
    action({ mouth, eyeLeft, eyeRight, browLeft, browRight });
  }

  // Call this function again to keep predicting when the browser is ready.
  if (true) {
    window.requestAnimationFrame(() => predictWebcam(faceLandmarker, video, action));
  }
}
