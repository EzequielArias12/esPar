function esParONo(numero){
    if(numero===0){
        return 'Debes ingresar un numero distincto';
    }
    return numero % 2 === 0 ? "El numero es par": "El numero es impar";
}
esParONo(4);