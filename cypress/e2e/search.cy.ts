describe('search products', () => {
  it('deve ser capaz de pesquisar produtos', () => {
    cy.searchByQuery('jordan');

    cy.wait(500);

    cy.location('pathname').should('include', '/search');
    cy.location('search').should('include', 'q=jordan');

    cy.get('a[href^="/product"]').should('exist');
  });

  it('deve redirecionar para home quando tentar acessar a search page sem a searchParam "q"', () => {
    cy.on('uncaught:exception', () => {
      return false;
    });

    cy.visit('/search');

    cy.location('pathname').should('equal', '/');
  });
});
