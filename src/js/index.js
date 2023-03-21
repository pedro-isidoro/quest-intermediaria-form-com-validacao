const nome = document.getElementById('nome');
// console.log(nome);
const email = document.getElementById('email');
// console.log(email);
const telefone = document.getElementById('telefone');
// console.log(telefone);
const mensagem = document.getElementById('mensagem');
// console.log(mensagem);
const btnEnviar = document.getElementById('btn-enviar');
// console.log(btnEnviar);
const aviso = document.querySelectorAll('.aviso');
// console.log(aviso);

function verificandoSeEstaVazio(input, i){
    let temTexto = input.value; 
    let avisoP = aviso[i];
    if(temTexto){
        input.style.borderColor = '#3ccc87';
        input.style.marginBottom = '15px';
        avisoP.innerHTML = " ";
    }else{
        input.style.borderColor = '#F52E2E';
        input.style.marginBottom = '0px';
        avisoP.innerHTML = "campo obrigatório";
        avisoP.style.color = '#F52E2E';
    };
};

btnEnviar.addEventListener("click", () => {
    verificandoSeEstaVazio(nome, 0);
    verificandoSeEstaVazio(email, 1);
    verificandoSeEstaVazio(telefone, 2);
    verificandoSeEstaVazio(mensagem, 3);
});