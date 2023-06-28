class ViewCalculator {

    btnNumber0 = ''
    btnNumber1 = ''
    btnNumber2 = ''
    btnNumber3 = ''
    btnNumber4 = ''
    btnNumber5 = ''
    btnNumber6 = ''
    btnNumber7 = ''
    btnNumber8 = ''
    btnNumber9 = ''
    btnSumar = ''
    btnRestar = ''
    btnMultiplicar = ''
    btnDividir = ''
    btnCalcular = ''
    numbers = []
    calc = 0
    isNew = true

    constructor() {
        this.canvas = $('.container')
    }

    init() {
        this.canvas.append(this.templateViewCalculator());
    }

    addNumber(number) {
        if (!this.isNew) this.textDisplay.text('')

        this.textDisplay.text(this.textDisplay.text() + number)
        this.calc = parseInt(this.textDisplay.text())
    }

    addOperation(operation) {
        this.operation = operation
        this.numbers.push(this.calc)
        this.textDisplay.text('')

        switch (this.operation) {
            case 'suma':
                this.textDisplayOld.text(this.calc + ' + ')
                break;
            case 'resta':
                this.textDisplayOld.text(this.calc + ' - ')
                break;
            case 'multiplicacion':
                this.textDisplayOld.text(this.calc + ' * ')
                break;
            case 'division':
                this.textDisplayOld.text(this.calc + ' / ')
                break;
        }

        if (this.numbers.length > 1) {
            this.calcular()
        }
    }

    calcular() {
        switch (this.operation) {
            case 'suma':
                this.calc = this.numbers[0] + this.numbers[1]
                this.textDisplay.text(this.calc)
                break;
            case 'resta':
                this.calc = this.numbers[0] - this.numbers[1]
                this.textDisplay.text(this.calc)
                break;
            case 'multiplicacion':
                this.calc = this.numbers[0] * this.numbers[1]
                this.textDisplay.text(this.calc)
                break;
            case 'division':
                this.calc = this.numbers[0] / this.numbers[1]
                this.textDisplay.text(this.calc)
                break;
        }
        this.numbers = []
        this.isNew = false
    }

    reset() {
        this.numbers = []
        this.calc = 0
        this.textDisplay.text('')
        this.textDisplayOld.text('')
    }

    templateViewCalculator() {

        this.btnReset = $('<div>').addClass('btn-operator calcular').text('C').on('click', () => {
            this.reset()
        })

        this.btnSumar = $('<div>').addClass('btn-operator').text('+').on('click', () => {
            this.addOperation('suma')
        })

        this.btnRestar = $('<div>').addClass('btn-operator').text('-').on('click', () => {
            this.addOperation('resta')
        })

        this.btnMultiplicar = $('<div>').addClass('btn-operator').text('*').on('click', () => {
            this.addOperation('multiplicacion')
        })

        this.btnDividir = $('<div>').addClass('btn-operator').text('/').on('click', () => {
            this.addOperation('division')
        })

        for (let i = 0; i < 10; i++) {
            this['btnNumber' + i] = $('<div>').addClass('btn-number').text(i).on('click', () => {
                this.addNumber(i)
            })
        }

        this.btnCalcular = $('<div>').addClass('btn-operator calcular').text('Calcular')

        this.textDisplay = $('<span>').attr('class', 'display-text-current')
        this.textDisplayOld = $('<span>').attr('class', 'display-text-old')

        return $('<div>').addClass('calculadora').append(
            $('<span>').addClass('marca').text('JESENIA'),
            $('<div>').addClass('display').append(
                this.textDisplayOld,
                this.textDisplay
            ),
            $('<div>').addClass('buttons').append(
                $('<div>').addClass('operators').append(
                    this.btnReset,
                    this.btnSumar,
                    this.btnRestar,
                    this.btnMultiplicar,
                    this.btnDividir
                ),
                $('<div>').addClass('numbers').append(
                    this.btnNumber1,
                    this.btnNumber2,
                    this.btnNumber3,
                    this.btnNumber4,
                    this.btnNumber5,
                    this.btnNumber6,
                    this.btnNumber7,
                    this.btnNumber8,
                    this.btnNumber9,
                    this.btnNumber0,
                ),
                $('<div>').addClass('operators').append(
                    this.btnCalcular
                )
            )
        )
    }
}

$(function () {
    let viewCalculator = new ViewCalculator();
    viewCalculator.init();
})