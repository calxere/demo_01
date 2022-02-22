const game = {

    initGame(gameName) {
        cy.visit('/')
        cy.get(this.gameQr, {timeout: 30000}).should('be.visible')
        cy.get(this.toggleMobile).parent().click()
        cy.get(this.selectGame).click()
        cy.contains(gameName).click()
        cy.window().then(win => {
            cy.stub(win, 'open').callsFake((url, target) => {
                return win.open.wrappedMethod.call(win, url, '_self')
            }).as('open')
        })
        cy.get(this.gameOpen).click()
    },

    placeBet() {
        cy.contains('Place your bets', {timeout: 60000}).should('be.visible')
        cy.get(this.liveCrash_betContainer).each((el) => {
            cy.wrap(el).click()
        })
        cy.contains('Bets closing').should('be.visible')
        cy.contains('Place your bets', {timeout: 120000}).should('be.visible')
    },

    //game init page
    gameQr: '[id="qrCode"]',
    toggleMobile: '[id="mobile-toggle"]',
    selectGame: '[data-id="game-select"]',
    gameOpen: '.open-green',

    //Live crash
    liveCrash_playerName: '[placeholder="Please pick a nickname to play"]',
    liveCrash_playerNameSubmit: '*[class^="ModalMessage_message"] button',
    liveCrash_betContainer: '*[class^="Bet_container"]',
    liveCrash_menu: '*[class^="Controller_menuIcon"]',
    liveCrash_menuItem: '*[class^="SideBar_menu"]',
    liveCrash_betHistoryItem: '*[class^="History_round"]',
    liveCrash_chatOpen: '*[class^="Chat_container"]',
    liveCrash_chatMessageInput: '[placeholder="Type a message"]',
    liveCrash_chatMessage: '*[class^="ChatMessages_text"]',

}

export default {...game}