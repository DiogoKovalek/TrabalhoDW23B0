function aumento(salario){
    return salario + (salario * 0.15);
}
function desconto(salario){
    salario = aumento(salario);
    return salario - (salario*0.08);
}

let salario = 2200;

console.log("Salario com apenas o aumento >>> R$" + aumento(salario));
console.log("Salario apos os impostos     >>> R$" + desconto(salario));