import { RandomDataGenerator } from "../support/Page Objects/RandomInputs"

let data
let InboxId
let emailAddress
let emailBody
let otpCode

describe('login to the NRB Global Website', () => {
    before(() => {
        cy.fixture('loginSelectors').then(LogSel => {
            data = LogSel
        })

    })
    it("verify login", () => {

        //Visit the Landing page
        cy.visit('/')

        //Click on the Log in button
        cy.get(data.LoginButton).eq(1).should('exist').click({ multiple: true, force: true }).wait(1000)

        //Installing mailslurp: npm i -D cypress mailslurp-client
        //Provide email in the email field and send OTP
        cy.createInbox().then(inbox => {
            const InboxId = inbox.id
            emailAddress = inbox.emailAddress
            cy.get(data.emailField).should('exist').type(emailAddress).wait(1000)
            cy.wrap(InboxId).as('InboxId')
        })

        //Click Sign in button
        cy.get(data.SigninButton).should('exist').click().wait(5000)

        //OTP Reading
        cy.get('@InboxId').then(inboxId => {
            cy.waitForLatestEmail(inboxId).then(email => {
                const emailBody = email.body

                // Use regex to extract OTP. Adjust the regex pattern as per your OTP format.
                const otpRegex = /(\d{6})/; // This is for a 6-digit OTP.
                const otpMatch = emailBody.match(otpRegex)
                if (otpMatch && otpMatch.length > 0) {
                    otpCode = otpMatch[0]
                    cy.log(otpCode)

                    // Input the OTP in the field
                    cy.get(data.OTPfield).should('exist').type(otpCode).wait(1000)

                    //Click the OTP verify button
                    cy.get(data.Verify).should('exist').click().wait(4000)
                } else {
                    cy.log('OTP not found in the email body')
                }
            })

            const randomDataGenerator = new RandomDataGenerator()

            // Generated random data
            const randomName = randomDataGenerator.generateRandomName()
            const randomPhone = randomDataGenerator.generateRandomBDPhoneNumber()

            cy.get('#name').should('exist').type(randomName).wait(1000)
            cy.get('.form-control').should('exist').type(randomPhone).wait(1000)
            cy.get('[class="button-1 save-btn"]').should('exist').click()
            cy.wait(4000)
            cy.get('[class="modal-close-b"]').wait(2000).click()
        })
    })
})