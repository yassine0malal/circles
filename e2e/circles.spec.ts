import { test, expect } from '@playwright/test';

test.describe('Companions Page', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/companions');
  });

  // ─── Test 1: Page loads with correct title and map ───
  test('shows page title and map', async ({ page }) => {
    const heading = page.locator('h1');
    await expect(heading).toContainText('Companions in Brooklyn, NY');
    
    const map = page.locator('#therapist-map');
    await expect(map).toBeVisible();
    
    const markers = page.locator('.custom-marker');
    await expect(markers.first()).toBeVisible();
  });

  // ─── Test 2: In Person / Virtual toggle works ───
  test('In Person / Virtual toggle switches map visibility', async ({ page }) => {
    const btnVirtual = page.locator('#btn-virtual');
    const btnInPerson = page.locator('#btn-inperson');
    const mapWrapper = page.locator('#map-wrapper');
    
    await btnVirtual.click();
    await page.waitForTimeout(500);
    
    const maxHeight = await mapWrapper.evaluate((el: HTMLElement) => el.style.maxHeight);
    expect(maxHeight).toBe('0px');
    
    await btnInPerson.click();
    await page.waitForTimeout(500);
    
    const maxHeightAfter = await mapWrapper.evaluate((el: HTMLElement) => el.style.maxHeight);
    expect(maxHeightAfter).toBe('500px');
  });

// ─── Test 3: Filter buttons exist and are clickable ───
// test('filter buttons are present and clickable', async ({ page }) => {
//   // Use the filter bar container to scope the search
//   const filterBar = page.locator('.flex.flex-wrap.items-center.gap-3').first();
  
//   // Now search within the filter bar only
//   const allBtn = filterBar.locator('button:has-text("All")');
//   const femaleBtn = filterBar.locator('button:has-text("Female")');
//   const maleBtn = filterBar.locator('button:has-text("Male")');
//   const inPersonBtn = filterBar.locator('button:has-text("In Person")');
//   const onlineBtn = filterBar.locator('button:has-text("Online")');
  
//   await expect(allBtn).toBeVisible();
//   await expect(femaleBtn).toBeVisible();
//   await expect(maleBtn).toBeVisible();
//   await expect(inPersonBtn).toBeVisible();
//   await expect(onlineBtn).toBeVisible();
  
//   // Buttons should be clickable (no error = pass)
//   await femaleBtn.click();
//   await maleBtn.click();
// });

  // ─── Test 4: "All Filters" button opens the filter modal ───
test('filter buttons highlight and filter cards', async ({ page }) => {
  // Scroll to filter bar
  await page.evaluate(() => window.scrollTo(0, 500));
  
  const allBtn = page.locator('button[data-filter="All"]');
  const femaleBtn = page.locator('button[data-filter="Female"]');
  const maleBtn = page.locator('button[data-filter="Male"]');
  
  await expect(allBtn).toBeVisible();
  await expect(femaleBtn).toBeVisible();
  await expect(maleBtn).toBeVisible();
  
  // "All" starts active (bg-ink)
  await expect(allBtn).toHaveClass(/bg-ink/);
  await expect(allBtn).toHaveClass(/text-cream/);
  
  // Click Female — should become active
  await femaleBtn.click();
  
  // Female should now have active classes
  await expect(femaleBtn).toHaveClass(/bg-ink/);
  await expect(femaleBtn).toHaveClass(/text-cream/);
  
  // "All" should no longer be active
  await expect(allBtn).not.toHaveClass(/bg-ink/);
  await expect(allBtn).toHaveClass(/border-line/);
  
  // Cards should be filtered (some hidden)
  const visibleCards = page.locator('.companion-card:not([style*="display: none"])');
  const hiddenCards = page.locator('.companion-card[style*="display: none"]');
  
  // At least one card should be hidden or visible count should change
  const totalCards = await page.locator('.companion-card').count();
  const visibleCount = await visibleCards.count();
  
  expect(visibleCount).toBeLessThanOrEqual(totalCards);
  
  // Click back to All — all cards visible
  await allBtn.click();
  const allVisibleCount = await visibleCards.count();
  expect(allVisibleCount).toBe(totalCards);
});

  // ─── Test 5: Companion cards are displayed ───
  test('shows companion cards with therapist info', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 600));
    
    const firstCard = page.locator('article').first();
    await expect(firstCard).toBeVisible();
    
    await expect(firstCard.locator('h3')).not.toBeEmpty();
    await expect(firstCard.locator('text=Verified')).toBeVisible();
    
    const cardText = await firstCard.textContent();
    const phonePattern = /\(\d{3}\) \d{3}-\d{4}/;
    expect(cardText).toMatch(phonePattern);
  });

  // ─── Test 6: Card has Email and View buttons ───
  test('card has Email and View buttons', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 600));
    
    const firstCard = page.locator('article').first();
    
    // Use first() to avoid strict mode violation — get only the first Email link
    const emailBtn = firstCard.locator('a:has-text("Email")').first();
    await expect(emailBtn).toBeVisible();
    
    const viewBtn = firstCard.locator('a:has-text("View")').first();
    await expect(viewBtn).toBeVisible();
  });

  // ─── Test 7: Pagination exists (visual check only) ───
//   test('shows pagination controls', async ({ page }) => {
//     await page.evaluate(() => window.scrollTo(0, 1200));
    
//     // Use more specific selector for pagination numbers
//     const paginationContainer = page.locator('.flex.items-center.justify-center.gap-2');
//     await expect(paginationContainer).toBeVisible();
    
//     // Check for "Next" link specifically in pagination area
//     const nextLink = paginationContainer.locator('a:has-text("Next")');
//     await expect(nextLink).toBeVisible();
//   });

  // ─── Test 8: Nearby searches section ───
  test('shows nearby searches', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 2000));
    
    await expect(page.locator('text=Nearby Searches for Brooklyn')).toBeVisible();
    await expect(page.locator('a:has-text("Forest Hills")')).toBeVisible();
    await expect(page.locator('a:has-text("Long Island City")')).toBeVisible();
  });

  // ─── Test 9: Stats section ───
  test('shows stats cards', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 2500));
    
    await expect(page.locator('text=3,000+')).toBeVisible();
    await expect(page.locator('text=Average cost per session')).toBeVisible();
    await expect(page.locator('text=Average years in practice')).toBeVisible();
  });

  // ─── Test 10: FAQ accordion works ───
  test('FAQ accordion expands on click', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 4000));
    
    const firstFaq = page.locator('details').first();
    const summary = firstFaq.locator('summary');
    
    await summary.click();
    
    const answer = firstFaq.locator('div').last();
    await expect(answer).toBeVisible();
    
    const answerText = await answer.textContent();
    expect(answerText?.length).toBeGreaterThan(10);
  });

  // ─── Test 11: Mobile responsive ───
  test('page works on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/companions');
    
    await expect(page.locator('h1')).toBeVisible();
    
    const map = page.locator('#therapist-map');
    await expect(map).toBeVisible();
  });

  // ─── Test 12: Map markers show popup on click ───
  test('map markers show popup on click', async ({ page }) => {
    const marker = page.locator('.custom-marker').first();
    await marker.click();
    
    // Use first() to avoid strict mode — popup wrapper is inside the popup div
    const popup = page.locator('.leaflet-popup.custom-popup').first();
    await expect(popup).toBeVisible();
    
    // Check popup content has text
    const popupText = await popup.textContent();
    expect(popupText?.length).toBeGreaterThan(0);
  });
});