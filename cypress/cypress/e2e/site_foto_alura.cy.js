describe('Testes de ponta a ponta site de fotos alura', () => {

  beforeEach(() => {
    cy.visit('https://alura-fotos.herokuapp.com/#/home')
  })

  it('Deve retornar mensagens de validação', () => {

    cy.contains('a', 'Register now').click();    
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Email is required!').should('be.visible')
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Full name is required!').should('be.visible')
    cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
    cy.contains('ap-vmessage', 'Password is required!').should('be.visible')

  })

  it('Deve retornar mensagem de e-mail inválido', () => {
    
    cy.contains('a', 'Register now').click(); 
    cy.contains('button', 'Register').click();
    cy.get('input[formcontrolname="email"]').type('teste');
    cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible')

  })

  it('Deve retornar mensagem de senha de no mínimo 8 caracteres', () => {
    
    cy.contains('a', 'Register now').click(); 
    cy.contains('button', 'Register').click();
    cy.get('input[formcontrolname="password"]').type('123');
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible')

  })

  it('Deve realizar login com usuário válido', () => {
    
    cy.get('input[formcontrolname="userName"]').type('teste');
    cy.get('input[formcontrolname="password"]').type('23345678');
    cy.contains('button', 'login').click();
    cy.contains('a', 'Logout').should('be.visible');

  })

  it('Deve retornar mensagem de erro ao realizar login com usuário inválido', () => {
    
    cy.get('input[formcontrolname="userName"]').type('testeaaaaa');
    cy.get('input[formcontrolname="password"]').type('12345678');
    cy.contains('button', 'login').click();
    cy.on('window:alert'), (str) => {
      expect(str).to.equal('Invalid user name or password')
    };

  })

})