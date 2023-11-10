import { before } from 'local-cypress'

describe('template spec', () => {
  before('visit url', () => {
    cy.visit('/')
  })

  const url = 'https://samurai.it-incubator.io/api/3.0/homework/test'
  it('click send true button. Should be disabled after click', () => {
    cy.intercept('POST', url, {
      statusCode: 200,
      delay: 5000,
    })
      .get('#hw13-send-true')
      .should('be.enabled')
      .click()
      .get('#hw13-send-true')
      .should('be.disabled')
      .wait(5000)
      .get('#hw13-send-true')
      .should('not.be.disabled')
  })
})
