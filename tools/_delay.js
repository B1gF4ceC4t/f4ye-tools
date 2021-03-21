export function _delay(handler, time) {
  if (typeof handler !== 'function') {
    throw new TypeError('handler is expected a function');
  }

  if (time === undefined) {
    time = 0;
  }

  if (typeof time !== 'number') {
    throw new TypeError('time is expected a number');
  }

  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(handler.call(this));
      }, time);
    } catch (err) {
      reject(err);
    }
  });
}
