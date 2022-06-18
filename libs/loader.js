export const myLoader = ({ src, width, quality }) => {
  return `https://menfess-alas.web.app/${src}?w=${width}&q=${quality || 75}`;
};
