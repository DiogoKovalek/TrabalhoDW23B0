function calcDistancia(x1,y1,x2,y2){
    c1 = Math.pow(x2-x1,2);
    c2 = Math.pow(y2-y1,2);
    return Math.sqrt(c1 + c2);
}

let x1 = 1;
let y1 = 1;
let x2 = 3;
let y2 = 3;
 
let distancia = calcDistancia(x1,y1,x2,y2);
console.log("A distancia entre os pontos e >>> " + distancia);