describe('Testes de ponta a ponta com site de finanças', () => {

  beforeEach(() => {
    cy.visit('https://dev-finance.netlify.app/')
  })

  it('Deve cadastrar duas transações', () => {

    cy.contains('a', 'Nova Transação').click();    
    cy.get('#description').type('Salário');
    cy.get('#amount').type('1500');
    cy.get('#date').type('2023-05-05');
    cy.contains('button', 'Salvar').click();

    cy.contains('a', 'Nova Transação').click();    
    cy.get('#description').type('Conta de luz');
    cy.get('#amount').type('-100');
    cy.get('#date').type('2023-05-08');
    cy.contains('button', 'Salvar').click();

      
    cy.get('img[onclick="Transaction.remove(0)"]').click();
    cy.get('img[onclick="Transaction.remove(0)"]').click();
    

   
    
  });

  

})