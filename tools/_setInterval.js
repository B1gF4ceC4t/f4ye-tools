export function _setInterval(handler, interval, delay) {
  if (typeof handler !== 'function') {
    throw new TypeError('handler is expected a function');
  }

  if (typeof interval !== 'number') {
    throw new TypeError('interval is expected a number');
  }

  if (delay === undefined) {
    delay = 0;
  }
  
  if (typeof delay !== 'number') {
    throw new TypeError('delay is expected a number');
  }

  let d = null,
    t = null,
    last;

  const loop = () => {
    last = Date.now();
    handler.call(this);
    t = setTimeout(loop, Math.max(0, interval - (Date.now() - last)));
  };

  d = setTimeout(loop, delay);

  return () => {
    d && clearTimeout(d);
    t && clearTimeout(t);
  };
}
