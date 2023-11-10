import { before } from 'local-cypress'

describe('template spec', () => {
  before('visit url', () => {
    cy.visit('/')
  })
  const test = 'yesfdsssssssssssssssssssssssssssssdasdasdasdasdasdsadasd'

  it('get textarea element, type some  text', () => {
    cy.get('#hw1-textarea').type(test)
    cy.get('#hw1-button').click()
    cy.get('#hw1-message-1').should('contain.text', test)
  })

  it('get avatar. Should be visible and have width grater than 0', () => {
    cy.get('#hw1-avatar-0')
      .should('be.visible')
      .and('have.prop', 'width')
      .should('be.greaterThan', 0)
  })

  it('get name.Should be have a name', () => {
    cy.get('#hw1-name-1').should('be.visible').and('not.be.empty')
  })
})
