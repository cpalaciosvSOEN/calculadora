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
        // #region templates
        templateCharacters: function(context = this){
        },
        templateEpisodes: function(context = this){
        },
        templateLocation: function(context = this){
        },

        templateView: function(context = this){
            context.btnCharacters = $('<button>').text('Characters').on('click', () => {

            })
            context.btnEpisodes = $('<button>').text('Episodes').on('click', () => {

            })
            context.btnLocations = $('<button>').text('Locations').on('click', () => {
                
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
        templateCard: function(context = this){
        },
        // #endregion
        // #region API's requests 
        getCharacters: async function(){
            let request = await axios.get('https://rickandmortyapi.com/api/character')
            return request.data;
        },
        // #endregion
    }
}

$(function (){
    let oView = new view();
    oView.Core.init();
})