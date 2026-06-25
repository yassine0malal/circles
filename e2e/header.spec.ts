import { describe, it, expect } from 'vitest';

function createMegaMenu() {
  let activeIndex = -1;
  return {
    open: (i: number) => { activeIndex = i; },
    close: () => { activeIndex = -1; },
    isOpen: (i: number) => activeIndex === i,
  };
}

describe('Mega Menu', () => {
  it('opens when triggered', () => {
    const menu = createMegaMenu();
    menu.open(2);
    expect(menu.isOpen(2)).toBe(true);
    expect(menu.isOpen(1)).toBe(false);
  });

  it('closes when toggled again', () => {
    const menu = createMegaMenu();
    menu.open(2);
    menu.close();
    expect(menu.isOpen(2)).toBe(false);
  });
});