/* 
    3) Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta e a escolha da condição de pagamento.
    
    Ultilizando os códigos da tabela a seguir para ler qual a condição de pagamento escolhido e efetuar o cálculo adequado.

    Código Condição de pagamento:
        - À vista Débito, recebe 10% de desconto;
        - À vista no Dinheiro ou PIX, rebe 15% de desconto;
        - Em duas vezes, preço normla de etiqueta sem juros;
        - Acima de duas vezes, preço normal de etiqueta mais juros de 10%. 
*/






function validaFormaDePagamento (precoProduto, tipoDePagamento) {

    if(tipoDePagamento === 'Débito'){
        const calcDesconto = precoProduto * 0.10
        const novoPreco = precoProduto - calcDesconto 

        console.log(`Você recebeu R$: ${calcDesconto.toFixed(2)} de desconto no valor do seu produto.`)
        console.log(`Valor a ser pago R$: ${novoPreco.toFixed(2)}`)
    }else if(tipoDePagamento === 'Dinheiro' || tipoDePagamento === 'PIX'){
        const calcDesconto = precoProduto * 0.15
        const novoPreco = precoProduto - calcDesconto

        console.log(`Você recebeu R$: ${calcDesconto.toFixed(2)} de desconto no valor do seu produto.`)
        console.log(`Valor a ser pago R$: ${novoPreco.toFixed(2)}`)

    }else if(tipoDePagamento === 'Crédito 2X'){
        console.log(`valor a ser pago R$: ${precoProduto.toFixed(2)}`)
    }else if(tipoDePagamento === 'Crédito 3X' || tipoDePagamento === 'Crédito 4X' || tipoDePagamento === 'Crédito 5X'){
        const calcJuros = precoProduto * 0.10
        const novoPreco = precoProduto + calcJuros

        console.log(`Seu produto teve um acrescimo de 10% no valor, pois o pagamento será realizado em 3X ou mais.`)
        
        console.log(`Valor a ser pago R$: ${novoPreco.toFixed(2)}`)
    }else{
        console.log('O tipo de pagamento informado é inválido.')
    }

}

function main (precoProduto, tipoDePagamento){
    
    precoProduto = precoProduto
    tipoDePagamento = tipoDePagamento

    validaFormaDePagamento(precoProduto, tipoDePagamento)

}

main(100, 'Crédito 3X')
main(100, 'Débito')
main(100, 'Crédito')
main(100, 'Dinheiro')