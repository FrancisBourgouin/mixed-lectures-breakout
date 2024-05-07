export const checkIfWellWatered = (lastWatered, wateringInterval) => {
  const lastWateredDate = new Date(lastWatered)
  const todayDate = new Date()

  const diffInMs = todayDate.getTime() - lastWateredDate.getTime()
  const diffInS = diffInMs / 1000
  const diffInDays = diffInS / 86400

  return wateringInterval > diffInDays
}