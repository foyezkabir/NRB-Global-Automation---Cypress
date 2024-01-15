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
const mailslurp = new MailSlurp({ apiKey: "b0bd9669c32cb64d91b39da28682040f95e2019c1ef501dd2a5457acf2f77a39" });

//Create inbox
Cypress.Commands.add('createInbox', () => {
    return mailslurp.createInbox()
})

//Tracking the inbox with ID
Cypress.Commands.add('waitForLatestEmail', (InboxId) => {
    const timeoutMillis = 30000
    return mailslurp.waitForLatestEmail(InboxId, timeoutMillis)
})