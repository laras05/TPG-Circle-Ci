//Send a GET request to https://api-prod.prod.cms.df.services.vodafone.com.au/plan/postpaid-simo?serviceType=New.

describe('VODAFONE API', () => {
    it("GET API for VODAFONE", () => {
    
        //expected 207 status since the api is by default an XML and can contain a number of separate response codes
        cy.request('GET','https://api-prod.prod.cms.df.services.vodafone.com.au/plan/postpaid-simo?serviceType=New')
            .then((response) => {
            expect(response).to.have.property('status', 207)
        })
    
    })

})