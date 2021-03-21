import { _delay } from '../tools';

jest.useFakeTimers();

describe('test _delay', () => {
  test('throw error when type of parameter is not correct', () => {
    const fn = jest.fn();
    try {
      _delay();
    } catch (err) {
      expect(err.message).toBe('handler is expected a function');
    }
    try {
      _delay(fn, null);
    } catch (err) {
      expect(err.message).toBe('time is expected a number');
    }
  });

  test('the default value of time is 0', () => {
    const fn = jest.fn();
    _delay(fn);
    jest.advanceTimersByTime(0);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  test('delay execution by 0.5 second', () => {
    const fn = jest.fn();
    _delay(fn, 500);
    expect(fn).toHaveBeenCalledTimes(0);
    jest.advanceTimersByTime(500);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
