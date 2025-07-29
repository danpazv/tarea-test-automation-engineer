describe('Prueba de login', () => {
    it('Login correcto (usuario registrado)', () => {
      cy.visit('https://test-adl.leonardojose.dev');
  
      cy.get('#email').type('testeradl@test.com');
      cy.get('#password').type('Tester@2025');
      cy.get('button[type="submit"]').click();
  
      cy.contains('Dashboard').should('exist'); // Verifica que accedió
    });
  });
  
  describe('Eliminar producto - Usuario registrado', () => {
    const url = 'https://test-adl.leonardojose.dev';
  
    it('Debe eliminar el producto Iphone 16 Pro Max correctamente', () => {
      // Login
      cy.visit(`${url}/login`);
      cy.get('#email').type('testeradl@test.com');
      cy.get('#password').type('Tester@2025');
      cy.get('button[type="submit"]').click();
      cy.contains('Dashboard').should('exist');
  
      // Ir a artículos
      cy.visit(`${url}/articulos`);
  
      // Forzar vista de escritorio
      cy.viewport(1280, 720);
  
      // Buscar el producto "Iphone 16 Pro Max" y hacer clic en el botón Eliminar
      cy.contains('IPhone 16 Pro Max')
        .parents('tr')
        .find('button.text-red-600')
        .click({ force: true });
  
      // Manejar confirmación si es alerta nativa
      cy.on('window:confirm', () => true);
  
      // Verificar mensaje de éxito tras eliminar
      cy.contains('Artículo eliminado con éxito').should('be.visible');
  
      // Verificar que el producto ya no aparece en la lista
      cy.contains('Iphone 16 Pro Max').should('not.exist');
    });
  });
  