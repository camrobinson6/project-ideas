const { Builder, Capabilities, By} = require("selenium-webdriver") 

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

jest.setTimeout(30000)

beforeAll(async () => {
    await driver.get("https://www.nike.com/")
})

afterAll(async() => {
    await driver.quit()
})