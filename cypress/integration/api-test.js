// https://api-prod.prod.cms.df.services.vodafone.com.au/plan/
describe('CART NAME', () => {
    it("GET API for VODAFONE", () => {
    
        cy.request('https://api-prod.prod.cms.df.services.vodafone.com.au/plan/postpaid-simo?serviceType=New')
            .then((res) =>{
         expect(res.status).equal(207)
        })
    })

})