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
        //cy.request('POST', 'http://localhost:3003/api/testing/reset')
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

      it('A blog can be liked', function() {
        cy.get('#view-button').click()
        cy.get('#like-button').click()
        cy.contains('likes: 3')

      })

      it('A blog can be deleted', function() {
        cy.contains('new blog').click()
        cy.get('#title').type('testiblogi1')
        cy.get('#author').type('author')
        cy.get('#url').type('url')
        cy.get('#create-button').click()

        cy.get('#view-button').click()
        cy.get('#delete-button').click()
        cy.contains('testiblogi1').should('not-exist')
      })
    })

    describe('Blog deletion', function() {
      beforeEach(function() {
        
        cy.get('#username').type('mluukkai')
        cy.get('#password').type('salainen')
        cy.get('#login-button').click()
      });
    
      it('User who added a blog can see delete button', function() {
  
        cy.contains('testiblogi1').click()

      })
    
      it.only('Other users cannot see delete button for blogs added by different users', function() {
        cy.contains('logout').click()
    
        cy.request('POST', 'http://localhost:3003/api/users', {
          username: 'user2',
          name: 'User Two',
          password: 'password'
        })
    
        cy.get('#username').type('user2')
        cy.get('#password').type('password')
        cy.get('#login-button').click()
    
        cy.contains('Test Blog').parent().should('not.contain', '#delete-button')
      })
    })
    
  })

})