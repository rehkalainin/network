describe('Cypress Tests', () => {
  it('None-existent login test', () => {
    cy.fixture('cypressTest').then((data) => {
      cy.log('Переход на страницу авторизации')
      cy.visit(data.main_url)

      cy.log('Ввод несуществующего логина')
      cy.get('[data-cy=loginForm]').type(data.none_existent_login)

      cy.log('Клик по кнопке Войти')
      cy.contains('Submit').click()

      cy.log('Проверка что появился элемент сигнализирущий об ошибке')
      cy.contains('Required').should('exist')
    })
  })
  it('Non-existent password test', () => {
    cy.fixture('cypressTest').then((data) => {
      cy.visit(data.main_url)
      cy.get('[data-cy=loginForm]').type(data.none_existent_login)
      cy.get('[data-cy=passwordForm]').type(data.none_existent_password)
      cy.contains('Submit').click()
      cy.get('[data-cy=error]').should('exist')
    })
  })
})
