/// <reference types="Cypress" />

// describe('The Home Page', function() {
//     it('successfully loads', function() {
//         cy.viewport(1200, 900);
//         cy.visit('http://localhost:8080') // change URL to match your dev URL
//         cy.contains('dog 1').should('be.visible')
        
//         cy.get(".list-group-item").first().drag('.list2')
        
//         cy.contains('Cat 8').should('be.visible');
//     })
// })

describe('The Home Page', function() {
    it('successfully loads', function() {
        cy.viewport(1200, 900);
        cy.visit('https://sortablejs.github.io/Vue.Draggable/#/clone')
        
        cy.get('.tab-content .active').within((pane) => {

            let source = cy.get('.list-group').eq(0).contains('Guard');
            let destination = cy.get('.list-group').eq(1);
            destination.contains('Gerard').should('not.exist');
            
            // cy.contains("Gerard").drag(destination)
            
            // destination.contains('Gerard').should('be.visible');
        });
    })
})