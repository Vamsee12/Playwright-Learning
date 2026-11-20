import {test, expect} from '@playwright/test'

test('Playwright locators', async({page})=>{
    await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app.html")

    //1.getByRole() - Find by semantic role and accesible name
    /* role locators include buttons, checkboxes, headings, links, lists and tables,
    and many more and follow W3C specifications for ARIA role 
    Prefer for interactive elements like buttons, checkboxes, links, lists, headings, tables etc
    It's Playwright's recommended locator because it matches what users actually perceive(recognize). */

    const projectsLink = page.getByRole('link', {name:'Projects'})
    await expect(projectsLink).toBeVisible()
    //If any method is returning promise we need to use await

    const signinButton = page.getByRole('button',{name:'Sign In'})
    await expect(signinButton).toBeVisible()
    await signinButton.click()

    /* 2.getByText() - finds elements by the text they contain. 
    Best for non-interactive elements (paragraphs, spans, divs, labels) where 
    there's no meaningful role. */

    //page.getByText('Welcome, John! 👋'); we can write this way also
    const welcomeText = page.getByText('Welcome, John! 👋', {exact:true});
    await expect(welcomeText).toBeVisible()

    /* 3.getByLabel() - Locate a form field using its label text
    When to use - Ideal for form fields with visible Labels */

    //here we are locating email input field using its label
    const emailInputField = page.getByLabel('Email Address')
    await expect(emailInputField).toBeVisible()
    await emailInputField.fill('vamsee@getMaxListeners.com')

    /* 4.getByPlaceholder() - Locate an input using its placeholder (hint) text
    When to use - Ideal for inputs that have no label but show hint text inside the box.
    By default it matches a case-insensitive substring; use {exact:true} for the full text. */

    const searchInput = page.getByPlaceholder('Search tests...')
    await expect(searchInput).toBeVisible()
    await searchInput.fill('login')
    await expect(searchInput).toHaveValue('login')

    //Partial text also works (case-insensitive)
    const usernameInput = page.getByPlaceholder('username') //It is 'Enter your username' on the UI
    await usernameInput.fill('vamsee')

    //Exact match
    const companyEmailInput = page.getByPlaceholder('name@company.com', {exact:true})
    await companyEmailInput.fill('vamsee@company.com')

    /* 5.getByAltText() - Locate an element (mostly images) using its alt text
    When to use - Ideal for images and icons, since they have no visible text to search by.
    By default it matches a case-insensitive substring; use {exact:true} for the full text. */

    const playwrightLogo = page.getByAltText('Playwright logo')
    await expect(playwrightLogo).toBeVisible()

    //Partial text also works (case-insensitive)
    const antImage = page.getByAltText('Ant carrying') // alt="Ant carrying food"
    await expect(antImage).toBeVisible()

    //Exact match
    const appleImage = page.getByAltText('Red apple fruit', {exact:true})
    await expect(appleImage).toBeVisible()

    /* 6.getByTitle() - Locate an element using its title attribute (the tooltip text on hover)
    When to use - Ideal when the tooltip is the only thing that identifies the element.
    By default it matches a case-insensitive substring; use {exact:true} for the full text. */

    const totalRuns = page.getByTitle('Total test runs')
    await expect(totalRuns).toBeVisible()
    //Validate the count shown inside the Total Runs box
    await expect(totalRuns).toContainText('4,821')

    //Partial text also works (case-insensitive)
    const downloadButton = page.getByTitle('Download test') //title="Download test report"
    await expect(downloadButton).toBeVisible()

    //Exact match
    const failedTests = page.getByTitle('Tests failed today', {exact:true})
    await expect(failedTests).toBeVisible()
    await expect(failedTests).toContainText('217')

    /* 7.getByTestId() - Locate an element using its data-testid attribute
    When to use - Ideal when developers add test IDs, since they don't change with text or styling.
    It matches the full ID exactly and is case-sensitive.

    Things to remember:
    - The element must have the data-testid attribute. If developers haven't added it, this locator can't find it.
    - It is stable: the text or styling can change and the test ID stays the same.
    - It matches the full ID exactly and is case-sensitive (no partial match, no {exact:true} option).
    - Playwright looks for data-testid by default. If your project uses another attribute (e.g. data-qa),
      set testIdAttribute in playwright.config.ts:  use: { testIdAttribute: 'data-qa' }
    - Prefer getByRole(), getByLabel() etc. first. Use getByTestId() when they don't give a stable locator. */

    const searchBox = page.getByTestId('search-input')
    await expect(searchBox).toBeVisible()
    await searchBox.fill('login')
    await expect(searchBox).toHaveValue('login')

    const searchButton = page.getByTestId('search-button')
    await expect(searchButton).toBeVisible()
    await searchButton.click()

    //Validate the text of an element found by test ID
    const testCount = page.getByTestId('test-count')
    await expect(testCount).toHaveText('Tests: 142')

})