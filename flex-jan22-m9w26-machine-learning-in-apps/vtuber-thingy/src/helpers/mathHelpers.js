export const distanceBetweenTwo3dPoints = (point1, point2) => {
  const xDiff = point2.x - point1.x;
  const yDiff = point2.y - point1.y;
  const zDiff = point2.z - point1.z;

  const distance = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2) + Math.pow(zDiff, 2));

  return distance
};
