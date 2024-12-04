document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const peso = Number(document.getElementById('peso').value);
    const altura = Number(document.getElementById('altura').value);

    if (peso && altura) {
        const imc = peso / (altura * altura);
        let classificacao = '';

        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            classificacao = 'Peso normal';
        } else if (imc >= 25 && imc < 29.9) {
            classificacao = 'Sobrepeso';
        } else {
            classificacao = 'Obesidade';
        }

        const resultado = `Seu IMC é: ${imc.toFixed(2)}<br>Classificação: ${classificacao}`;
        document.getElementById('resultado').innerHTML = resultado;
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
});