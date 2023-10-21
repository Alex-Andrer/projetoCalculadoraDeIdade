function eAnoBissexto(ano){
  return(ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

document.getElementById("botaoCalcularIdade").addEventListener("click", function() {
    calculaIdade();
  });
  


function calculaIdade(){
    //Pega valores
    const diaDoNascimento = parseInt(document.getElementById("dia").value);
    const mesDoNascimento = parseInt(document.getElementById("mes").value);
    const anoDoNascimento = parseInt(document.getElementById("ano").value);



    //console.log(diaDoNascimento);
    //console.log(mesDoNascimento);
    //console.log(anoDoNascimento);

    const dataAtual = new Date();
    const dataDeNascimento = new Date(anoDoNascimento, mesDoNascimento - 1, diaDoNascimento);

    const idadeEmSegundos = dataAtual -  dataDeNascimento;

   
    
    const idadeData = new Date(idadeEmSegundos);
    const ano = idadeData.getUTCFullYear() - 1970;

    const anoEBissexto = eAnoBissexto(ano);
    const anoAtualEBissexto = eAnoBissexto = eAnoBissexto(dataAtual.getUTCFullYear());

    if(mes > 2 && anoEBissexto){
      ano++;
    };

    if(dataAtual.getUTCMonth() < 1 && anoAtualEBissexto){
      ano++;
    };

    const meses = idadeData.getUTCMonth();
    const dia = idadeData.getUTCDay();


    const resultado = `${ano} anos, ${meses} meses e ${dia} dias.`;

    document.getElementById("resultado").textContent = resultado;
  }