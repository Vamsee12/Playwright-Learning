import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await expect(page.locator('body')).toContainText('Welcome to our store');
  await expect(page.getByRole('link', { name: 'Tricentis Demo Web Shop' })).toBeVisible();
});

/*
CODEGEN WORKFLOW - Simple Info

Command:
npx playwright codegen https://demowebshop.tricentis.com/

How It Works:
1. Opens Inspector Mode - Browser + Inspector panel opens
2. Records Your Actions - Click, type, navigate → auto-generates code
3. Generates Locators - Captures element selectors automatically (getByRole, getByText, etc.)
4. Adds Assertions - Add checks through the Inspector
5. Saves to File - Copy or Save the generated code

What Was Generated Above:
- await page.goto() - Navigate to URL
- await expect(page.locator('body')).toContainText() - Check text exists
- await expect(page.getByRole()).toBeVisible() - Check element visible

Pros & Cons:
✅ Fast, no manual locator writing, good for learning
❌ Generated code can be verbose, not always optimal selectors

Workflow Summary:
1. Run codegen command
2. Browser opens → perform test steps manually
3. Inspector records everything
4. Copy generated code to test file
5. Run & refine as needed
*/