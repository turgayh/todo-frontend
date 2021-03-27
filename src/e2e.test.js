import puppeteer from 'puppeteer'
const appUrlBase = 'http://localhost:3000'
let browser
let page
beforeAll(async () => {
    browser = await puppeteer.launch({})
    page = await browser.newPage()
})
describe('Todo App', () => {
    test('Added new  task to empty task list successfully', async () => {
        const newTask = "buy some milk";

        await page.goto(`${appUrlBase}/`)
        await page.waitForSelector('.input-form');
        await page.click("input[name=input-task]");
        await page.type("input[name=input-task]", newTask);
        await page.click("button[name=button-add-task]");
        const task = await page.$eval('.todo', elem => elem.innerHTML)
        expect(task).toEqual(newTask);
    })

    test('Added new task to non-empty task list successfully', async () => {
        const firstTask = "buy some milk";
        const secondTask = "buy some milk 2";

        await page.goto(`${appUrlBase}/`)
        await page.waitForSelector('.input-form');
        await page.click("input[name=input-task]");
        await page.type("input[name=input-task]", firstTask);
        await page.click("button[name=button-add-task]");
        await page.click("input[name=input-task]");
        await page.type("input[name=input-task]", secondTask);
        await page.click("button[name=button-add-task]");
        const task = await page.$eval('.todo:nth-child(2)', elem => elem.innerHTML)
        expect(task).toEqual(secondTask);

    })
})
afterAll(() => {
    browser.close()
})