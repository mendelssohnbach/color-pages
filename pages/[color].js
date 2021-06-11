import colors from '../data/colors.json';

export async function getStaticPaths() {
  const paths = colors.map((color) => {
    return {
      params: {
        color: color.name,
      },
    };
  });
  return { paths, fallback: false };
}
