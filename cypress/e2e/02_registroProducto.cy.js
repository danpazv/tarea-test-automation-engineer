describe('Prueba de login', () => {
    it('Login correcto (usuario registrado)', () => {
      cy.visit('https://test-adl.leonardojose.dev');
  
      cy.get('#email').type('testeradl@test.com');
      cy.get('#password').type('Tester@2025');
      cy.get('button[type="submit"]').click();
  
      cy.contains('Dashboard').should('exist'); // Verifica que accedió
    });
  });
  
  describe('Registrar producto - Usuario registrado', () => {
    const url = 'https://test-adl.leonardojose.dev';
  
    it('Debe registrar un nuevo producto iPhone 16 correctamente', () => {
      // Primero hacemos login para poder acceder (o asumir que ya está logueado)
      cy.visit(`${url}/login`);
      cy.get('#email').type('testeradl@test.com');
      cy.get('#password').type('Tester@2025');
      cy.get('button[type="submit"]').click();
      cy.contains('Dashboard').should('exist');
  
      // Ahora navegamos a la página de artículos
      cy.visit(`${url}/articulos`);
  
      // Hacemos clic en el botón "Crear Artículo"
      cy.contains('button', 'Crear Artículo').click();
  
      // Verificamos que cargó el formulario
      cy.url().should('include', '/articulos/nuevo');
  
      // Completamos el formulario
      cy.get('input#sku').type('IPHONE-16-dpaz');
      cy.get('input#name').type('IPhone 16');
      cy.get('input#stock_quantity').clear().type('500');
      cy.get('input#cost_price').clear().type('850');
      cy.get('input#sale_price').clear().type('1389990');
      cy.get('select#unit').select('Unidad');
  
      // Enviamos el formulario
      cy.contains('button', 'Guardar Cambios').click();
  
      // Verificamos que el producto aparece en la lista
      cy.url().should('include', '/articulos');
      cy.contains('IPhone 16').should('exist');
    });
  });
  