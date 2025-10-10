/**
 * Main entry point for your npm package.
 * 
 * Replace this placeholder with your actual implementation.
 * 
 * @example
 * // Example usage:
 * import { yourFunction } from 'your-package-name';
 * 
 * const result = yourFunction();
 */

/**
 * Example function - replace with your actual implementation
 * 
 * @param input - Description of the input parameter
 * @returns Description of the return value
 * 
 * @example
 * ```typescript
 * const result = exampleFunction('hello');
 * console.log(result); // Output: 'HELLO'
 * ```
 */
export function exampleFunction(input: string): string {
  return input.toUpperCase();
}

// Export all your public API here
export * from './types';

// If running directly (for testing)
if (require.main === module) {
  console.log('Package entry point - replace with your implementation');
  console.log('Example:', exampleFunction('hello world'));
}