import { merge } from './merge';

describe('merge()', () => {
  it('should return sorted ascending array', () => {
    const result = merge([5, 3, 1], [2, 4, 6], [1, 3, 7]);
    expect(result).toEqual([1, 1, 2, 3, 3, 4, 5, 6, 7]);
  });

  it('should handle empty arrays', () => {
    const result = merge([], [], []);
    expect(result).toEqual([]);
  });

  it('should handle negative numbers', () => {
    const result = merge([3, 0, -3], [-2, 1, 4], [-1, 2, 5]);
    expect(result).toEqual([-3, -2, -1, 0, 1, 2, 3, 4, 5]);
  });
});