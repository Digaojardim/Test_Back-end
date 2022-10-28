// verbo/ metodo - endpoint . motivo (request). extensao
/// <reference types="cypress"/>



function Gettest() {
    // cy.request - client http
      return cy.request({
          method:'GET',
          url: 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a',
          failOnStatusCode: false,
     

      })


      
}
    export{ Gettest};
