const { Builder, Capabilities, By} = require("selenium-webdriver") 

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

jest.setTimeout(90000)

beforeAll(async () => {
    await driver.get("https://www.slamonline.com/")
})

// // afterAll(async() => {
// //     await driver.quit()
// })

describe("SLAM app functionality", () => {

    it("Must authenticate via Slam subscription page", async () => {
        let modalAgree = await driver.findElement(By.xpath('//*[@id="qc-cmp2-ui"]/div[2]/div/button[3]'))
        await modalAgree.click()
        await driver.sleep(4000)

        let newsLetter = await driver.findElement(By.xpath('//*[@id="mce-EMAIL"]'))
        await newsLetter.click()
        await newsLetter.sendKeys('jackswift7@gmail.com')
        await driver.sleep(4000)

        let arrow = await driver.findElement(By.xpath('//*[@id="mc-embedded-subscribe"]'))
        await arrow.click()
        await driver.sleep(5000)

        let firstName = await driver.findElement(By.xpath('//*[@id="MERGE1"]'))
        await firstName.click()
        await firstName.sendKeys('Jake')
        await driver.sleep(4000)

        let lastName = await driver.findElement(By.xpath('//*[@id="MERGE2"]'))
        await lastName.click()
        await lastName.sendKeys('Swift')
        await driver.sleep(4000)

        let country = await driver.findElement(By.xpath('//*[@id="MERGE3"]'))
        await country.click()
        await country.sendKeys('GER')
        await driver.sleep(4000)

        let subscribe = await driver.findElement(By.xpath('//*[@id="templateBody"]/form/div[3]/input'))
        await subscribe.click()
        await driver.sleep(1000)

        let backHome = await driver.findElement(By.xpath('//*[@id="templateBody"]/a[1]'))
        await backHome.click()
        await driver.sleep(5000)


        let menu = await driver.findElement(By.xpath('//*[@id="menu-btn-inner"]/div'))
        await menu.click()
        await driver.sleep(4000)
        
    })
})