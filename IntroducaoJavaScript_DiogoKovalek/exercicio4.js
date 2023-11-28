

let quant_dias = 453;

let quant_anos = Math.trunc(quant_dias/365);
quant_dias = quant_dias % 365;

let quant_meses = Math.trunc(quant_dias/30);
quant_dias = quant_dias % 30;

console.log("Quantidade de Anos >>>" + quant_anos);
console.log("Quantidade de Meses >>>" + quant_meses);
console.log("Quantidade de Dias >>>" + quant_dias);