function calcularMedia () {
    let nome = document.getElementById("nome").value;
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);

    // Printar valores no console (terminal)
    console.log("Nome:", nome);
    console.log("Nota1:", nota1);
    console.log("Nota2:", nota2);
    console.log("Nota3:", nota3);


    // calculando a média
    let media = (nota1 + nota2 + nota3) / 3;

    console.log("Média calculada:", media);

    // Condicionais para verificar o resultado média com base para saber se reside aprovado ou reprovado
    let situacao;
    if (media >= 6) {
        situacao = "Aprovado";
    } else {
        situacao = "Reprovado";
    }

    console.log("Situação:", situacao);

    let mediaArredondada = media.toFixed(1);


    // Montando o resultado
    let texto = nome + " -- Média: " + mediaArredondada + " (" + situacao + ")";
    // O sinal + aqui não é soma matemática - quando está entre textos, ele "cola" as partes. Se nome="Maria", mediaArredondada="8.0" e situacao="Aprovado", o resultado é: Maria - Média: 8.0 (Aprovado0)

    // colocando o resultado na tela
    document.getElementById("resultado").innerText = texto;

}

// Escutando o clique
document.getElementById("btn-calcular").addEventListener("click", calcularMedia);