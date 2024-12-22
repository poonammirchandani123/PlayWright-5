import { test } from '@playwright/test';

// Example of `test.skip` - Skipping unconditionally
test.skip('This test is skipped', async ({ page }) => {
  await page.goto('https://example.com');
  console.log('This test will not run.');
});

// Example of `test.fail` - Marking the test as expected to fail
test.fail('This test is expected to fail', async ({ page }) => {
  await page.goto('https://example.com');
  // An intentional failing assertion
  test.expect(1).toBe(2);
});

// Example of `test.fixme` - Marking the test as incomplete
test.fixme('This test is a work in progress', async ({ page }) => {
  await page.goto('https://example.com');
  console.log('This test is marked as fixme.');
});

// Example of `test.slow` - Marking the test as slow
test.slow('This test runs slowly', async ({ page }) => {
  await page.goto('https://example.com');
  // Simulating slow behavior
  await page.waitForTimeout(5000);
  console.log('This test runs with a slower timeout.');
});

// Example of `test.skip` conditionally
test('This test runs only on chromium', async ({ page, browserName }) => {
  // Skip the test if the browser is not chromium
  test.skip(browserName !== 'chromium', 'Skipping because the browser is not chromium');
  await page.goto('https://example.com');
  console.log('This test only runs on chromium.');
});

// Example of combining annotations
test.skip('Skip with slow', async ({ page }) => {
  test.slow();
  console.log('This is skipped but would run slowly.');
});

// Example of `test.skip` in conditional logic inside the test
test('Conditional skipping inside test', async ({ page }) => {
  const shouldSkip = true;
  if (shouldSkip) test.skip('Skipping due to condition met');
  await page.goto('https://example.com');
  console.log('This test will not reach here if skipped.');
});
