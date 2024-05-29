let cod_operacao ='soma'

let = valor_campo1 =''
let = valor_campo2 =''


// const soma = document.querySelector('#soma')
// const subtracao = document.querySelector('#sub')
// const multiplicacao = document.querySelector('#mult')
// const divisao = document.querySelector('#div')
// const maior = document.querySelector('#maior')
// const menor = document.querySelector('#menor')
// const potencia = document.querySelector('#pot')

const display = document.querySelector('#display')

/**inputs */
const campo1=document.querySelector('#campo1')
const campo2=document.querySelector('#campo2')

const btn_calcular = document.querySelector('#btn-calcular')

btn_calcular.addEventListener('click', function(){

    valor_campo1 = Number(valor_campo1)
    valor_campo2 = Number(valor_campo2)

    if(valor_campo1=='' || valor_campo2 ==''){

        alert('Preencha os 2 valores!')
    }

    switch(cod_operacao){

        case 'soma':
            soma(valor_campo1, valor_campo2)
            break

        case 'sub':
            subtracao(valor_campo1, valor_campo2)
            break
        case 'div':
            divisao(valor_campo1, valor_campo2)
            break
        case 'mult':
            multiplicacao(valor_campo1, valor_campo2)
            break
        case 'maior':
            maior_valor(valor_campo1, valor_campo2)
            break
        case 'menor':
            menor_valor(valor_campo1, valor_campo2)
            break
        case 'pot':
            potencia(valor_campo1, valor_campo2)
            break
        default:
            hipotenusa(valor_campo1, valor_campo2)
            break
    }

   
   
   
})


campo1.addEventListener('keyup', function(event){

    valida_input(event)
    valor_campo1 = event.target.value
    info_tela()

})

campo2.addEventListener('keyup', function(event){

    valida_input(event)
    valor_campo2 = event.target.value
   
    info_tela()

})


/*/////////////////////////////////////////////////// */

function operacao(event){

    active(event)

    cod_operacao = event.target.id

    info_tela()
    

}

function soma(val1, val2){

    let resultado = val1+val2

    display.textContent=resultado
}
function subtracao(val1, val2){


    let resultado = val1-val2

    display.textContent=resultado
}

function divisao(val1, val2){


    let resultado = val1/val2

    display.textContent=resultado
}


function multiplicacao(val1, val2){


    let resultado = val1*val2

    display.textContent=resultado
}


function maior_valor(val1, val2){


    let resultado = (val1>val2) ? val1 : val2

    display.textContent='Maior valor:'+resultado
}


function menor_valor(val1, val2){


    let resultado = (val1>val2) ? val2 : val1

    display.textContent='Menor valor:'+resultado
}

function potencia(val1, val2){


    let resultado = Math.pow(val1, val2)

    display.textContent=resultado
}


function hipotenusa(val1, val2){


    let resultado = Math.hypot(val1, val2)

    display.textContent=resultado
}






function active(e){

    let ids=['soma', 'sub', 'mult', 'div', 'maior', 'menor', 'pot', 'hip']

    for(let i=0; i<ids.length; i++){

        if(e.target.id==ids[i]){

            e.target.style.backgroundColor='#495057'
            e.target.style.color='white'
            
            continue
            
        }
        
        const campo = document.querySelector('#'+ids[i])
        campo.style.backgroundColor='white'
        campo.style.color='black'
        
    }   
}

function hover_move(e){

    

        e.target.style.backgroundColor='#495057'
    e.target.style.color='white'
    

    
}
function hover_out(e){

    if(e.target.id != cod_operacao){


        e.target.style.backgroundColor='white'
        e.target.style.color='black'
    }
}

function valida_input(e){

    
    if((e.keyCode <96 || e.keyCode>105) && e.keyCode!=8){

        e.preventDefault()
        
    }

    
}
function info_tela(){

    

        switch(cod_operacao){

            case 'soma':
                display.textContent='Soma('+valor_campo1+'+'+valor_campo2+')'
                break

            case 'sub':
                
                display.textContent='Subtração('+valor_campo1+'-'+valor_campo2+')'
                break

            case 'div':
                display.textContent='Divisão('+valor_campo1+'/'+valor_campo2+')'
                break

            case 'mult':
                display.textContent='Multiplicação('+valor_campo1+'*'+valor_campo2+')'
                break

            case 'maior':
                display.textContent='Maior valor entre('+valor_campo1+', '+valor_campo2+')'
                break

            case 'menor':
                display.textContent='Menor valor entre('+valor_campo1+', '+valor_campo2+')'
                break

            case 'pot':
                display.textContent='Potência('+valor_campo1+'^'+valor_campo2+')'
                break

            default:
                display.textContent='Hipotenusa('+valor_campo1+', '+valor_campo2+')'
                break

            
        }




   


}