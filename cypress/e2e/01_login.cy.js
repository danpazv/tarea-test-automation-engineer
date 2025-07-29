describe('Acceso y consulta de productos - Usuario registrado', () => {
    const url = 'https://test-adl.leonardojose.dev';
  
    it('Login correcto y acceso a productos', () => {
      cy.visit(`${url}/login`);
  
      cy.get('#email').type('testeradl@test.com');
      cy.get('#password').type('Tester@2025');
      cy.get('button[type="submit"]').click();
  
      cy.contains('Dashboard').should('exist'); // Verifica que accedió
  
      // Navegar a la página de productos
      cy.visit(`${url}/articulos`);
  
      // Verificar que se muestra la lista de productos 
      cy.contains('Crear Artículo').should('exist');
    });
  });
  