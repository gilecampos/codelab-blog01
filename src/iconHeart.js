export const iconHeart = async () => {
  const response = await fetch('./src/assets/iconHeart.svg')
  const data = await response.text()
  const parser = new DOMParser()
  return parser.parseFromString(data, "image/svg+xml").documentElement;
}