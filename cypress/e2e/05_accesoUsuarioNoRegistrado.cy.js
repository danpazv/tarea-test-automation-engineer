describe('Acceso usuario no registrado', () => {
    const url = 'https://test-adl.leonardojose.dev';
  
    it('No debe permitir login con credenciales inválidas', () => {
      cy.visit(`${url}/login`);
  
      // Ingresar email y contraseña no registrados
      cy.get('#email').type('testeradl@test.com');
      cy.get('#password').type('testercito@2025');
  
      // Hacer clic en el botón de login
      cy.get('button[type="submit"]').click();
  
      // Verificar que muestra mensaje de error
      cy.contains('Las credenciales proporcionadas son incorrectas').should('be.visible');
  
      // Verificar que sigue en la página de login
      cy.url().should('include', '/login');
    });
  });
  