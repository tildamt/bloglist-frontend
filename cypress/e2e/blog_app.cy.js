describe('Blog app', function() {
  beforeEach(function() {
    //cy.request('POST', 'http://localhost:3003/api/testing/reset')
    cy.visit('http://localhost:5173')
  })

  it('Login form is shown', function() {
    cy.contains('Log in to application')
    cy.contains('username')
    cy.contains('password')
  })

  describe('Login', function() {
    it('succeeds with correct credentials', function() {
      /*cy.contains('login').click()*/
      cy.get('#username').type('mluukkai')
      cy.get('#password').type('salainen')
      cy.get('#login-button').click()

      cy.contains('mluukkai is logged in')
    })

    it.only('fails with wrong credentials', function() {
      cy.get('#username').type('mluukkai')
      cy.get('#password').type('salainen123')
      cy.get('#login-button').click()

    })
  })

})