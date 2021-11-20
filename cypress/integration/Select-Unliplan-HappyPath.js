/// <reference types="cypress" />

//Select any plan - happy path
//validate if the price shown in sticky cart is same as the plan selected.
it('Select Unli Plan-Happy Path', function() {

    //Open Vodafone link, View Different Plans
    cy.visit('https://www.vodafone.com.au/plans/sim-only', { timeout: 80000 })

    //View Unliplan
    cy.get(':nth-child(5) > [data-testid=plan-card-AU12380] > .YhYum > .PlanCardHeadstyles__PlanCardHeadContainer-sc-vx415-0 > .kWrEIx > [data-testid=plan-card-planData] > .DataAllowancestyles__Container-sc-dqlyks-0 > .DataAllowancestyles__Label-sc-dqlyks-4 > .RichText__Root-sc-1i7juze-0')
        .contains('SIM Only Ultra+ Plan')
    //Click arrow to View Plan Details
    cy.get(':nth-child(5) > [data-testid=plan-card-AU12380] > .YhYum > [data-testid=plancard-container] > [data-testid=plan-card-title-AU12380]')
        .click()
    //View Plan Details
    cy.get('[style=""] > .jA-dwya > .PlanSelectorCardstyles__InclusionsContainer-sc-1ij6hjn-8 > .Inclusionsstyles__Container-sc-tw5xwp-0 > .IconListstyles__IconList-sc-mnu2nj-0 > [data-testid=plan-card-inclusion-0] > :nth-child(2)')
        .contains('Unlimited Max Speed data')
    cy.get('[style=""] > .jA-dwya > .PlanSelectorCardstyles__InclusionsContainer-sc-1ij6hjn-8 > .Inclusionsstyles__Container-sc-tw5xwp-0 > .IconListstyles__IconList-sc-mnu2nj-0 > [data-testid=plan-card-inclusion-0] > :nth-child(2) > .IconListItemstyles__Copy-sc-9mjcx0-3 > [data-testid=description] > p')
        .contains('Get unlimited data on your phone in Oz at the fastest speed the Vodafone network can deliver to your phone at that time and place.')
    cy.get('[style=""] > .jA-dwya > .PlanSelectorCardstyles__InclusionsContainer-sc-1ij6hjn-8 > .Inclusionsstyles__Container-sc-tw5xwp-0 > .IconListstyles__IconList-sc-mnu2nj-0 > [data-testid=plan-card-inclusion-1] > :nth-child(2) > .IconListItemstyles__Title-sc-9mjcx0-2')
        .contains('Standard int’l minutes from Oz')
    cy.get('[style=""] > .jA-dwya > .PlanSelectorCardstyles__InclusionsContainer-sc-1ij6hjn-8 > .Inclusionsstyles__Container-sc-tw5xwp-0 > .IconListstyles__IconList-sc-mnu2nj-0 > [data-testid=plan-card-inclusion-1] > :nth-child(2) > .IconListItemstyles__Copy-sc-9mjcx0-3 > [data-testid=description] > p')
        .contains('Unlimited to Zone 1 & 300 mins to Zone 2.')
    cy.get('[style=""] > .jA-dwya > .PlanSelectorCardstyles__InclusionsContainer-sc-1ij6hjn-8 > .Inclusionsstyles__Container-sc-tw5xwp-0 > .IconListstyles__IconList-sc-mnu2nj-0 > [data-testid=plan-card-inclusion-2] > :nth-child(2) > .IconListItemstyles__Title-sc-9mjcx0-2')
        .contains('Standard national calls and texts')
    cy.get('[style=""] > .jA-dwya > .PlanSelectorCardstyles__InclusionsContainer-sc-1ij6hjn-8 > .Inclusionsstyles__Container-sc-tw5xwp-0 > .IconListstyles__IconList-sc-mnu2nj-0 > [data-testid=plan-card-inclusion-2] > :nth-child(2) > .IconListItemstyles__Copy-sc-9mjcx0-3 > [data-testid=description] > p')
        .contains('Unlimited standard national calls and text, and unlimited standard international SMS.')
    cy.get('[style=""] > .jA-dwya > .PlanSelectorCardstyles__InclusionsContainer-sc-1ij6hjn-8 > .Inclusionsstyles__Container-sc-tw5xwp-0 > .IconListstyles__IconList-sc-mnu2nj-0 > [data-testid=plan-card-inclusion-3] > :nth-child(2)')
        .contains('Hotspot data')
    cy.get('[style=""] > .jA-dwya > .PlanSelectorCardstyles__InclusionsContainer-sc-1ij6hjn-8 > .Inclusionsstyles__Container-sc-tw5xwp-0 > .IconListstyles__IconList-sc-mnu2nj-0 > [data-testid=plan-card-inclusion-3] > :nth-child(2) > .IconListItemstyles__Copy-sc-9mjcx0-3 > [data-testid=description] > p')
        .contains('Extra 30GB Hotspot Max Speed data for hotspotting (tethering) from your mobile phone to your other personal devices only. It isn’t a substitute for a home internet service. Once you’ve used 30GB Hotspot data, you can continue to use Hotspot data at speeds of up to 2Mbps. 2Mbps is great for browsing, social media and streaming music. Not suitable for HD video.')

    //Click arrow to View Offers
    cy.get('[style=""] > .jA-dwya > .Accordionstyles__Container-sc-1724s9t-0 > [data-testid=AU12380-offers] > .AccordionItemTitlestyles__Title-sc-11acw7x-0').click()
    //View Offer details
    cy.get('.OffersContentstyles__Container-sc-tyixkm-0 > .IconListstyles__IconList-sc-mnu2nj-0 > :nth-child(2) > :nth-child(2) > .IconListItemstyles__Title-sc-9mjcx0-2')
        .contains('Get 3 months of Amazon Music Unlimited on us')
    cy.get('.OffersContentstyles__Container-sc-tyixkm-0 > .IconListstyles__IconList-sc-mnu2nj-0 > :nth-child(2) > :nth-child(2) > .IconListItemstyles__Copy-sc-9mjcx0-3 > [data-testid=description] > p')
        .contains('Get 3 months of Amazon Music Unlimited on us when you have a Vodafone Infinite or SIM Only Infinite Plan. After 3 months, you’ll roll onto a $11.99/mth subscription. New Amazon Music Unlimited customers only. Offer ends 22/02/22 unless extended. Redeem within 30 days of purchase. T&C Apply.')

    //Click Add to Cart button
    cy.get('[style=""] > .jA-dwya > [data-testid=plan-card-actions-mobile] > [data-testid=select-plan-cta]')
        .click()
    
    //Validate if the price shown in sticky cart is same as the plan selected
    cy.get('strong').should('have.text', '$85.00')

    //Click See More arrow
    cy.get('.StickyCartTitlestyles__CaretContainer-sc-1bvgkjv-4 > .IconWrapper-sc-plsbbz-0')
        .click()

    //Validate plan name shown in sticky cart is same as the plan selected
    cy.get('[data-testid=sticky-cart-section-plan] > .StickyCartItemstyles__Content-sc-bnfv9r-0 > .StickyCartItemstyles__ItemDescription-sc-bnfv9r-8')
        .contains('$85 SIM Only Ultra+ Plan')
    
    //Validate if the price shown in sticky cart is same as the plan selected
    cy.get('[data-testid=sticky-cart-price-value-plan]')
        .should('have.text', '$85.00')

    cy.wait(5000)
       
    //Proceed to cart
    //validate if cart page is shown with the correct product.
    cy.contains('Continue to cart').click()

    cy.wait(5000)

    //Validate if user is in Add to Cart page
    cy.get('[data-testid=cart-summary-title]').contains('Your cart')

    //Validate Sim Only Plan Name (if same as the plan selected)
    cy.get('[data-testid=cart-card-title-85-sim-only-ultra-plan] > .RichText__Root-sc-1i7juze-0')
        .contains('$85 SIM Only Ultra+ Plan')

    //Validate monthly pay (if same as the plan selected)
    cy.get('.CartCardTitlestyles__CostContent-sc-cp3pvi-6 > .Pricestyles__Container-sc-j0ygq6-0 > .Pricestyles__PriceContainer-sc-j0ygq6-1')
        .should('have.text', '$85.00')

    //Click arrow to view Plan Details 
    cy.get('[data-testid=cart-card-title-button]').click()
    //Validate Plan name/details (if same as the plan selected)
    cy.get('[data-testid=cart-item-name]').contains('$85 SIM Only Ultra+ Plan')
    //View Plan Details (if same as the plan selected)
    cy.get('[data-testid=cart-item-PLAN-details]').contains('Month to month | Unlimited Max Speed data in Oz')
    cy.get('.CartCardContentstyles__InfoContainer-sc-efg3kc-2 > .IconListstyles__IconList-sc-mnu2nj-0 > :nth-child(1) > :nth-child(2)')
        .contains('Unlimited Max Speed data')
    cy.get('.CartCardContentstyles__InfoContainer-sc-efg3kc-2 > .IconListstyles__IconList-sc-mnu2nj-0 > :nth-child(1) > :nth-child(2) > .IconListItemstyles__Copy-sc-9mjcx0-3 > [data-testid=description] > p')
        .contains('Get unlimited data on your phone in Oz at the fastest speed the Vodafone network can deliver to your phone at that time and place.')
    cy.get(':nth-child(2) > :nth-child(2) > .IconListItemstyles__Title-sc-9mjcx0-2')
         .contains('Standard int’l minutes from Oz')
    cy.get(':nth-child(2) > :nth-child(2) > .IconListItemstyles__Copy-sc-9mjcx0-3 > [data-testid=description] > p')
        .contains('Unlimited to Zone 1 & 300 mins to Zone 2.')
    cy.get(':nth-child(3) > :nth-child(2) > .IconListItemstyles__Title-sc-9mjcx0-2')
        .contains('Standard national calls and texts')
    cy.get(':nth-child(3) > :nth-child(2) > .IconListItemstyles__Copy-sc-9mjcx0-3 > [data-testid=description] > p')
        .contains('Unlimited standard national calls and text, and unlimited standard international SMS.')
    cy.get(':nth-child(4) > :nth-child(2) > .IconListItemstyles__Title-sc-9mjcx0-2')
        .contains('Hotspot data')
    cy.get(':nth-child(4) > :nth-child(2) > .IconListItemstyles__Copy-sc-9mjcx0-3 > [data-testid=description] > p')
        .contains('Extra 30GB Hotspot Max Speed data for hotspotting (tethering) from your mobile phone to your other personal devices only. It isn’t a substitute for a home internet service. Once you’ve used 30GB Hotspot data, you can continue to use Hotspot data at speeds of up to 2Mbps. 2Mbps is great for browsing, social media and streaming music. Not suitable for HD video.')

    //Validate monthly pay (if same as the plan selected)
    cy.get('[data-testid=cart-item-price]').should('have.text', '$85.00')

    //Click arrow to view offers
    cy.get('.AccordionItemTitlestyles__Title-sc-11acw7x-0').click()
    //View Offer details (if same as the plan selected)
    cy.get('.OffersContentstyles__Container-sc-tyixkm-0 > .IconListstyles__IconList-sc-mnu2nj-0 > .IconListItemstyles__Container-sc-9mjcx0-0 > :nth-child(2) > .IconListItemstyles__Title-sc-9mjcx0-2')
        .contains('Get 3 months of Amazon Music Unlimited on us')
    cy.get('.OffersContentstyles__Container-sc-tyixkm-0 > .IconListstyles__IconList-sc-mnu2nj-0 > .IconListItemstyles__Container-sc-9mjcx0-0 > :nth-child(2) > .IconListItemstyles__Copy-sc-9mjcx0-3 > [data-testid=description] > p')
        .contains('Get 3 months of Amazon Music Unlimited on us when you have a Vodafone Infinite or SIM Only Infinite Plan. After 3 months, you’ll roll onto a $11.99/mth subscription. New Amazon Music Unlimited customers only. Offer ends 22/02/22 unless extended. Redeem within 30 days of purchase. T&C Apply.')
       
    //Validate total cost per month (if same as the plan selected)
    cy.get('[data-testid=price]').should('have.text', '85.00')

    //Validate total cost disclaimer (if same as the plan selected)
    cy.get('[data-testid=totalcost-disclaimer]')
        .should('have.text', 'Total min. cost $85.00')
    
})