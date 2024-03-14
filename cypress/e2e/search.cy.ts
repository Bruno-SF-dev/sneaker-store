describe('search products', () => {
  it('deve ser capaz de pesquisar produtos', () => {
    cy.visit('/');

    cy.get('input[name="q"]').type('moletom').parent('form').submit();

    cy.location('pathname').should('include', '/search');
    cy.location('search').should('include', 'q=moletom');

    cy.get('a[href^="/produc"]').should('exist');
  });

  it('deve redirecionar para home quando tentar acessar a search page sem a searchParam "q"', () => {
    cy.on('uncaught:exception', () => {
      return false;
    });

    cy.visit('/search');

    cy.location('pathname').should('equal', '/');
  });
});
