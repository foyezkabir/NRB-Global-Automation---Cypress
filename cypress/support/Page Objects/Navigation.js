export class Navigate {
    Profile() {
        cy.get('[class="widget stick-widget"] [href="/profile-about?id=161"]').click().wait(2000)
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