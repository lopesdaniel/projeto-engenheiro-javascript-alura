class NegociacaoController {

    constructor(){
        
        let $ = document.querySelector.bind(document);
    
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes(model => {
            return this._negociacoesView.update(model);
        });
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
        this._negociacoesView.update(this._listaNegociacoes);
    }

    adiciona(event ){
        event.preventDefault();

        // let data = new Date(this._inputData.value.replace(/-/g, ','));

        // let data = new Date(...
        //     this._inputData.value
        //     .split('-')
        //     .map((item,indice) => item - indice % 2)
        //     );

        // let data = new Date(...this._inputData.value.split('-'));

        this._listaNegociacoes.adiciona(this._criaNegociacao());

        this._mensagem.texto = 'Negociação adiconada com sucesso!'

        

        this._mensagemView.update(this._mensagem);

        this._limpaFormulario();

        console.log(this._listaNegociacoes.negociacoes);

        // console.log(DateHelper.dataParaTexto(this._criaNegociacao.data));
    }

    apaga(){
        this._listaNegociacoes.esvazia();
        

        this._mensagem.texto = 'Lista de Negociações apagada com sucesso !';
        this._mensagemView.update(this._mensagem);
    }

    _criaNegociacao()
    {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario()
    {
        this._inputData.value = '';
        this._inputQuantidade.value = 0;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
    
    

}