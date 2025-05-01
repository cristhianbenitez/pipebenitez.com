export default function () {
  return {
    // Simple layout that just displays the image
    layout: 'layouts/negative.njk',
    tags: ['negative'],
    // Set default image properties
    imageOptions: {
      widths: [800, 1200, 1800],
      formats: ['webp', 'jpeg'],
      loading: 'lazy',
      decoding: 'async',
    },
  };
}
