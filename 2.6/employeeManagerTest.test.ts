import {Builder,By, Capabilities, until, WebDriver, } from "selenium-webdriver";
const chromedriver = require("chromedriver");
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

class employeePage {
    driver: WebDriver;
    url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";
    //FILL OUT LOCATORS CONSTRUCTOR AND METHODS IN ORDER TO PASS THE TEST
    header: By = By.css('.titleText'); 
    addEmployee: By = By.name('addEmployee'); 
    newEmployee: By = By.name('employee11'); 
    nameInput: By = By.name('nameEntry'); 
    phoneInput: By = By.name('phoneEntry'); 
    titleInput: By = By.name('titleEntry'); 

    constructor(driver: WebDriver) {
        this.driver = driver; 
    }; 
    async navigate() {
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.header)) 
    }; 
/*      async getElement(elementBy: By):Promise<Element> {
        await this.driver.wait(until.elementLocated(elementBy)); 
        let element = await this.driver.findElement(elementBy); 
        await this.driver.wait(until.elementIsVisible(element)); 
        return element; 
    };
    async sendKeys(elementBy:By, keys:any) {
        await this.driver.wait(until.elementLocated(elementBy)); 
        return this.driver.findElement(elementBy).sendKeys(keys); 
    }; 
    async setInput(elementBy:By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy); 
        await input.clear(); 
        return input.sendKeys(keys); 
    }; 
    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy)); 
        return (await this.driver.findElement(elementBy)).click();
    }; 
    async getText(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy)); 
        return this.driver.findElement(elementBy).getText(); 
    }; */
};

const emPage = new employeePage(driver); 
    describe("Employee Manager Test", () => {
        beforeEach(async () => {
            await emPage.navigate();
        });
        afterAll(async () => {
            await driver.quit()
        })
        test("adding an employee", async () => {
            await driver.findElement(emPage.addEmployee).click()
            await driver.findElement(emPage.newEmployee).click()
            await driver.findElement(emPage.nameInput).click()
            await driver.findElement(emPage.nameInput).clear()
            await driver.findElement(emPage.nameInput).sendKeys("John Dutton")
            await driver.findElement(emPage.phoneInput).click()
            await driver.findElement(emPage.phoneInput).clear()
            await driver.findElement(emPage.phoneInput).sendKeys("1234567891")
            await driver.findElement(emPage.titleInput).click()
            await driver.findElement(emPage.titleInput).clear()
            await driver.findElement(emPage.titleInput).sendKeys("COO"); 
        });
    });

  /* this is a commment */