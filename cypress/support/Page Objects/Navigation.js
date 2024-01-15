
export class Navigate {

    Profile() {
        cy.get('.naves > :nth-child(1) > a').click().wait(2000)
        //cy.contains('Profile').eq(12).click({ multiple: true, force: true }).wait(2000)
    }

    Subscription() {
        cy.get('[class="widget stick-widget"] [aria-current="page"]').click().wait(2000)
    }

    Events() {
        cy.get('[class="widget stick-widget"] [href="/events"]').click().wait(2000)
    }

    Search(Username) {
        cy.get('[placeholder="Search People"]').type(Username)
    }
}

export const NavigateTo = new Navigate()