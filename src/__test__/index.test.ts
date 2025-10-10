import { exampleFunction } from '../index';

describe('exampleFunction', () => {
  it('should convert string to uppercase', () => {
    const result = exampleFunction('hello');
    expect(result).toBe('HELLO');
  });

  it('should handle empty string', () => {
    const result = exampleFunction('');
    expect(result).toBe('');
  });
});

// Add your test cases here