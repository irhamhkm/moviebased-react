export function imageUrlConstructor(path, size = 'original') {
  const store = window.sessionStorage;
  const url = store.getItem('url');
  return `${url}${size}${path}`;
}
