let view = function (){
    this.Core = {
        // #region init
        init: function(){
            this.rootElement = $('#root');
            this.getInit()
        },
        getInit: async function(data){
            this.rootElement.append(
                this.templateView()
            )
        },
        // #endregion
        // #region handlers
        handleShowCharacters: async function(){
            let requestCharacters = await this.getCharacters()
            console.log(requestCharacters)
            this.renderArea.empty()
            this.renderArea.append(
                $('<div>').attr({ class: 'c-cards'}).append(
                    requestCharacters.results.map(card => {
                        return this.templateCardCharacter(card)
                    })
                )
            )
        },

        handleShowEpisodes: async function(){
            let requestEpisodes = await this.getEpisodes()
            console.log(requestEpisodes)
            this.renderArea.empty()
            this.renderArea.append(
                $('<div>').attr({ class: 'c-cards'}).append(
                    requestEpisodes.results.map(card => {
                        return this.templateCardEpisode(card)
                    })
                )
            )
        },

        handleShowLocations: async function(){
            let requestLocations = await this.getLocations()
            console.log(requestLocations)
            this.renderArea.empty()
            this.renderArea.append(
                $('<div>').attr({ class: 'c-cards'}).append(
                    requestLocations.results.map(card => {
                        return this.templateCardLocation(card)
                    })
                )
            )
        },

        // #region templates
        templateView: function(context = this){
            context.btnCharacters = $('<button>').text('Characters').on('click', async () => {
                await this.handleShowCharacters()
            })
            context.btnEpisodes = $('<button>').text('Episodes').on('click', () => {
                this.handleShowEpisodes()
            })
            context.btnLocations = $('<button>').text('Locations').on('click', () => {
                this.handleShowLocations()
            })

            context.renderArea = $('<div>').attr({ id: 'js-view-render' })
            
            return $('<div>').append(
                $('<h1>').text('Rick and Morty API'),
                $('<div>').append(
                    context.btnCharacters,
                    context.btnEpisodes,
                    context.btnLocations
                ),
                context.renderArea,
            )
        },
        templateMenu: function(context = this){
        },
        templateRender: function(context = this){
        },
        templateCards: function(context = this){
        },
        templateCardCharacter: function(data){
            return $('<div>').attr({ class: 'c-card'}).append(
                $('<div>').attr({ class: 'c-card__header'}).append(
                    $('<h2>').text(data.name)
                ),
                $('<div>').attr({ class: 'c-card__body'}).append(
                    $('<img>').attr({ src: data.image })
                ),
                $('<div>').attr({ class: 'c-card__footer'}).append(
                    $('<button>').text('Show More')
                )
            )
        },
        templateCardEpisode: function(data){
            return $('<div>').attr({ class: 'c-card'}).append(
                $('<div>').attr({ class: 'c-card__header'}).append(
                    $('<h2>').text(`${data.name} - ${data.episode}`)
                ),
                $('<div>').attr({ class: 'c-card__body'}).append(
                    $('<img>').attr({ src: data.image })
                ),
                $('<div>').attr({ class: 'c-card__footer'}).append(
                    $('<button>').text('Show More')
                )
            )
        },
        templateCardLocation: function(data){
            return $('<div>').attr({ class: 'c-card'}).append(
                $('<div>').attr({ class: 'c-card__header'}).append(
                    $('<h2>').text(data.name)
                ),
                $('<div>').attr({ class: 'c-card__body'}).append(
                    $('<img>').attr({ src: data.image })
                ),
                $('<div>').attr({ class: 'c-card__footer'}).append(
                    $('<button>').text('Show More')
                )
            )
        },
        // #endregion
        // #region API's requests 
        getCharacters: async function(params = {}){
            let request = await axios.get('https://rickandmortyapi.com/api/character', params)
            return request.data;
        },
        getEpisodes: async function(params = {}){
            let request = await axios.get('https://rickandmortyapi.com/api/episode', params)
            return request.data;
        },
        getLocations: async function(params = {}){
            let request = await axios.get('https://rickandmortyapi.com/api/location', params)
            return request.data;
        },
        // #endregion
    }
}

$(function (){
    let oView = new view();
    oView.Core.init();
})