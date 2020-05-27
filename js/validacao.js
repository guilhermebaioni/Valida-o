//Apenas letra/acentos no campo nome
jQuery('#nome').keyup(function () {
    this.value = this.value.replace(/[^A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/g, '');
});

var nome = document.getElementById("nome");

//Validação data de nascimento
var formulario = document.getElementById("formulario");
var nascimento = document.getElementById("dataNascimento");

var mensagemErro = function (event, input, mensagem) {
    //input.setCustomValidity(mensagem);
    alert(mensagem);
    event.preventDefault();
}

formulario.addEventListener("submit", function (event) {
    var data = nascimento.value;

    //nenhuma data informada
    if (!data) {
        return mensagemErro(event, nascimento, "Campo nascimento não informado");
    }

    //O browser não realizou a conversão de forma nativa
    if (!(data instanceof Date)) {
        data = data.split('/').reverse().join('-');
        data = Date.parse(data);
        if (!isNaN(data)) {
            data = new Date(data);
        }
    }

    //a data informada não é valida
    if (!data) {
        return mensagemErro(event, nascimento, "Campo nascimento não é valido");

    }
    var atual = new Date();
    data.setFullYear(data.getFullYear());

    if (data >= atual) {
        return mensagemErro(event, nascimento, "Data inválida");
    }

    var dataMenor = 1930;
    data.setFullYear(data.getFullYear());
    if (data <= dataMenor) {
        return mensagemErro(event, nascimento, "Data inválida");
    }
})



$("#formulario").validate({
    rules: {
        nome: {
            required: true,
            minlength: 3
        },
        email: {
            required: true
        },
        cpf: {
            required: true
        },
        senha: {
            required: true
        },
        confirmaSenha: {
            required: true
        },
        dataNascimento: {
            required: false
        }
    },
    messages: {
        nome: {
            required: "Informe o nome!",
            minlength: "Nome inválido"
        },
        email: {
            required: "Preencha o campo e-mail!",
            email: "Informe um e-mail válido: lll@ll.ll"
        },
        cpf: {
            required: "Preencha o campo CPF!",
            cpf: "Informe um cpf válido"
        },

        celular: {
            required: "Preencha seu telefone!"
        },

        senha: {
            required: "Preencha o campo senha!",
            senha: "Informe uma senha válida"
        },
        confirmaSenha: {
            required: "Senhas não condizem!",
            confirmaSenha: "Senha não condizem!"
        },
        dataNascimento: {
            required: "Preencha sua data de nascimento!",
            dataNascimento: "Informe uma data de nascimento válida!"
        },
    }
});
