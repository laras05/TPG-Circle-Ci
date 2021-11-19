/// <reference types="cypress" />

//Select any plan - happy path
//validate if the price shown in sticky cart is same as the plan selected.
it('Select 300GB Plan-Happy Path', function() {

    cy.visit('https://www.vodafone.com.au/plans/sim-only', { timeout: 80000 })
    cy.get(':nth-child(4) > [data-testid=plan-card-AU12276] > .YhYum > [data-testid=plancard-container] > [data-testid=plan-card-title-AU12276]')
         .click()   //click arrow to expand and to view Add to Cart button
    cy.get('[style=""] > .jA-dwya > [data-testid=plan-card-actions-mobile] > [data-testid=select-plan-cta]')
        .click()   //click Add to Cart button
    cy.get('strong')
        .should('have.text', '$60.00')  //to validate price in sticky cart
    cy.get('.StickyCartTitlestyles__CaretContainer-sc-1bvgkjv-4 > .IconWrapper-sc-plsbbz-0')
        .click()  //click See More arrow
    cy.get('[data-testid=sticky-cart-section-plan] > .StickyCartItemstyles__Content-sc-bnfv9r-0 > .StickyCartItemstyles__ItemDescription-sc-bnfv9r-8')
        .contains('$65 SIM Only Super+ Plan')  //to validate plan name
    cy.get('[data-testid=sticky-cart-price-value-plan]')
        .should('have.text', 'was $65.00$60.00')  //to validate price in sticky cart
    cy.wait(5000)
       
    //Proceed to cart
    //validate if cart page is shown with the correct product.
    cy.contains('Continue to cart').click()
    cy.wait(5000)
    cy.get('[data-testid=cart-summary-title]').contains('Your cart')   //to validate if user is in Cart page
    cy.get('[data-testid=cart-card-title-65-sim-only-super-plan] > .RichText__Root-sc-1i7juze-0')
        .contains('$65 SIM Only Super+ Plan')  //to validate sim only plan name/details
    cy.get('.CartCardTitlestyles__CostContent-sc-cp3pvi-6 > .Pricestyles__Container-sc-j0ygq6-0 > .Pricestyles__PriceContainer-sc-j0ygq6-1')
        .should('have.text', '$60.00')  //to validate monthly pay
    cy.get('[data-testid=price]').should('have.text', '60.00')  //to validate total cost per month
    cy.get('[data-testid=totalcost-disclaimer]')
        .should('have.text', 'Total min. cost $60.00')  //to validate total cost disclaimer
    cy.get('[data-testid=cart-card-title-button]').click()  //click arrow to view Plan Details
    cy.get('[data-testid=cart-item-name]').contains('$65 SIM Only Super+ Plan')  //to validate Plan name/details
    cy.get('[data-testid=cart-item-price]').should('have.text', '$60.00')  //to validate monthly pay

    
})