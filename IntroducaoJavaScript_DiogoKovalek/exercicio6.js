let a = 4;
let b = 7;
let c = 4;


if(a < b+c && b < a+c && c < a+b && a > 0 && b > 0 && c > 0){
    if(a==b && b==c && c==a){
        console.log("Triangulo Equilatero");
    }else if(a==b || b==c || c==a){
        console.log("Tiangulo Isoceles");
    }else{
        console.log("Triangulo Escaleno");
    }    
}else{
    console.log("Isso nao e um triangulo");
}
