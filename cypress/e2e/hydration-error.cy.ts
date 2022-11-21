describe('Hydration error', () => {
  it('no hydration error on the index page', () => {
    cy.visit('/')

    cy.reload()
    cy.reload()
  })
})

export { }
