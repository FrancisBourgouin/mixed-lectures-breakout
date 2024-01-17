// "mouthClose"
// "eyeWideLeft" or "eyeBlinkLeft"

export default function Face(props) {
  const { mouth, eyeLeft, eyeRight, browLeft, browRight } = props;

  const leftEyeStyle = { height: 2 + (1 - eyeLeft) * 10 + "vmin" };
  const rightEyeStyle = { height: 2 + (1 - eyeRight) * 10 + "vmin" };

  const leftBrowStyle = { top: -2 - (1 - browLeft) * 4 + "vmin" };
  const rightBrowStyle = { top: -2 - (1 - browRight) * 4 + "vmin" };

  const mouthStyle = { height: 5 + mouth * 10 + "vmin" };

  return (
    <div className="Face">
      <div className="leftEye" style={leftEyeStyle}>
        <div className="leftBrow" style={leftBrowStyle}></div>
      </div>
      <div className="rightEye" style={rightEyeStyle}>
        <div className="rightBrow" style={rightBrowStyle}></div>
      </div>
      <div className="nose"></div>
      <div className="mouth" style={mouthStyle}></div>
    </div>
  );
}
