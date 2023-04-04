export const getRandom = (size) => {
  const halfSize = size / 2
  const random = halfSize - (Math.random() * size)
  return random
}
