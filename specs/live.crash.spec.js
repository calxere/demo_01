import game from '../pages/game'

describe('Live crash verification', () => {

    let name = 'livecrash' + data.generate.number()
    let chatMessage = "Hello world!"

    it('should open the game', function () {
        game.initGame('Live Crash')
    })

    it('should start the game', function () {
        cy.get(game.liveCrash_playerName, {timeout: 30000}).should('be.visible').type(name).should('have.value', name)
        cy.get(game.liveCrash_playerNameSubmit, {timeout: 30000}).click().should('not.exist', {timeout: 30000})
    });

    it('should place a bet', function () {
        game.placeBet()
    });

    it('should check bet history', function () {
        cy.get(game.liveCrash_menu).click()
        cy.get(game.liveCrash_menuItem).contains('History').click()
        cy.get(game.liveCrash_betHistoryItem).should('have.length.at.least', 1)
        cy.get(game.liveCrash_menu).click()
    });

    it('should send chat message and assert appearance', function () {
        cy.get(game.liveCrash_chatOpen, {timeout: 30000}).click()
        cy.get(game.liveCrash_chatMessageInput).type(chatMessage).type('{enter}')
        cy.get(game.liveCrash_chatMessage).should('contain.text', chatMessage)
    });

})


