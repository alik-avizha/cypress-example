import SuperButton from '../../src/hw04/common/c2-SuperButton/SuperButton'

describe('SuperButton.cy.tsx', () => {
  const text = 'Click'

  it('playground', () => {
    cy.mount(<SuperButton>{text}</SuperButton>)
    cy.contains('button', text)
  })
})
