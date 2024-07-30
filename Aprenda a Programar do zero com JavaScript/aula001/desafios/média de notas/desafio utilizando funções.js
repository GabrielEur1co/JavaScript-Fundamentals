function media(nota1, nota2, nota3) {
  calMedia = (nota1 + nota2 + nota3) / 3;

  return calMedia;
}

function classificacaoMedia(media) {
  if (media < 5) {
    console.log(
      `Sua media final foi: ${media.toFixed(2)}, você está reprovado!`
    );
  } else if (media >= 5 && media < 7) {
    console.log(
      `Sua media final foi: ${media.toFixed(2)}, você está de recuperação!`
    );
  } else if (media >= 7) {
    console.log(
      `Sua media final foi: ${media.toFixed(2)}, você está aprovado!`
    );
  }
}

classificacaoMedia(media(6, 8, 9));
classificacaoMedia(media(10, 0, 0));
classificacaoMedia(media(1, 1, 1));
