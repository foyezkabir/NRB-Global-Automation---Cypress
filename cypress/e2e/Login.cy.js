import { RandomDataGenerator } from "../support/Page Objects/RandomInputs"
import { OnLoginPage } from "../support/Page Objects/Login-Page/login"

describe('Navigate to Menu & Sub-Menus', () => {

    const randomDataGenerator = new RandomDataGenerator()

    beforeEach('Visit the Landing page', () => {
        cy.visit('/')
    })

    it("Verify Login with valid email and OTP", () => {
        OnLoginPage.loginTo()
    })

    it("Verify Login with invalid email and OTP", () => {
        OnLoginPage.loginTo()
    })

    it("Verify Login with valid email and invalid OTP", () => {
        OnLoginPage.loginTo()
    })
})
