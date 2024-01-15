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

    it("Verify the user can go to the profile page", () => {
        NavigateTo.Profile()
        //OnProfilePage.GoToProfile()
    })

    it("Verify the user can update Bio", () => {
        NavigateTo.Profile()
        OnProfilePage.BioInfo()
    })

    it("Verify the user can cut the Bio info Modal", () => {
        NavigateTo.Profile()
        OnProfilePage.CuttingAddBioModal()
    })

    it("Verify the user can update DOB", () => {
        NavigateTo.Profile()
        OnProfilePage.DOBInfo()
    })

    it("Verify the user can cut the DOB Modal", () => {
        NavigateTo.Profile()
        OnProfilePage.CuttingDOBModal()
    })

    it("Verify the user can Update Contact info", () => {
        NavigateTo.Profile()
        OnProfilePage.ContactInfo()
    })

    it("Verify the user can cut the Contact Modal", () => {
        NavigateTo.Profile()
        OnProfilePage.CuttingContactModal()
    })

    it("Verify the user can update Social links info", () => {
        NavigateTo.Profile()
        OnProfilePage.SocialLinks()
    })

    it("Verify the user can cut the Social links Modal", () => {
        NavigateTo.Profile()
        OnProfilePage.CuttingSocialModal()
    })

    it("Verify the user can update address", () => {
        NavigateTo.Profile()
        OnProfilePage.LocationInfo()
    })

    it("Verify the user can cut the Location Modal", () => {
        NavigateTo.Profile()
        OnProfilePage.CuttingLocationModal()
    })

    it("Verify the user can Add company", () => {
        NavigateTo.Profile()
        OnProfilePage.AddCompany()
    })

    it("Verify the user can Edit Company", () => {
        NavigateTo.Profile()
        OnProfilePage.EditCompany()
    })

    it("Verify the user can Confirm the delete of company", () => {
        NavigateTo.Profile()
        OnProfilePage.DeleteCompanyConfirm()
    })

    it("Verify the user can Cancel the delete of company", () => {
        NavigateTo.Profile()
        OnProfilePage.DeleteCompanyCancel()
    })

    after(() => {
        cy.clearLocalStorage();
    })
})