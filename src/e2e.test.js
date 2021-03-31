import puppeteer from 'puppeteer'
import { uuidv4 } from './utils/common'
const appUrlBase = 'http://localhost:3000'
let browser
let page



beforeAll(async () => {
    browser = await puppeteer.launch({})
    page = await browser.newPage()
})
describe('Todo App', () => {

    test('Added new task to task list successfully', async () => {
        const firstTask = uuidv4();
        const secondTask = uuidv4();

        await page.goto(`${appUrlBase}/`)
        await page.waitForSelector('.input-form');
        await page.click("input[name=input-task]");
        await page.type("input[name=input-task]", firstTask);
        await page.click("button[name=button-add-task]");
        await page.click("input[name=input-task]");
        await page.type("input[name=input-task]", secondTask);
        await page.click("button[name=button-add-task]");
        await new Promise(r => setTimeout(r, 2000));
        const tasks = await page.evaluate(() => {
            return document.querySelector('.todo:last-child').textContent
        });
        expect(tasks).toEqual(secondTask);

    })
})
afterAll(() => {
    browser.close()

})