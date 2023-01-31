var numeroSecreto = parseInt(Math.random() * 1001 + 1)

var limite = 8

var usuario = prompt('Bem vindo ao jogo Mentalista!\nDigite o seu nome para começar')
    
while (chute != numeroSecreto) {
    var chute = prompt (usuario + ', digite um número entre 1 e 1000. Você tem ' + limite + ' tentativas! Digite PARE para desistir')
    if (chute == numeroSecreto) {
     alert('Parabéns ' + usuario + '! ' + numeroSecreto +' era o numero secreto!\nFIM DE JOGO')
    } else if (chute > numeroSecreto) {
     alert('Errou... ' + chute + ' é MAIOR que o número secreto!')
    } else if (chute < numeroSecreto) {
     alert('Errou... ' + chute + ' é MENOR que o número secreto!')
    } if (limite != numeroSecreto) {
     limite -= 1
    } if (limite < 1) {
    alert('FIM DE JOGO, suas chances acabaram! O número secreto era ' + numeroSecreto)
    break
   } if(chute == "PARE") {
      alert('FIM DE JOGO. O número era ' + numeroSecreto)
      break;
   }
  }
