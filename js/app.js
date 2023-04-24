let view = function (){
    this.Core = {
        // #region init
        init: function(){
            this.rootElement = $('#root');
            this.getInit()
        },
        getInit: async function(){
            try{
                this.rootElement.append(
                    this.templateView({
                        title: 'Rick and Morty',
                        subtitle: 'The best TV show',
                        description: 'Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network\'s nighttime Adult Swim programming block. The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures.',
                        body: [
                            this.templateMenu(),
                            this.templateRender()
                        ]
                    }),
                )
            }catch(error){
                // BI.handleErrorNuevo(error)
                console.error(error)
            }
        },
        // #endregion
        // #region templates
        templateCharacters: function(context = this){
        },
        templateEpisodes: function(context = this){
        },
        templateLocation: function(context = this){
        },

        templateView: function(context = this){
            context.containerView = $('<div>').attr({ 
                id: 'container',
                class: 'container' 
            })
            context.containerView.append(
                $('<h1>').text(context.title),
                $('<h2>').text(context.subtitle),
                $('<p>').text(context.description),
                context.body
            )
            return context.containerView
        },
        templateMenu: function(context = this){
            context.buttonCharacters = $('<button>').text('Characters')
            context.buttonLocation = $('<button>').text('Location')
            context.buttonEpisodes = $('<button>').text('Episodes')

            context.buttonCharacters.on('click', () => {
                context.renderCharacters(context)
            })

            context.buttonLocation.on('click', () => {
                context.renderLocation(context)
            })

            context.buttonEpisodes.on('click', () => {
                context.renderEpisodes(context)
            })

            context.containerMenu = $('<div>').addClass('container')

            return context.containerMenu.append(
                context.buttonCharacters, 
                context.buttonLocation, 
                context.buttonEpisodes
            )
        },
        templateRender: function(context = this){
            context.containerRender = $('<div>').attr({ 
                id: 'container',
                class: 'js-render-data' 
            })
            return context.containerRender
        },

        templateCards: function(context = this){
            context.containerCards = $('<div>').attr({
                style: `
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                `,
                class: 'js-cards'
            })

            return context.containerCards 
        },
        templateCard: function(context = this){
            context.containerCard = $('<div>').attr({
                style: `
                    width: 300px;
                    height: 300px;
                    border: 1px solid black;
                    margin: 10px;
                    padding: 10px;
                `,
                class: 'js-card'
            })

            return context.containerCard
        },
        // #endregion
        // #region API's requests 
        getCharacters: async function(){
            let request = await axios.get('https://rickandmortyapi.com/api/character')
            return request.data;
        },
    }
}

$(function (){
    let oView = new view();
    oView.Core.init();
})