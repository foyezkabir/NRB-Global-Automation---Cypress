// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const { MailSlurp } = require('mailslurp-client')
//This API key can be user only 50 times in a month
const mailslurp = new MailSlurp({ apiKey: "fa8f37bd957f814b9ad70a79d2f00eb5f30c917275c8a2f7efa879472cc3a159" });

//Create inbox
Cypress.Commands.add('createInbox', () => {
    return mailslurp.createInbox()
})

//Tracking the inbox with ID
Cypress.Commands.add('waitForLatestEmail', (InboxId) => {
    const timeoutMillis = 30000
    return mailslurp.waitForLatestEmail(InboxId, timeoutMillis)
})