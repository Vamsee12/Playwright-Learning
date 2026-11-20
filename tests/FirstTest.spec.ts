import {test, expect} from "@playwright/test";

/*

Syntax for testcase

test("Title/Name of the testcase", async({page})=>{
//step1
//step2
//step3
})

*/

//Example1:

test("Verify the title", async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
    await expect(page).toHaveTitle("Demo Web Shop");
})