/// <reference types="cypress" />

//Select any plan - happy path.
//validate if the price shown in sticky cart is same as the plan selected
it('Select 200GB Plan-Happy Path', function() {

    //Open Vodafone link, View Different Plans
    cy.visit('https://www.vodafone.com.au/plans/sim-only', { timeout: 80000 })

    //View 200GB plan
    cy.get(':nth-child(3) > [data-testid=plan-card-AU12275] > .YhYum > .PlanCardHeadstyles__PlanCardHeadContainer-sc-vx415-0 > .beXpqC > [data-testid=plan-card-planData] > .DataAllowancestyles__Container-sc-dqlyks-0 > .DataAllowancestyles__Label-sc-dqlyks-4 > .RichText__Root-sc-1i7juze-0')
        .contains('SIM Only Super Plan')
    //Click arrow to View Plan Details
    cy.get(':nth-child(3) > [data-testid=plan-card-AU12275] > .YhYum > [data-testid=plancard-container] > [data-testid=plan-card-title-AU12275]')
        .click()
    //View Plan Details
    cy.get('[style=""] > .jA-dwya > .PlanSelectorCardstyles__InclusionsContainer-sc-1ij6hjn-8 > .Inclusionsstyles__Container-sc-tw5xwp-0 > .IconListstyles__IconList-sc-mnu2nj-0 > [data-testid=plan-card-inclusion-0] > :nth-child(2)')
        .contains('Infinite data – speeds up to 10Mbps')
    cy.get('[style=""] > .jA-dwya > .PlanSelectorCardstyles__InclusionsContainer-sc-1ij6hjn-8 > .Inclusionsstyles__Container-sc-tw5xwp-0 > .IconListstyles__IconList-sc-mnu2nj-0 > [data-testid=plan-card-inclusion-0] > :nth-child(2) > .IconListItemstyles__Copy-sc-9mjcx0-3 > [data-testid=description] > p')
        .contains('First use 200GB Max Speed data, then keep using infinite data in Oz at speeds of up to 10Mbps. 10Mbps is great for high definition video and video calling. Uploading large files to the web may be slow. Find out more about what you can do at 10Mbps.')
    cy.get('[style=""] > .jA-dwya > .PlanSelectorCardstyles__InclusionsContainer-sc-1ij6hjn-8 > .Inclusionsstyles__Container-sc-tw5xwp-0 > .IconListstyles__IconList-sc-mnu2nj-0 > [data-testid=plan-card-inclusion-1] > :nth-child(2) > .IconListItemstyles__Title-sc-9mjcx0-2')
        .contains('Standard int’l minutes from Oz')
    cy.get('[style=""] > .jA-dwya > .PlanSelectorCardstyles__InclusionsContainer-sc-1ij6hjn-8 > .Inclusionsstyles__Container-sc-tw5xwp-0 > .IconListstyles__IconList-sc-mnu2nj-0 > [data-testid=plan-card-inclusion-1] > :nth-child(2) > .IconListItemstyles__Copy-sc-9mjcx0-3 > [data-testid=description] > p')
        .contains('1000 mins to Zone 1 & 100 mins to Zone 2.')
    cy.get('[style=""] > .jA-dwya > .PlanSelectorCardstyles__InclusionsContainer-sc-1ij6hjn-8 > .Inclusionsstyles__Container-sc-tw5xwp-0 > .IconListstyles__IconList-sc-mnu2nj-0 > [data-testid=plan-card-inclusion-2] > :nth-child(2) > .IconListItemstyles__Title-sc-9mjcx0-2')
        .contains('Standard national calls and texts')
    cy.get('[style=""] > .jA-dwya > .PlanSelectorCardstyles__InclusionsContainer-sc-1ij6hjn-8 > .Inclusionsstyles__Container-sc-tw5xwp-0 > .IconListstyles__IconList-sc-mnu2nj-0 > [data-testid=plan-card-inclusion-2] > :nth-child(2) > .IconListItemstyles__Copy-sc-9mjcx0-3 > [data-testid=description] > p')
        .contains('Unlimited standard national calls and text, and unlimited standard international SMS.')
    cy.get('[style=""] > .jA-dwya > .PlanSelectorCardstyles__InclusionsContainer-sc-1ij6hjn-8 > .Inclusionsstyles__Container-sc-tw5xwp-0 > .IconListstyles__IconList-sc-mnu2nj-0 > [data-testid=plan-card-inclusion-3] > :nth-child(2)')
        .contains('Hotspot data')
    cy.get('[style=""] > .jA-dwya > .PlanSelectorCardstyles__InclusionsContainer-sc-1ij6hjn-8 > .Inclusionsstyles__Container-sc-tw5xwp-0 > .IconListstyles__IconList-sc-mnu2nj-0 > [data-testid=plan-card-inclusion-3] > :nth-child(2) > .IconListItemstyles__Copy-sc-9mjcx0-3 > [data-testid=description] > p')
        .contains('Hotspotting (tethering) is permitted from your mobile phone to your other personal devices only. It isn’t a substitute for a home internet service.')

    //Click arrow to View Offers
    cy.get('[style=""] > .jA-dwya > .Accordionstyles__Container-sc-1724s9t-0 > [data-testid=AU12275-offers] > .AccordionItemTitlestyles__Title-sc-11acw7x-0').click()
    //View Offer details
    cy.get('.OffersContentstyles__Container-sc-tyixkm-0 > .IconListstyles__IconList-sc-mnu2nj-0 > :nth-child(1) > :nth-child(2)')
        .contains('Save $5/mth off plan fees')
    cy.get('.OffersContentstyles__Container-sc-tyixkm-0 > .IconListstyles__IconList-sc-mnu2nj-0 > :nth-child(1) > :nth-child(2) > .IconListItemstyles__Copy-sc-9mjcx0-3 > [data-testid=description] > p')
        .contains('Save $5/mth off plan fees each month you stay connected to this plan. Hurry, offer ends 30/11/21. T&C apply.')
    cy.get('.OffersContentstyles__Container-sc-tyixkm-0 > .IconListstyles__IconList-sc-mnu2nj-0 > :nth-child(2) > :nth-child(2) > .IconListItemstyles__Title-sc-9mjcx0-2')
        .contains('Get 3 months of Amazon Music Unlimited on us')
    cy.get('.OffersContentstyles__Container-sc-tyixkm-0 > .IconListstyles__IconList-sc-mnu2nj-0 > :nth-child(2) > :nth-child(2) > .IconListItemstyles__Copy-sc-9mjcx0-3 > [data-testid=description] > p')
        .contains('Get 3 months of Amazon Music Unlimited on us when you have a Vodafone Infinite or SIM Only Infinite Plan. After 3 months, you’ll roll onto a $11.99/mth subscription. New Amazon Music Unlimited customers only. Offer ends 22/02/22 unless extended. Redeem within 30 days of purchase. T&C Apply.')
    cy.get('.OffersContentstyles__Container-sc-tyixkm-0 > .IconListstyles__IconList-sc-mnu2nj-0 > :nth-child(3) > :nth-child(2)')
        .contains('Get 140GB bonus data')
    cy.get('.OffersContentstyles__Container-sc-tyixkm-0 > .IconListstyles__IconList-sc-mnu2nj-0 > :nth-child(3) > :nth-child(2) > .IconListItemstyles__Copy-sc-9mjcx0-3 > [data-testid=description] > p')
        .contains('Get 140GB bonus data each month for use in Oz when you stay connected to this plan. On SIM Only plans, this offer is only available for new/additional services. Offer ends 30/11/21 unless extended. T&C apply.')

    //Click Add to Cart button  
    cy.get(':nth-child(3) > [data-testid=plan-card-AU12275] > .YhYum > [data-testid=plancard-container] > .rah-static--height-auto > :nth-child(1) > .jA-dwya > [data-testid=plan-card-actions-mobile] > [data-testid=select-plan-cta]')
        .click()

    //Validate if the price shown in sticky cart is same as the plan selected
    cy.get('strong').should('have.text', '$50.00')

    //Click See More arrow
    cy.get('.StickyCartTitlestyles__CaretContainer-sc-1bvgkjv-4 > .IconWrapper-sc-plsbbz-0')
        .click()
    
    //Validate plan name shown in sticky cart is same as the plan selected
    cy.get('[data-testid=sticky-cart-section-plan] > .StickyCartItemstyles__Content-sc-bnfv9r-0 > .StickyCartItemstyles__ItemDescription-sc-bnfv9r-8')
        .contains('$55 SIM Only Super Plan')
    
    //Validate if the price shown in sticky cart is same as the plan selected
    cy.get('[data-testid=sticky-cart-price-value-plan]').should('have.text', 'was $55.00$50.00')

    cy.wait(5000)
       
    //Proceed to cart
    //validate if cart page is shown with the correct product.
    cy.contains('Continue to cart').click()

    cy.wait(5000)

    //Validate if user is in Add to Cart page
    cy.get('[data-testid=cart-summary-title]').contains('Your cart')

    //Validate Sim Only Plan Name (if same as the plan selected)
    cy.get('[data-testid=cart-card-title-55-sim-only-super-plan] > .RichText__Root-sc-1i7juze-0')
        .contains('$55 SIM Only Super Plan')
    
    //Validate monthly pay (if same as the plan selected)
    cy.get('.CartCardTitlestyles__CostContent-sc-cp3pvi-6 > .Pricestyles__Container-sc-j0ygq6-0 > .Pricestyles__PriceContainer-sc-j0ygq6-1')
        .should('have.text', '$50.00')

    //Click arrow to view Plan Details   
    cy.get('[data-testid=cart-card-title-button]').click()
    //Validate Plan name/details (if same as the plan selected)
    cy.get('[data-testid=cart-item-name]').contains('$55 SIM Only Super Plan')
    //View Plan Details (if same as the plan selected)
    cy.get('[data-testid=cart-item-PLAN-details]')
        .contains('Month to month | 200GB total Max Speed data in Oz')
    cy.get('.CartCardContentstyles__InfoContainer-sc-efg3kc-2 > .IconListstyles__IconList-sc-mnu2nj-0 > :nth-child(1) > :nth-child(2)')
        .contains('Standard int’l minutes from Oz')
    cy.get('.CartCardContentstyles__InfoContainer-sc-efg3kc-2 > .IconListstyles__IconList-sc-mnu2nj-0 > :nth-child(1) > :nth-child(2) > .IconListItemstyles__Copy-sc-9mjcx0-3 > [data-testid=description] > p')
        .contains('1000 mins to Zone 1 & 100 mins to Zone 2.')
    cy.get('.CartCardContentstyles__InfoContainer-sc-efg3kc-2 > .IconListstyles__IconList-sc-mnu2nj-0 > :nth-child(2) > :nth-child(2)')
        .contains('Standard national calls and texts')
    cy.get('.CartCardContentstyles__InfoContainer-sc-efg3kc-2 > .IconListstyles__IconList-sc-mnu2nj-0 > :nth-child(2) > :nth-child(2) > .IconListItemstyles__Copy-sc-9mjcx0-3 > [data-testid=description] > p')
        .contains('Unlimited standard national calls and text, and unlimited standard international SMS.')
    cy.get('.CartCardContentstyles__InfoContainer-sc-efg3kc-2 > .IconListstyles__IconList-sc-mnu2nj-0 > :nth-child(3) > :nth-child(2)')
        .contains('Hotspot data')
    cy.get('.CartCardContentstyles__InfoContainer-sc-efg3kc-2 > .IconListstyles__IconList-sc-mnu2nj-0 > :nth-child(3) > :nth-child(2) > .IconListItemstyles__Copy-sc-9mjcx0-3 > [data-testid=description] > p')
        .contains('Hotspotting (tethering) is permitted from your mobile phone to your other personal devices only. It isn’t a substitute for a home internet service.')

    //Validate monthly pay (if same as the plan selected)
    cy.get('[data-testid=cart-item-price]').should('have.text', '$50.00')
    
    //Click arrow to view offers
    cy.get('.AccordionItemTitlestyles__Title-sc-11acw7x-0').click()
    //View Offer details (if same as the plan selected)
    cy.get('.OffersContentstyles__Container-sc-tyixkm-0 > .IconListstyles__IconList-sc-mnu2nj-0 > :nth-child(1) > :nth-child(2)')
        .contains('Save $5/mth off plan fees')
    cy.get('.OffersContentstyles__Container-sc-tyixkm-0 > .IconListstyles__IconList-sc-mnu2nj-0 > :nth-child(1) > :nth-child(2) > .IconListItemstyles__Copy-sc-9mjcx0-3 > [data-testid=description] > p')
        .contains('Save $5/mth off plan fees each month you stay connected to this plan. Hurry, offer ends 30/11/21. T&C apply.')
    cy.get('.OffersContentstyles__Container-sc-tyixkm-0 > .IconListstyles__IconList-sc-mnu2nj-0 > :nth-child(2) > :nth-child(2) > .IconListItemstyles__Title-sc-9mjcx0-2')
        .contains('Get 3 months of Amazon Music Unlimited on us')
    cy.get('.OffersContentstyles__Container-sc-tyixkm-0 > .IconListstyles__IconList-sc-mnu2nj-0 > :nth-child(2) > :nth-child(2) > .IconListItemstyles__Copy-sc-9mjcx0-3 > [data-testid=description] > p')
        .contains('Get 3 months of Amazon Music Unlimited on us when you have a Vodafone Infinite or SIM Only Infinite Plan. After 3 months, you’ll roll onto a $11.99/mth subscription. New Amazon Music Unlimited customers only. Offer ends 22/02/22 unless extended. Redeem within 30 days of purchase. T&C Apply.')
    cy.get('.OffersContentstyles__Container-sc-tyixkm-0 > .IconListstyles__IconList-sc-mnu2nj-0 > :nth-child(3) > :nth-child(2)')
        .contains('Get 140GB bonus data')
    cy.get('.OffersContentstyles__Container-sc-tyixkm-0 > .IconListstyles__IconList-sc-mnu2nj-0 > :nth-child(3) > :nth-child(2) > .IconListItemstyles__Copy-sc-9mjcx0-3 > [data-testid=description] > p')
        .contains('Get 140GB bonus data each month for use in Oz when you stay connected to this plan. On SIM Only plans, this offer is only available for new/additional services. Offer ends 30/11/21 unless extended. T&C apply.')
   
    //Validate total cost per month (if same as the plan selected)
    cy.get('[data-testid=price]').should('have.text', '50.00')

    //Validate total cost disclaimer (if same as the plan selected)
    cy.get('[data-testid=totalcost-disclaimer]')
        .should('have.text', 'Total min. cost $50.00')
    
})