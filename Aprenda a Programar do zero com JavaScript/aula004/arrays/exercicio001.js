const nota = []

nota.push(5)
nota.push(5)
nota.push(5)
nota.push(5)


let soma = 0;

for (let i = 0; i < nota.length; i++) {
        const element = nota[i];
        soma = soma + element;
      
}

const media = soma/ nota.length
console.log(media.toFixed(2))
