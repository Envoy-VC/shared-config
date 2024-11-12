import { describe, expect, it } from 'vitest';

import { hello } from '../src';

describe('hello', () => {
  it('should return hello', () => {
    expect(hello('world')).toBe('Hello world');
  });
});
