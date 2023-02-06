let addProdutos = true;
const lCongelados =[], lFrutas = [], lFrios = [], lLaticinos = [], lCarnes = [], lBebidas = [], lCereais = [];


while (addProdutos == true){
    const escolha = prompt("Deseja adicionar ou remover um item a sua lista de compras?  Responda com Adicionar ou Remover");
    if (escolha == "Adicionar"){
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
    }else if(escolha == "Remover"){           
        const qualListaRemover = prompt("Qual categoria de alimento pertence o alimento a ser removido? Congelados, Frutas, Frios, Laticinios, Carnes, Bebidas ou Cereais");
        switch(qualListaRemover){
            case 'Congelados':
                var alimento = lCongelados.indexOf(prompt("Qual alimento deseja remover?"));
                var removedItem = lCongelados.splice(alimento, 1);
                alert (`${removedItem} removido.`);
                break;
            case 'Frutas':
                var alimento = lFrutas.indexOf(prompt("Qual alimento deseja remover?"));
                var removedItem = lFrutas.splice(alimento, 1);
                alert (`${removedItem} removido.`);
                break;
            case 'Frios':
                var alimento = lFrios.indexOf(prompt("Qual alimento deseja remover?"));
                var removedItem = lFrios.splice(alimento, 1);
                alert (`${removedItem} removido.`);
                break;
            case 'Laticinios':
                var alimento = lLaticinos.indexOf(prompt("Qual alimento deseja remover?"));
                var removedItem = lLaticinos.splice(alimento, 1);
                alert (`${removedItem} removido.`);
                break;
            case 'Carnes':
                var alimento = lCarnes.indexOf(prompt("Qual alimento deseja remover?"));
                var removedItem = lCarnes.splice(alimento, 1);
                alert (`${removedItem} removido.`);
                break;
            case 'Bebidas':
                var alimento = lBebidas.indexOf(prompt("Qual alimento deseja remover?"));
                var removedItem = lBebidas.splice(alimento, 1);
                alert (`${removedItem} removido.`);
                break;
            case 'Cereais':
                var alimento = lCereais.indexOf(prompt("Qual alimento deseja remover?"));
                var removedItem = lCereais.splice(alimento, 1);
                alert (`${removedItem} removido.`);
                break;
        
        }
        

    }else{
        addProdutos = false;
    }
}

alert(`Congelados: ${lCongelados}\n Frutas: ${lFrutas}\n Frios: ${lFrios}\n Laticínios ${lLaticinos}\n Carnes: ${lCarnes}\n Bebidas: ${lBebidas}\n Cereais: ${lCereais}`);
   

