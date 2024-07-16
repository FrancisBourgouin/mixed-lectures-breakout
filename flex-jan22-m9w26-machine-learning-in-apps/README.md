# Machine Learning in the browser!

## Vtuber thingy React!

Vtuber part
- Make sure to show the SVG properly
- Able to animate the eye and the mouth

Webcam capture
- navigator.getUserMedia()
- react-webcam w/ onUserMedia
- reference the feed (useRef => Almost like useState, without the rerender)

FaceLandmark Recognition
- Fetch the model/tensorflow
- Feed it the webcam feed, and in exchange receive the face data
- Match the face data to the vtuber svg