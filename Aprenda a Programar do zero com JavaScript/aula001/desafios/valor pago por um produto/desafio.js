const precoProduto = 100

const tipoDePagamento = 'Crédito 6X';

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