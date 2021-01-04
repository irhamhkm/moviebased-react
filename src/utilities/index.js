export function imageUrlConstructor(path, size = 'original') {
  const store = window.sessionStorage;
  const url = store.getItem('url');
  if (!path) {
    return null;
  }
  return `${url}${size}${path}`;
}

export function preloadImages(arrImage) {
  arrImage.forEach((image) => {
    const cache = new Image();
    cache.src = image;
    window[image] = cache;
  });
}
