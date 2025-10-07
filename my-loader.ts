export default function localLoader({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality?: number
}) {
  // Pokud je src relativní cesta, přidej base URL
  if (src.startsWith('/')) {
    return src
  }
  
  // Pokud je src import z /public nebo _next/static
  return src
}