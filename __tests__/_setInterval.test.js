import { _setInterval } from '../tools';

jest.useFakeTimers();

describe('test _setInterval', () => {
  test('throw error when type of parameter is not correct', () => {
    const fn = jest.fn();
    try {
      _setInterval();
    } catch (err) {
      expect(err.message).toBe('handler is expected a function');
    }
    try {
      _setInterval(fn);
    } catch (err) {
      expect(err.message).toBe('interval is expected a number');
    }
    try {
      _setInterval(fn, 500, null);
    } catch (err) {
      expect(err.message).toBe('delay is expected a number');
    }
  });

  test('the default value of delay is 0', () => {
    const fn = jest.fn();
    const clear = _setInterval(fn, 1000);
    jest.advanceTimersByTime(0);
    expect(fn).toHaveBeenCalledTimes(1);
    clear();
  });

  test('delay execution by 0.5 second', () => {
    const fn = jest.fn();
    const clear = _setInterval(fn, 1000, 500);
    expect(fn).toHaveBeenCalledTimes(0);
    jest.advanceTimersByTime(500);
    expect(fn).toHaveBeenCalledTimes(1);
    clear();
  });

  test('the timing of executing is correct', () => {
    const fn = jest.fn();
    const clear = _setInterval(fn, 1000, 0);
    jest.advanceTimersByTime(0);
    expect(fn).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(1000);
    expect(fn).toHaveBeenCalledTimes(2);
    jest.advanceTimersByTime(8000);
    expect(fn).toHaveBeenCalledTimes(10);
    clear();
  });
});
