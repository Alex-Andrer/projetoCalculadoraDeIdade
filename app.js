const eAnoBissexto = (ano) => {
  return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

document.getElementById("botaoCalcularIdade").addEventListener("click", function () {
  calculaIdade();
});



const calculaIdade = () => {
  //Pega valores
  const diaDoNascimento = parseInt(document.getElementById("dia").value);
  const mesDoNascimento = parseInt(document.getElementById("mes").value);
  const anoDoNascimento = parseInt(document.getElementById("ano").value);


  //cálculo de data
  const dataAtual = new Date();
  const dataDeNascimento = new Date(anoDoNascimento, mesDoNascimento - 1, diaDoNascimento);

  const idadeEmSegundos = dataAtual - dataDeNascimento;

  const idadeData = new Date(idadeEmSegundos);
  const ano = idadeData.getUTCFullYear() - 1970;

  const anoEBissexto = eAnoBissexto(ano);
  const anoAtualEBissexto = eAnoBissexto = eAnoBissexto(dataAtual.getUTCFullYear());

  if (mes > 2 && anoEBissexto) {
    ano++;
  };

  if (dataAtual.getUTCMonth() < 1 && anoAtualEBissexto) {
    ano++;
  };

  const meses = idadeData.getUTCMonth();
  const dia = idadeData.getUTCDay();


  //mostra na tela
  const resultado = `${ano} anos <br>${meses} meses <br>${dia} dias`;

  document.getElementById("resultado").innerHTML = resultado;
}