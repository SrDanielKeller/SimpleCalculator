var valor;
var res;

function botao(num) {
   valor = document.calc.visor.value += num;
}

function limp(){
    document.calc.visor.value = " ";
}

function resultado(){
    res = eval(valor);
    document.calc.visor.value = res;
}