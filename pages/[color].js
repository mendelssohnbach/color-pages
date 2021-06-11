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

export async function getStaticProps({ params }) {
  const colors = colors.find((color) => color.name === params.color);
  return { props: { color } };
}
