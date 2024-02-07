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

      cy.contains('tildatoi is logged in')
    })

    it('fails with wrong credentials', function() {
      cy.get('#username').type('mluukkai')
      cy.get('#password').type('salainen123')
      cy.get('#login-button').click()

      cy.contains('wrong username or password')

    })

    describe('When logged in', function() {
      beforeEach(function() {
        cy.get('#username').type('mluukkai')
        cy.get('#password').type('salainen')
        cy.get('#login-button').click()
      })
  
      it('A blog can be created', function() {
        cy.contains('new blog').click()
        cy.get('#title').type('blog')
        cy.get('#author').type('author')
        cy.get('#url').type('url')
        cy.get('#create-button').click()

        cy.contains('blog')
      })

      it.only('A blog can be liked', function() {
        cy.get('#view-button').click()
        cy.get('#like-button').click()
        cy.contains('likes: 3')

      })
    })
  })

})