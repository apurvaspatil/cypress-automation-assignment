describe('Automation Practice', () => {

    it('Verify', () => {

        cy.visit('http://automationpractice.com/index.php');
        // wawep88394@ecofreon.com
        // testtest


        cy.get('.login').click();
        cy.get('#email').type('peceg52664@epeva.com');
        cy.get('#passwd').type('testtest');
        cy.get('#SubmitLogin').click();
        cy.get('#search_query_top').type('Dress');
        cy.get('button[name="submit_search"]').click();
        cy.get('a[data-id-product="5"][title="Add to cart"]').click();
        cy.get('#search_query_top').clear();
        cy.get('#search_query_top').type('Top');
        cy.get('button[name="submit_search"]').click();
        cy.get('a[data-id-product="3"][title="Add to cart"]').click();
        cy.get('h2').first().should("have.text","\n\t\t\t\t\tProduct successfully added to your shopping cart\n\t\t\t\t");
        cy.get('a[title="Proceed to checkout"]').click();
        cy.get('.cart_description .product-name').eq(0).should("have.text","Printed Summer Dress");
        cy.get('.cart_description .product-name').eq(1).should("have.text","Printed Dress");
        cy.get('.standard-checkout').click();
        cy.get('button[name="processAddress"]').click();
        cy.get('#cgv').click();
        cy.get('button[name="processCarrier"]').click();
        cy.get('.cheque').click();
        cy.get('button.btn.btn-default.button-medium').click();
        cy.get('.alert-success').should("have.text","Your order on My Store is complete.");

    })

})