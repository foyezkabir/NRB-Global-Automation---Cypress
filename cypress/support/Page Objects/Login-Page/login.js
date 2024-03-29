//import { RandomDataGenerator } from "../support/Page Objects/RandomInputs"

let InboxId
let emailAddress
let emailBody
let otpCode

export class loginpage {
    loginTo(Name, Phone) {

        //Visit the Landing page
        cy.visit('/')

        //Click on the Log in button
        cy.get('[class="right-btn-a login-btn"]').should('exist').click().wait(1000)

        //Installing mailslurp: npm i -D cypress mailslurp-client
        //Provide email in the email field and send OTP
        cy.createInbox().then(inbox => {
            const InboxId = inbox.id
            emailAddress = inbox.emailAddress
            cy.get('[placeholder="Enter your email address"]').should('exist').type(emailAddress).wait(1000)
            cy.wrap(InboxId).as('InboxId')
        })

        //Click Sign in button
        cy.get('[class="button-1 mt-10 w-100"]').should('exist').click().wait(5000)

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
                    cy.get('[placeholder="Paste or type sign in code"]').should('exist').type(otpCode).wait(1000)

                    //Click the OTP verify button
                    cy.get('[class="button-1 mt-10 w-100"]').should('exist').click().wait(4000)
                } else {
                    cy.log('OTP not found in the email body')
                }
            })

            cy.get('#name').should('exist').type(Name).wait(1000)
            cy.get('.form-control').should('exist').type(Phone).wait(1000)
            cy.get('[class="button-1 save-btn"]').should('exist').click()
            cy.wait(8000)
        })

    }
}

export const OnLoginPage = new loginpage()