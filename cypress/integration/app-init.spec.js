describe('App initialization', () => {
  it('Displays todos from API on load', () => {
    cy.server();

    //O arquivo está dentro de fixtures: todos.json
    cy.route('GET', '/ToDoModels', 'fixture:todos');    

    /*
    cy.route('GET', '/ToDoModels', [
      {
        "id": 1,
        "title": "New todo",
        "completed": false
      },
      {
        "id": 2,
        "title": "Do something",
        "completed": false
      },
      {
        "id": 3,
        "title": "Other thing",
        "completed": false
      },
      {
        "id": 4,
        "title": "Okay",
        "completed": false
      }
    ]);
    cy.seedAndVisit();
    */

    cy.visit('/');
    cy.get('.task-wrapper').should('have.length', 4);
  });
});
