export const formatSeconds = (num: number) => {
  const hours = Math.floor(num / 3600)
  const minutes = Math.floor(num / 60) - hours * 60
  const seconds = num - minutes * 60 - hours * 60 * 60

  const zeroResolver = (num: number) => (num < 10 ? "0" + num : num)

  if (hours == 0) return `${zeroResolver(minutes)}:${zeroResolver(seconds)}`

  return `${hours}:${zeroResolver(minutes)}:${zeroResolver(seconds)}`
}
