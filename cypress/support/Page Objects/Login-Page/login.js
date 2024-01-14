export class loginpage {
    loginTo() {

        //Click on the Log in  button
        cy.get('[class="main-btn"]').eq(1).click({ multiple: true, force: true }).wait(2000)

        //Provide email in the email field
        cy.get('[placeholder = "Enter your email address"]').type("email").wait(1000)

        //Click Sign in button
        cy.get('[class="button-1 mt-10 w-100"]').click().wait(3000)
    }
}

export const OnLoginPage = new loginpage()