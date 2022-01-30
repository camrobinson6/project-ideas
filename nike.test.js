const { Builder, Capabilities, By} = require("selenium-webdriver") 

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

jest.setTimeout(100000) //max timeout for test to run

beforeAll(async () => {
    await driver.get("https://www.nike.com/")
})

afterAll(async() => {
    await driver.quit()
})

describe("NIKE app functionality", () => {
    //the modal is the first thing to test on the page to make sure testing is correct
        it("Must authenticate the Jordan page", async () => {
    //testing the jordan logo button        
            let jordanLogo = await driver.findElement(By.xpath('//*[@id="gen-nav-commerce-header-v2"]/div[3]/div[1]/div/ul/li[1]/a'))
            await jordanLogo.click() //this is where I click on the button when testing
            await driver.sleep(4000) //this how long the test waits before performing task
    //testing the jordan community 
            let jordanCom = await driver.findElement(By.xpath('//*[@id="debfdce8-2b07-4728-a361-405a9c3804a6"]/div/div/div/nav/div[1]/ul/li[3]/a'))
            await jordanCom.click() //this is where I click on the button when testing
            await driver.sleep(3000) //this how long the test waits before performing task
        })

        it("Test the New Release page", async () => {
    //testing the new release page
            let newRelease = await driver.findElement(By.xpath('//*[@id="gen-nav-commerce-header-v2"]/div[3]/header/div/div[1]/div[2]/nav/div[2]/ul/li[1]/a'))
            await newRelease.click() //this is where I click on the button when testing
            await driver.sleep(3000) //this how long the test waits before performing task
        })

        it("Test the Nike Men's page", async () => {
    //testing the nike mens page
            let mensPage = driver.findElement(By.xpath('//*[@id="gen-nav-commerce-header-v2"]/div[3]/header/div/div[1]/div[2]/nav/div[2]/ul/li[2]/a'))
            await mensPage.click() //this is where I click on the button when testing
            await driver.sleep(2000) //this how long the test waits before performing task
         })

        it("Test the Nike Women's page", async () => {
    //testing the Womens page
            let womensPage = driver.findElement(By.xpath('//*[@id="gen-nav-commerce-header-v2"]/div[3]/header/div/div[1]/div[2]/nav/div[2]/ul/li[3]/a'))
            await womensPage.click() //this is where I click on the button when testing
            await driver.sleep(2000) //this how long the test waits before performing task

        })
        it("Test the Nike Kid's page", async () => {

            let kidsPage = driver.findElement(By.xpath('//*[@id="gen-nav-commerce-header-v2"]/div[3]/header/div/div[1]/div[2]/nav/div[2]/ul/li[4]/a')) //testing the kids page
            await kidsPage.click() //this is where I click on the button when testing
            await driver.sleep(2000) //this how long the test waits before performing task
        })

        it("Test the Search bar works", async () => {
    //testing the search bar input
            let search = driver.findElement(By.xpath('//*[@id="VisualSearchInput"]'))
            await search.click() //this is where I click on the button when testing
            await search.sendKeys('Huaraches') //this testing is when you search you input "huaraches"
            await driver.sleep(2000) //this how long the test waits before performing task
        })

        it("Test the About page", async () => {
    //testing the about me button
            let aboutBtn = driver.findElement(By.xpath('//*[@id="gen-nav-footer"]/footer/div/div[1]/div[1]/div/div[3]/div/ul/li[2]/a'))
            await aboutBtn.click() //this is where I click on the button when testing
            await driver.sleep(4000) //this how long the test waits before performing task
        })
    })