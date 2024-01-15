export class ProfilePage {

    BioInfo() {
        cy.contains(' Add Bio').click().wait(1000)
        cy.get('#bio').type('HELLO, WHY ARE YOU GAY')
        cy.get('[class="button-1 save-btn"]').click().wait(3000)
    }

    CuttingAddBioModal() {
        cy.contains(' Add Bio').click().wait(1000)
        cy.get('[class="iconify iconify--system-uicons"]').click().wait(1000)
    }

    DOBInfo() {
        cy.get('[class="edit-dp"] [class="fa-solid fa-pen"]').click().wait()
        cy.get('[placeholder="DD-MM-YYYY"]').type('16-01-1998')
        cy.get('[class="selected-option"]').click().wait(1000)
        cy.select('A+').wait(1000)
        cy.get('.button-1 save-btn').click().wait(2000)
    }

    CuttingDOBModal() {
        cy.get('[class="edit-dp"] [class="fa-solid fa-pen"]').click().wait()
        cy.get('.modal-close-b').click().wait(1000)
    }

    ContactInfo() {
        cy.contains('Contact info').parent().find('.edit-icon').click().wait(2000)
        cy.get('[name="phone"]').clear().type("1783367056")
        cy.get('.selected-flag').eq(2).select('Bangladesh')
        cy.get('[name="other_phone"]').type('1873367056')
        cy.get('.button-1 save-btn').click().wait(2000)
    }

    CuttingContactModal() {
        cy.contains('Contact info').parent().find('.edit-icon').click().wait(2000)
        cy.get('.iconify iconify--system-uicons').click().wait(1000)
    }

    SocialLinks() {
        cy.get('.add-info-button').contains(' Add social link').click().wait(1000)
        cy.get('[placeholder="https://www.website.com/"]').type('www.xyz.com')
        cy.get('[placeholder="https://www.facebook.com/"]').type('www.facebook.com/foyez')
        cy.get('[placeholder="https://www.linkedin.com/"]').type('www.linkedin.com/foyez')
        cy.get('[placeholder="https://www.twitter.com/"]').type('www.twitter.com/foyez')
        cy.get('[class="button-1 save-btn"]').click().wait(2000)
    }

    CuttingSocialModal() {
        cy.get('.add-info-button').contains(' Add social link').click().wait(1000)
        cy.get('[class="iconify iconify--system-uicons"]').click().wait(1000)
    }

    LocationInfo() {
        cy.get('.add-info-button').contains(' Add location').click().wait(2000)
        cy.get('#react-select-5-placeholder').select(n).wait(1000)
        cy.get('#react-select-6-placeholder').type('State').wait(1000)
        cy.get('#react-select-7-placeholder').type('city').wait(1000)
        cy.get('[placeholder="Street Address"]').type('address').wait(1000)
        cy.get('#street_address').type('street address').wait(1000)
        cy.get('#postal_code').type('1236').wait(1000)
        cy.get('[class="button-1 save-btn"]').click().wait(2000)
    }

    CuttingLocationModal() {
        cy.get('.add-info-button').contains(' Add location').click().wait(2000)
        cy.get('[class="iconify iconify--system-uicons"]').click().wait(1000)
    }

    AddCompany(n) {
        cy.get('.create-post add-and-edit-button title-icon').click().wait(4000)
        cy.get('#name').type('Toto Comapny').wait(1000)
        cy.get('. css-19bb58m').select(n).wait(1000)
        cy.get('[placeholder="DD-MM-YYYY"]').type('01-01-1998').wait(1000)
        cy.get('[name="bio"]').type('Hello Boi').wait(1000)
        cy.get('[class="button-1 undefined"]').click().wait(3000)
    }

    EditCompany(N, n) {
        cy.get('[class="company-card-box edit-page-open"] [class="fa-solid fa-pen"]').eq(1).click().wait(5000)
        cy.get('#name').clear().type("YoYo comapnay").wait(1000)
        cy.get('. css-1xc3v61-indicatorContainer').select(N).wait(1000)
        cy.get('. css-19bb58m').select(n).wait(1000)
        cy.get('#email').type('XYZ@example.com').wait(1000)
        cy.get('[name="phone"]').type('1983367056').wait(1000)
        cy.get('[name="other_phone"]').type('1893367056').wait(1000)
        cy.get('[placeholder = "Enter Description"]').clear().type('Hello Boyyyy').wait(1000)
        cy.get('#street_address').type('Street Address').wait(1000)
        cy.get('#postal_code').type('1235').wait(1000)
        cy.get('[placeholder="DD-MM-YYYY"]').clear().type('01-01-1990').wait(1000)
        cy.get('[placeholder="https://www.website.com/"]').type('www.xyz.com').wait(1000)
        cy.get('[placeholder="https://www.facebook.com/"]').type('www.facebook.com/foyez').wait(1000)
        cy.get('[placeholder="https://www.linkedin.com/"]').type('www.linkedin.com/foyez').wait(1000)
        cy.get('[placeholder="https://www.twitter.com/"]').type('www.twitter.com/foyez').wait(1000)
        cy.get('[class="button-1 undefined"]').click().wait(3000)
    }

    DeleteCompanyConfirm() {
        cy.get('[class="col-lg-8 col-md-6"]').find('[class="col-lg-12 col-md-12"]').eq(1)
        cy.get('.delete-button').click().wait(2000)
        cy.get('[class="button-1 undefined"]').click().wait(3000)
    }

    DeleteCompanyCancel() {
        cy.get('[class="col-lg-8 col-md-6"]').find('[class="col-lg-12 col-md-12"]').eq(1)
        cy.get('.delete-button').click().wait(2000)
        cy.get('[class="button-1 primary"]').click().wait(3000)
    }
}

export const OnProfilePage = new ProfilePage()