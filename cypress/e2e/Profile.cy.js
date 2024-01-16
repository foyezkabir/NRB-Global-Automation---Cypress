import { RandomDataGenerator } from "../support/Page Objects/RandomInputs"
import { OnLoginPage } from "../support/Page Objects/Login-Page/login"
import { NavigateTo } from "../support/Page Objects/Navigation"
import { OnProfilePage } from "../support/Page Objects/Profile-Page/profile"

describe("Profile Page Testing", () => {

    const randomDataGenerator = new RandomDataGenerator()

    // Generated random data
    const randomName = randomDataGenerator.generateRandomName()
    const randomPhone = randomDataGenerator.generateRandomBDPhoneNumber()

    before("visit the Landing page", () => {

        cy.visit('/')
        OnLoginPage.loginTo(randomName, randomPhone)

    })

    it.only("TC-01: Verify the user can go to the profile page", () => {
        NavigateTo.Profile()
    })

    it("TC-02: Verify the user can cut the Bio info Modal", () => {
        OnProfilePage.CuttingAddBioModal()
    })

    it("TC-03: Verify the user can update Bio", () => {
        OnProfilePage.BioInfo()
    })

    it("TC-04: Verify the user can update the Bio info", () => {
        OnProfilePage.UpdateBio()
    })

    it("TC-05: Verify the user can cut the DOB Modal", () => {
        OnProfilePage.CuttingDOBModal()
    })

    it("TC-06: Verify the user can update DOB", () => {
        OnProfilePage.DOBInfo()
    })

    it("TC-07: Verify the user can update the DOB Info", () => {
        OnProfilePage.UpdateDOBInfo()
    })

    it("TC-08: Verify the user can cut the Contact Modal", () => {
        OnProfilePage.CuttingContactModal()
    })

    it("TC-09: Verify the user can Update Contact info", () => {
        OnProfilePage.ContactInfo()
    })

    it("TC-10: Verify the user can re-update the Contact Modal", () => {
        OnProfilePage.UpdateContactInfo()
    })

    it("TC-11: Verify the user can cut the Social links Modal", () => {
        OnProfilePage.CuttingSocialModal()
    })

    it("TC-12: Verify the user can Social links info", () => {
        OnProfilePage.SocialLinks()
    })

    it("TC-13: Verify the user can cut the Social links Modal", () => {
        OnProfilePage.UpdateSocialLinks()
    })

    it("TC-14: Verify the user can cut the Location Modal", () => {
        OnProfilePage.CuttingLocationModal()
    })

    it("TC-15: Verify the user can update Location", () => {
        OnProfilePage.LocationInfo()
    })

    it("TC-16: Verify the user can re-update the Location", () => {
        OnProfilePage.UpdateLocationInfo()
    })

    it.only("Verify the user can Add company", () => {
        OnProfilePage.AddCompany()
    })

    it.only("Verify the user can Edit Company", () => {
        OnProfilePage.EditCompany()
    })

    it.only("Verify the user can Confirm the delete of company", () => {
        OnProfilePage.DeleteCompanyConfirm()
    })

    it.only("Verify the user can Cancel the delete of company", () => {
        OnProfilePage.DeleteCompanyCancel()
    })

    after(() => {
        cy.get('.user-img > [alt="Author"]').click().wait(1500)
        cy.get('.ti-power-off').click().wait(3000)
        cy.clearLocalStorage();
    })
})