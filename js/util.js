function timeout(time) {
  return new Promise((resolev) => {
    setTimeout(() => {
      resolev();
    }, time);
  });
}