import { _setInterval } from '../tools';

jest.useFakeTimers();

describe('test _setInterval', () => {
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
