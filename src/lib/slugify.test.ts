// src/lib/slugify.test.ts
import { describe, it, expect } from 'vitest';
import { slugify } from './slugify';

// Group related tests together
describe('slugify', () => {
  // Test 1: the happy path
  it('converts a normal name to a slug', () => {
    // Arrange: nothing needed here, input is simple
    const input = 'Art Kosmopoulos';

    // Act: call the function
    const result = slugify(input);

    // Assert: check the output matches expectation
    expect(result).toBe('art-kosmopoulos');
  });

  // Test 2: edge case — multiple spaces
  it('collapses multiple spaces into single hyphens', () => {
    const input = 'Dr.  Jane   Doe';
    const result = slugify(input);
    expect(result).toBe('dr-jane-doe');
  });

  // Test 3: edge case — special characters
  it('removes special characters', () => {
    const input = 'Alex (PhD) Shiflett!';
    const result = slugify(input);
    expect(result).toBe('alex-phd-shiflett');
  });
});