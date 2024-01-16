export class ProfilePage {

    BioInfo() {
        cy.contains(' Add Bio').click().wait(2000)
        cy.get('#bio').type('HELLO, WHY ARE YOU GAY')
        cy.get('[class="button-1 save-btn"]').click().wait(4000)
    }

    CuttingAddBioModal() {
        cy.contains(' Add Bio').click().wait(2000)
        cy.get('[class="iconify iconify--system-uicons"]').click().wait(2000)
    }

    UpdateBio() {
        cy.get(':nth-child(1) > .personal-info-header > .edit-icon').click().wait(2000)
        cy.get('#bio').clear().type('HELLO, WHY ARE YOU NOT GAY Bruhhhh')
        cy.get('[class="button-1 save-btn"]').click().wait(3000)
    }

    DOBInfo() {
        cy.get(':nth-child(2) > .personal-info-header > .edit-icon').click().wait(3500)
        cy.get('[placeholder="DD-MM-YYYY"]').type('16-01-1998')
        cy.get('[class="selected-option"]').click().wait(1000)
        cy.contains('div', 'A+').click().wait(1000)
        cy.get('.button-1').click().wait(2000)
    }

    CuttingDOBModal() {
        cy.get(':nth-child(2) > .personal-info-header > .edit-icon').click().wait(2000)
        cy.get('.modal-close-b').click().wait(2000)
    }

    UpdateDOBInfo() {
        cy.get(':nth-child(2) > .personal-info-header > .edit-icon').click().wait(3500)
        cy.get('.react-datepicker__close-icon').click().wait(500)
        cy.get('[placeholder="DD-MM-YYYY"]').type('16-11-1998')
        cy.get('[class="selected-option"]').click().wait(1000)
        cy.contains('div', 'B+').click().wait(1000)
        cy.get('.button-1').click().wait(2000)
    }

    ContactInfo() {
        cy.get(':nth-child(3) > .personal-info-header > .edit-icon > .fa-solid').click().wait(2000)
        cy.get('[name="phone"]').clear().type("1783367056")
        cy.get(':nth-child(3) > .phone_block > .single-input > .react-tel-input > .flag-dropdown').click().wait(2000)
        cy.get('[data-flag-key="flag_no_14"]').click()
        cy.get('[name="other_phone"]').type('1873367056')
        cy.get('.button-1').click().wait(2000)
    }

    CuttingContactModal() {
        cy.contains('Contact info').parent().find('.edit-icon').click().wait(2000)
        cy.get('.iconify.iconify--system-uicons').click().wait(1000)
    }

    UpdateContactInfo() {
        cy.contains('Contact info').parent().find('.edit-icon').click().wait(2000)
        cy.get('[name="phone"]').clear().type("1789367056")
        cy.get(':nth-child(3) > .phone_block > .single-input > .react-tel-input > .flag-dropdown').click().wait(1000)
        cy.get('[data-flag-key="flag_no_14"]').click()
        cy.get('[name="other_phone"]').clear().type('1873307056')
        cy.get('.button-1').click().wait(2000)
    }

    SocialLinks() {
        cy.contains(' Add social link').click().wait(2000)
        cy.get('[placeholder="https://www.website.com/"]').type('www.xyz.com')
        cy.get('[placeholder="https://www.facebook.com/"]').type('www.facebook.com/foyez')
        cy.get('[placeholder="https://www.linkedin.com/"]').type('www.linkedin.com/foyez')
        cy.get('[placeholder="https://www.twitter.com/"]').type('www.twitter.com/foyez')
        cy.get('[class="button-1 save-btn"]').click().wait(4500)
    }

    CuttingSocialModal() {
        cy.contains(' Add social link').click().wait(2000)
        cy.get('[class="iconify iconify--system-uicons"]').click().wait(1000)
    }

    UpdateSocialLinks() {
        cy.get(':nth-child(5) > .personal-info-header > .edit-icon > .fa-solid').click().wait(2000)
        cy.get('[placeholder="https://www.website.com/"]').clear().type('www.xyza.com')
        cy.get('[placeholder="https://www.facebook.com/"]').clear().type('www.facebook.com/foyezkabir')
        cy.get('[placeholder="https://www.linkedin.com/"]').clear().type('www.linkedin.com/foyezkabir')
        cy.get('[placeholder="https://www.twitter.com/"]').clear().type('www.twitter.com/foyezkabir')
        cy.get('[class="button-1 save-btn"]').click().wait(2000)
    }

    LocationInfo() {
        cy.contains('Add location').click().wait(2000)
        cy.get('#country > .css-13cymwt-control > .css-1wy0on6 > .css-1xc3v61-indicatorContainer').click().wait(500)
        cy.contains('Bangladesh').click().wait(1000)
        cy.get('#react-select-6-placeholder').click({ force: true }).wait(1000)
        cy.contains('Dhaka District').click().wait(1000)
        //cy.get('#city > .css-13cymwt-control > .css-1wy0on6 > .css-1xc3v61-indicatorContainer').click().wait(3000)
        cy.get('#react-select-7-placeholder').click({ force: true }).wait(3000)
        cy.contains('Faridpur').click({ force: true }).wait(1000)
        cy.get('#street_address').type('street address').wait(1000)
        cy.get('#postal_code').type('1236').wait(1000)
        cy.get('[class="button-1 save-btn"]').click().wait(4000)
    }

    CuttingLocationModal() {
        cy.contains('Add location').click().wait(2000)
        cy.get('[class="iconify iconify--system-uicons"]').click().wait(2000)
    }

    UpdateLocationInfo() {
        cy.get(':nth-child(4) > .personal-info-header > .edit-icon > .fa-solid').click().wait(4000)
        cy.get('#country > .css-13cymwt-control > .css-1wy0on6 > :nth-child(1)').click().wait(2000)
        cy.get('.css-15lsz6c-indicatorContainer').click().wait(1000)
        cy.contains('Australia').click().wait(1000)
        cy.get('#state > .css-13cymwt-control > .css-1wy0on6 > :nth-child(1)').click().wait(2000)
        cy.get('.css-15lsz6c-indicatorContainer').click({ force: true }).wait(1000)
        cy.contains('Tasmania').click().wait(1000)
        cy.get('#city > .css-13cymwt-control > .css-1wy0on6 > :nth-child(1)').click().wait(2000)
        cy.get('.css-15lsz6c-indicatorContainer').click({ force: true }).wait(1000)
        cy.contains('Bagdad').click({ force: true }).wait(1000)
        cy.get('#street_address').clear().type('street address 232').wait(1000)
        cy.get('#postal_code').clear().type('DF1236').wait(1000)
        cy.get('[class="button-1 save-btn"]').click().wait(2000)
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