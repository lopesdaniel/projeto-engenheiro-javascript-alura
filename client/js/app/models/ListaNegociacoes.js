class ListaNegociacoes {
    constructor(contexto, gatilho)
    {
        this._negociacoes = [];
        this._gatilho = gatilho;
        this._contexto = contexto;
    }

    adiciona(negociacao)
    {
        this._negociacoes.push(negociacao);
        //this._gatilho(this);
        Reflect.apply(this._gatilho, this._contexto, [this]);
    }
    
    get negociacoes()
    {
        return [].concat(this._negociacoes);
    }
    
    esvazia(){
        this._negociacoes = [];
        //this._gatilho(this);
        Reflect.apply(this._gatilho, this._contexto, [this]);
    }

}