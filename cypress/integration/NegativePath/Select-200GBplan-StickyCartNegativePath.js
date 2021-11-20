/// <reference types="cypress" />

//Tester should file this as defect if this test passed

//Select any plan - negative path
//validate if the price shown in sticky cart is same as the plan selected.
it('Select 200GB Plan-Negative Path', function() {

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
    //if the price shown in sticky cart is not the same as the plan selected (which is $50.00), test case will fail 
    cy.get('strong').should('not.contain', '$50.00')

//Tester should file this as defect if this test passed

})