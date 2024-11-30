let listaDeNumerosSorteador= [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirMensagemInicial();
function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 e 10');
    
}


function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p',`O número secreto é menor do que ${chute}`);
    }   else{
            exibirTextoNaTela('p',`O número secreto é maior do que ${chute}`);
    }
    tentativas++;
    limparCampo();
}
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value ='';
}
function reiniciarJogo() {
    numeroSecreto= gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteador.length;
    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteador = [];
    }
    if (listaDeNumerosSorteador.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteador.push(numeroEscolhido);
        return numeroEscolhido;
    }
    
    
}