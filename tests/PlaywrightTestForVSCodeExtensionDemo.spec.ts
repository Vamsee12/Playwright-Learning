import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await expect(page.locator('body')).toContainText('Welcome to our store');
  await expect(page.getByRole('link', { name: 'Tricentis Demo Web Shop' })).toBeVisible();
});

/*
VSCODE RECORD vs CODEGEN - KEY DIFFERENCE

VSCode Record Button:
1. Click "Record" in VSCode extension
2. Browser opens
3. Paste URL and interact with site
4. Code is DIRECTLY written into your .ts file
5. No copy-paste needed!

Codegen Command:
1. Run: npx playwright codegen <url>
2. Browser + Inspector opens
3. Interact with site
4. Must manually COPY code from inspector
5. PASTE into your test file

BOTTOM LINE:
✅ VSCode Record = Faster (auto-writes to file)
❌ Codegen = Extra step (copy-paste required)

---

ASYNC & AWAIT - KEY POINTS

1. await only works inside an async function — you cannot use await without async, or you'll get a syntax error
2. You must mark a function async to use await inside it — they work together

ASYNC & AWAIT - REAL WORLD EXAMPLE (Making Tea)

WITHOUT await (WRONG - Fails):
boilWater();      // Started boiling...
pourWater();      // ❌ Tries to pour before water is hot!
drinkTea();       // ❌ Water wasn't ready, no tea made

WITH await (CORRECT - Works):
await boilWater();  // ⏳ WAIT for water to boil first
await pourWater();  // ✅ Now water is ready, pour it
await drinkTea();   // ✅ Now tea is made, drink it

Same in Your Test:
WITHOUT await: page.goto() starts... expect() runs immediately... FAILS (page not loaded)
WITH await: await page.goto() waits... expect() runs... PASSES (page is ready)
*/
