describe('add product to cart', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('deve ser possível navegar para a página do produto e adicionar o produto ao carrinho', () => {
    cy.get('a[href^="/product"]').first().click();

    cy.location('pathname').should('include', '/product');

    cy.get('button[data-testid="btn-size"]').first().click();
    cy.contains('Adicionar ao carrinho').click();

    cy.contains('Carrinho (1)').should('exist');
  });

  it('não deve ser possível adicionar o mesmo produto no carrinho', () => {
    cy.get('a[href^="/product"]').first().click();

    cy.location('pathname').should('include', '/product');

    cy.get('button[data-testid="btn-size"]').first().click();
    cy.contains('Adicionar ao carrinho').click();
    cy.contains('Adicionar ao carrinho').click();

    cy.contains('Carrinho (1)').should('exist');
  });

  it('deve ser ser possível buscar um produto e adicioná-lo ao carrinho', () => {
    cy.get('input[name="q"]').type('jordan').parent('form').submit();

    cy.get('a[href^="/product"]').first().click();

    cy.location('pathname').should('include', '/product');

    cy.get('button[data-testid="btn-size"]').first().click();
    cy.contains('Adicionar ao carrinho').click();

    cy.contains('Carrinho (1)').should('exist');
  });
});
