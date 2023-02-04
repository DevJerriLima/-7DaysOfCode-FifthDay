let addProdutos = true;
const lCongelados =[], lFrutas = [], lFrios = [], lLaticinos = [], lCarnes = [], lBebidas = [], lCereais = [];


while(addProdutos == true){
    if (prompt("Deseja adicionar um item a sua lista de compras? ") == "sim"){
        const alimento = prompt("Qual alimento deseja adicionar?");
        const qualListaAdd = prompt("Escolha a categoria Congelados, Frutas, Frios, Laticinios, Carnes, Bebidas ou Cereais.");
        switch (qualListaAdd){
            case 'Congelados':
                lCongelados.push(alimento);
                break;
            case 'Frutas':
                lFrutas.push(alimento);
                break;
            case 'Frios':
                lFrios.push(alimento);
                break;
            case 'Laticinios':
                lLaticinos.push(alimento);
                break;
            case 'Carnes':
                lCarnes.push(alimento);
                break;
            case 'Bebidas':
                lBebidas.push(alimento);
                break;
            case 'Cereais':
                lCereais.push(alimento);
                break;
        }
    }else{
        addProdutos = false;
    }   
}
alert(lCongelados, lBebidas);

   

