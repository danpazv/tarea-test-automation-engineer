describe('Prueba de login', () => {
  it('Login correcto (usuario registrado)', () => {
    cy.visit('https://test-adl.leonardojose.dev');

    cy.get('#email').type('testeradl@test.com');
    cy.get('#password').type('Tester@2025');
    cy.get('button[type="submit"]').click();

    cy.contains('Dashboard').should('exist'); // Verifica que accedió
  });
});

describe('Actualizar producto - Usuario registrado', () => {
  const url = 'https://test-adl.leonardojose.dev';

  it('Debe actualizar el producto Iphone 16 a Iphone 16 Pro Max correctamente', () => {
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

    // Buscar el producto "Iphone 16" y hacer clic en el botón Editar
    cy.contains('IPhone 16')
      .parents('tr')
      .find('button.text-indigo-600')
      .click({ force: true });

    // Verificar que se abrió el formulario de edición
    cy.url().should('include', '/articulos/');
    cy.url().should('include', '/editar');

    // Actualizar campos correctamente
    /*cy.get('input#name').then($input => {
        // Vaciar el valor directamente en el DOM
        $input.val('');
        
        // Disparar evento input para que se actualice el binding/reactividad
        $input[0].dispatchEvent(new Event('input', { bubbles: true }));
      }).then(() => {
        // Ahora sí escribir el texto nuevo
        cy.get('input#name').type('IPhone 16 Pro Max', { delay: 100, force: true });
      });*/
      cy.get('input#name').then($input => {
        // Limpiar con .clear() con fuerza
        cy.wrap($input).clear({ force: true });
  
        // Seleccionar todo el texto y borrar con backspace
        cy.wrap($input).type('{selectall}{backspace}', { force: true });
  
        // Escribir el nuevo texto despacio para evitar concatenaciones
        cy.wrap($input).type('  Pro Max', { delay: 100, force: true });
      });
      
      
        // Escribir nuevo texto
      

      
      
    cy.get('input#stock_quantity').clear().type('85');
    cy.get('input#cost_price').clear().type('839990');
    cy.get('input#sale_price').clear().type('1219990');
    cy.get('select#unit').select('Unidad');

    // Enviar el formulario
    cy.get('button[type="submit"]').contains('Guardar Cambios').click();

    // Verificar que el producto actualizado aparece en la lista
    cy.url().should('include', '/articulos');
    cy.contains('IPhone 16 Pro Max').should('exist');
  });
});
