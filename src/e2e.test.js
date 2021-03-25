import puppeteer from 'puppeteer'
const appUrlBase = 'http://localhost:3000'
let browser
let page
beforeAll(async () => {
    browser = await puppeteer.launch({})
    page = await browser.newPage()
})
describe('Todo App', () => {
    test('Task added result added to list of task', async () => {
        await page.goto(`${appUrlBase}/`)
        await page.$('[data-test="input-task"]', el => el.value = 'buy some milk');
        const taskAddBtn = await page.$('[data-test="button-add-task"]')
        const initialAllTask = await page.evaluate(() =>
            Array.from(
                document.querySelectorAll('#task-list ul li'),
                (element) => element.textContent
            )
        )
        await taskAddBtn.click()

        const afterClickAllTask = await page.evaluate(() =>
            Array.from(
                document.querySelectorAll('#task-list ul li'),
                (element) => element.textContent
            )
        )

        expect(afterClickAllTask[0]).toEqual(initialAllTask[0]);
    })
})
afterAll(() => {
    browser.close()
})