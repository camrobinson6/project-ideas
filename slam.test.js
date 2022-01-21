const { Builder, Capabilities, By} = require("selenium-webdriver") 

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

jest.setTimeout(100000)

beforeAll(async () => {
    await driver.get("https://www.slamonline.com/")
})

afterAll(async() => {
await driver.quit()

})

describe("SLAM app functionality", () => {

    it("Must authenticate via Slam News page", async () => {
        let modalAgree = await driver.findElement(By.xpath('//*[@id="qc-cmp2-ui"]/div[2]/div/button[3]'))
        await modalAgree.click()
        await driver.sleep(4000)
    })
    it("The Menu dropdown works", async () => {

        let menu = await driver.findElement(By.xpath('//*[@id="menu-btn-inner"]/div'))
        await menu.click()
        await driver.sleep(2000)

        let cross = await driver.findElement(By.xpath('//*[@id="menu-btn-inner"]/div'))
        await cross.click()
        await driver.sleep(2000)
    })
    it("Authenticate NBA News", async () => {

        let secMenu = await driver.findElement(By.xpath('//*[@id="menu-btn-inner"]/div'))
        await secMenu.click()
        await driver.sleep(2000)

        let news = await driver.findElement(By.xpath('//*[@id="menu-item-719221"]'))
        await news.click()
        await driver.sleep(2000)

        let nba = driver.findElement(By.xpath('//*[@id="menu-item-719222"]/a'))
        await nba.click()
        await driver.sleep(2000)

        let loadMore = driver.findElement(By.xpath('//*[@id="ajax-load-more"]/div[2]/button'))
        await loadMore.click()
        await driver.sleep(2000)

    })
    it("Must authenticate College baskeball page", async () => {
        
        let thirdMenu = await driver.findElement(By.xpath('//*[@id="menu-btn-inner"]/div'))
        await thirdMenu.click()
        await driver.sleep(2000)

        let newsTwo = await driver.findElement(By.xpath('//*[@id="menu-item-719221"]'))
        await newsTwo.click()
        await driver.sleep(2000)

        let cbk = await driver.findElement(By.xpath('//*[@id="menu-item-719224"]/a'))
        await cbk.click()
        await driver.sleep(2000)

        let loadMoretwo = driver.findElement(By.xpath('//*[@id="ajax-load-more"]/div[2]/button'))
        await loadMoretwo.click()
        await driver.sleep(2000)
})
    it("Must authenticate WNBA page", async () => {
        
        let forthMenu = await driver.findElement(By.xpath('//*[@id="menu-btn-inner"]/div'))
        await forthMenu.click()
        await driver.sleep(2000)

        let newsTri = await driver.findElement(By.xpath('//*[@id="menu-item-719221"]'))
        await newsTri.click()
        await driver.sleep(2000)

        let wnba = await driver.findElement(By.xpath('//*[@id="menu-item-719223"]/a'))
        await wnba.click()
        await driver.sleep(2000)

        let loadMoretri = driver.findElement(By.xpath('//*[@id="ajax-load-more"]/div[2]/button'))
        await loadMoretri.click()
        await driver.sleep(2000)
})
    it("Must authenticate the Features page", async () => {

        let fivMenu = await driver.findElement(By.xpath('//*[@id="menu-btn-inner"]/div'))
        await fivMenu.click()
        await driver.sleep(2000)

        let feature = await driver.findElement(By.xpath('//*[@id="menu-item-721479"]/a'))
        await feature.click()
        await driver.sleep(2000)

        let featureMore = await driver.findElement(By.xpath('//*[@id="ajax-load-more"]/div[2]/button'))
        await featureMore.click()
        await driver.sleep(2000)
})
    it("Must authenticate the Covers page", async () => {

        let sixMenu = await driver.findElement(By.xpath('//*[@id="menu-btn-inner"]/div'))
        await sixMenu.click()
        await driver.sleep(2000)

        let covers = await driver.findElement(By.xpath('//*[@id="menu-item-719236"]/a'))
        await covers.click()
        await driver.sleep(17000)

      
})
    })