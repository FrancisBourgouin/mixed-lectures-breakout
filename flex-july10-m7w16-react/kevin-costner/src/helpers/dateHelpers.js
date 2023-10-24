export const checkIfWellWatered = (lastWatered, wateringInterval) => {
  const lastWateredDate = new Date(lastWatered);
  const todayDate = new Date();

  const diffInS = (todayDate.getTime() - lastWateredDate.getTime()) / 1000;
  const diffInDays = diffInS / 86400;

  return wateringInterval > diffInDays;
};
