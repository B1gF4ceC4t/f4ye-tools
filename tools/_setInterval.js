export const _setInterval = (handler, interval, delay) => {
  let d = null,
    t = null,
    last;
  const loop = () => {
    last = Date.now();
    handler();
    t = setTimeout(loop, Math.max(0, interval - (Date.now() - last)));
  };
  d = setTimeout(loop, delay);
  return () => {
    d && clearTimeout(d);
    t && clearTimeout(t);
  };
};
