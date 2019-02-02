function timeout(time, v) {
  return new Promise((resolev) => {
    setTimeout(resolev.bind(null, v), time);
  });
}