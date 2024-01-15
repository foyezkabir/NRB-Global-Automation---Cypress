import { RandomDataGenerator } from "../support/Page Objects/RandomInputs"
import { OnLoginPage } from "../support/Page Objects/Login-Page/login"

describe('Navigate to Menu & Sub-Menus', () => {

    const randomDataGenerator = new RandomDataGenerator()

    // Generated random data
    const randomName = randomDataGenerator.generateRandomName()
    const randomPhone = randomDataGenerator.generateRandomBDPhoneNumber()

    beforeEach('Visit the Landing page', () => {
        cy.visit('/')
    })

    it.only("Verify Login with valid email and OTP", () => {
        OnLoginPage.loginTo(randomName, randomPhone)
    })
})
