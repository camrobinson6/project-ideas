const { Builder, Capabilities, By} = require("selenium-webdriver") 

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

jest.setTimeout(100000)

beforeAll(async () => {
    await driver.get("https://www.nike.com/")
})

afterAll(async() => {
    await driver.quit()
})

describe("NIKE app functionality", () => {
    //the modal is the first thing to test on the page to make sure testing is correct
        it("Must authenticate the Jordan page", async () => {
            
            let jordanLogo = await driver.findElement(By.xpath('//*[@id="gen-nav-commerce-header-v2"]/div[3]/div[1]/div/ul/li[1]/a'))
            await jordanLogo.click()
            await driver.sleep(4000)

            let jordanCom = await driver.findElement(By.xpath('//*[@id="debfdce8-2b07-4728-a361-405a9c3804a6"]/div/div/div/nav/div[1]/ul/li[3]/a'))
            await jordanCom.click()
            await driver.sleep(3000)
        })

        it("Test the New Release page", async () => {

            let newRelease = await driver.findElement(By.xpath('//*[@id="gen-nav-commerce-header-v2"]/div[3]/header/div/div[1]/div[2]/nav/div[2]/ul/li[1]/a'))
            await newRelease.click()
            await driver.sleep(3000)
        })

        it("Test the Nike Men's page", async () => {

            let mensPage = driver.findElement(By.xpath('//*[@id="gen-nav-commerce-header-v2"]/div[3]/header/div/div[1]/div[2]/nav/div[2]/ul/li[2]/a'))
            await mensPage.click()
            await driver.sleep(2000)
         })

        it("Test the Nike Women's page", async () => {

            let womensPage = driver.findElement(By.xpath('//*[@id="gen-nav-commerce-header-v2"]/div[3]/header/div/div[1]/div[2]/nav/div[2]/ul/li[3]/a'))
            await womensPage.click()
            await driver.sleep(2000)

        })
        it("Test the Nike Kid's page", async () => {

            let kidsPage = driver.findElement(By.xpath('//*[@id="gen-nav-commerce-header-v2"]/div[3]/header/div/div[1]/div[2]/nav/div[2]/ul/li[4]/a'))
            await kidsPage.click()
            await driver.sleep(2000)
        })

        it("Test the Search bar works", async () => {

            let search = driver.findElement(By.xpath('//*[@id="VisualSearchInput"]'))
            await search.click()
            await search.sendKeys('Huaraches')
            await driver.sleep(2000)
        })

        it("Test the About page", async () => {

            let aboutBtn = driver.findElement(By.xpath('//*[@id="gen-nav-footer"]/footer/div/div[1]/div[1]/div/div[3]/div/ul/li[2]/a'))
            await aboutBtn.click()
            await driver.sleep(4000)
        })
    })