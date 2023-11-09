const eAnoBissexto = (ano) => {
  return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}
//ação do botão
document.getElementById("botaoCalcularIdade").addEventListener("click",() => {
  validaIdade();
});

//sistema de validação dos campos
const validaIdade = () => {

  const dia = document.getElementById("dia").value;
  const mes = document.getElementById("mes").value;
  const ano = document.getElementById("ano").value;

  const erroDia = document.getElementById("erroNoDia");
  const erroMes = document.getElementById("erroNoMes");
  const erroAno = document.getElementById("erroNoAno");

  let temErro = false;

  if(dia === ""){
    erroDia.textContent = "Preencha o dia.";
    erroDia.style.display = "block";
    document.getElementById("dia").style.borderColor = "red";
    temErro = true;
  }else{
    erroDia.style.display = "none";
    document.getElementById("dia").style.borderColor = "";
  }

  if(mes === ""){
    erroMes.textContent = "Preencha o mês.";
    erroMes.style.display = "block";
    document.getElementById("mes").style.borderColor = "red";
    temErro = true;
  }else{
    erroMes.style.display = "none";
    document.getElementById("mes").style.borderColor = "";
  }

  if(ano === ""){
    erroAno.textContent = "Preencha o ano.";
    erroAno.style.display = "block";
    document.getElementById("ano").style.borderColor = "red";
    temErro = true;
  }else{
    erroAno.style.display = "none";
    document.getElementById("ano").style.borderColor = "";
  }

  if(temErro){
    return;
  }

  calculaIdade();

}
//cálculo da idade
const calculaIdade = () => {
  //Pega valores
  let diaDoNascimento = parseInt(document.getElementById("dia").value);
  let mesDoNascimento = parseInt(document.getElementById("mes").value);
  let anoDoNascimento = parseInt(document.getElementById("ano").value);


  //cálculo de data
  let dataAtual = new Date();
  let dataDeNascimento = new Date(anoDoNascimento, mesDoNascimento - 1, diaDoNascimento);

  let idadeEmSegundos = dataAtual - dataDeNascimento;

  let idadeData = new Date(idadeEmSegundos);
  let ano = idadeData.getUTCFullYear() - 1970;

  let anoEBissexto = eAnoBissexto(ano);
  let anoAtualEBissexto = eAnoBissexto(dataAtual.getUTCFullYear());

  if (mes > 2 && anoEBissexto) {
    ano++;
  };

  if (dataAtual.getUTCMonth() < 1 && anoAtualEBissexto) {
    ano++;
  };

  let meses = idadeData.getUTCMonth();
  let dia = idadeData.getUTCDate();


  //mostra na tela
  let resultado = `<span>${ano}</span> anos <br><span>${meses}</span> meses <br><span>${dia}</span> dias`;
  document.querySelector(".resultado").innerHTML = resultado;
}