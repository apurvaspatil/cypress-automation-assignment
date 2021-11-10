const cypressJson = require('../../cypress.json')


describe('Automation Practice', () => {
    it('E2E flow test for purchasing multiple products',() =>{

        // Visit the Base URL
        cy.visit(cypressJson.baseUrl);

        // Click on login and enter valid credentials for login
        cy.login(cypressJson.email, cypressJson.password);

        // Verify if correct username is displayed after logging in
        cy.get('.account').should("have.text","Test User");

        // Visit home page
        cy.get('.logo.img-responsive').click()

        // Type 'Dress' in search box and click on search icon
        cy.get('#search_query_top').type('Dress');
        cy.get('button[name="submit_search"]').click();

        // Add the Dress product to the cart
        cy.get('a[data-id-product="5"][title="Add to cart"]').click();
        cy.get('h2').first().should("have.text","\n\t\t\t\t\tProduct successfully added to your shopping cart\n\t\t\t\t");

        // Clear the search box and type 'Top' in it and click on search icon
        cy.get('#search_query_top').clear();
        cy.get('#search_query_top').type('Top');
        cy.get('button[name="submit_search"]').click();

        // Add the Top product to the cart
        cy.get('a[data-id-product="3"][title="Add to cart"]').click();
        cy.get('h2').first().should("have.text","\n\t\t\t\t\tProduct successfully added to your shopping cart\n\t\t\t\t");

        // Click on 'Proceed to checkout' to start the checkout process
        cy.get('a[title="Proceed to checkout', { timeout: 10000 }).should('be.visible');
        cy.get('a[title="Proceed to checkout"]').click();

        // Verify if the expected 2 products are added to the cart and checkout
        cy.get('.cart_description .product-name').eq(0).should("have.text","Printed Summer Dress");
        cy.get('.cart_description .product-name').eq(1).should("have.text","Printed Dress");
        cy.get('.label.label-success').eq(0).should("have.text","In stock");
        cy.get('.label.label-success').eq(1).should("have.text","In stock");
        cy.get('.standard-checkout').click();
        cy.get('button[name="processAddress"]').click();
        cy.get('#cgv').click();
        cy.get('button[name="processCarrier"]').click();
        cy.get('.cheque').click();
        cy.get('button.btn.btn-default.button-medium').click();

        // Success message for placing the order should be displayed
        cy.get('.alert-success').should("have.text","Your order on My Store is complete.");

    })
       
    
       

    

})