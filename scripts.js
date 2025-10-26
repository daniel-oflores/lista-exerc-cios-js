/*   !!!!!!!!!!!!!!!!! IMPORTANTE !!!!!!!!!!!!!!!!!!!!!!
todos os exercícios aqui foram feitos de forma interdependente um do outro, como se fossem arquivos separados.
todos os exercícios aqui foram escritos de um jeito talvez ineficiente.
todos os exercícios aqui atingem o objetivo, apesar do jeito que forem escritos.
*/

// ----------------------------------- questão 1 --------------------------------------------
// ler 3 notas, calcular média e mostrar

(() => {
    const body = document.getElementById('1');
    const input = body.querySelector('input');
    const button = body.querySelector('button');
    const output = body.querySelector('.output');
    output.classList.add('hide')

    let notas = [];
    let soma = 0;
    const LOOPS = 3;
    button.addEventListener('click', () => {
        output.classList.add('hide');
        (input.value == "" || input.value < 0) ? input.placeholder = "insira um número!" : notas.push(input.value);
        input.value = "";

        if (notas.length >= LOOPS) {
            for (let i = 0; i < notas.length; i++) soma += Number(notas[i]);
            output.classList.remove('hide');
            output.textContent = `Média das notas: ${(soma / notas.length).toFixed(2)}`
            notas = [];
        }
    });
})();
// ----------------------------------- questão 2 --------------------------------------------
// converter valor em dólar para reais
(() => {
    const body = document.getElementById('2');
    const input = body.querySelector('input');
    const button = body.querySelector('button');
    const output = body.querySelector('.output');

    const VALOR_DOLAR = 5.39;
    button.addEventListener('click', () => {
        if (input.value == "" || input.value < 0) {
            input.value = "";
            input.placeholder = "insira um valor em dólar!";
            return;
        }
        output.classList.remove('hide');
        output.textContent = `Valor (R$ ${input.value}) em dólares = ${(input.value * VALOR_DOLAR).toFixed(2)} dólares`
        input.value = "";
    })
})();
// ----------------------------------- questão 3 --------------------------------------------
// converter valor em real pra dólar
(() => {
    const body = document.getElementById('3');
    const input = body.querySelector('input');
    const button = body.querySelector('button');
    const output = body.querySelector('.output');

    const VALOR_REAL = 0.19;
    button.addEventListener('click', () => {
        const valor = Number(input.value);
        if (valor == "" || valor < 0) {
            input.placeholder = "insira um valor em reais!";
            return;
        }
        output.classList.remove('hide');
        output.textContent = `Valor (U$ ${valor}) em reais = ${(valor * VALOR_REAL).toFixed(2)} dólares`
        input.value = "";
    })
})();
// ----------------------------------- questão 4 --------------------------------------------
// ler saldo e imprimir com reajuste de 1%
(() => {
    const body = document.getElementById('4');
    const input = body.querySelector('input');
    const button = body.querySelector('button');
    const output = body.querySelector('.output');

    const REAJUSTE = 1.01;
    button.addEventListener('click', () => {
        const valor = Number(input.value);
        if (valor == "" || valor < 0) {
            input.placeholder = "insira um salário positivo";
            output.classList.add('hide')
            return;
        }
        input.value = "";
        output.classList.remove('hide');
        output.innerHTML = `Salário original: R$ ${valor} <br> Salário após reajuste: R$ ${(valor * REAJUSTE.toFixed(2))}`;
    })
})();

// ----------------------------------- questão 5 --------------------------------------------
// mesma coisa na verdade
(() => {
    const body = document.getElementById('5');
    const input = body.querySelector('input');
    const button = body.querySelector('button');
    const output = body.querySelector('.output');

    const REAJUSTE = 1.33;
    button.addEventListener('click', () => {
        const valor = Number(input.value);
        if (valor == "" || valor < 0) {
            output.classList.add('hide');
            input.placeholder = "insira um preço positivo";
            return;
        }
        input.value = "";
        input.placeholder = "preço"
        output.classList.remove('hide');
        output.innerHTML = `Preço original: R$ ${valor} <br> Preço após reajuste: R$ ${(valor * REAJUSTE).toFixed(2)}`;
    })
})();

// ----------------------------------- questão 6 --------------------------------------------
// calcular fahrenheit -> kelvin & celsius
(() => {
    const body = document.getElementById('6');
    const input = body.querySelector('input');
    const button = body.querySelector('button');
    const output = body.querySelector('.output');

    function FtoCelsius(n) { return ((n - 32) / 1.8).toFixed(1); }
    function FtoKelvin(n) { return ((n - 32) / 1.8 + 273.15).toFixed(1); }

    button.addEventListener('click', () => {
        const valor = Number(input.value);
        if (valor == "") {
            output.classList.add('hide');
            input.placeholder = "insira uma temperatura!";
            return;
        }
        input.placeholder = "temperatura"
        output.classList.remove('hide');
        output.innerHTML = `Temperatura em °C: ${FtoCelsius(valor)} <br> Temperatura em °K: ${FtoKelvin(valor)}`;
    })
})();
// ----------------------------------- questão 7 --------------------------------------------
// celsius -> fahrenheit & kelvin
(() => {
    const body = document.getElementById('7');
    const input = body.querySelector('input');
    const button = body.querySelector('button');
    const output = body.querySelector('.output');

    function CtoFahblabla(n) { return ((n * 1.8) + 32).toFixed(1); }
    function CtoKelvin(n) { return (n + 273.15).toFixed(1); }

    button.addEventListener('click', () => {
        const valor = Number(input.value);
        if (valor == "") {
            output.classList.add('hide');
            input.placeholder = "insira uma temperatura!";
            return;
        }
        input.placeholder = "temperatura"
        output.classList.remove('hide');
        output.innerHTML = `Temperatura em °F: ${CtoFahblabla(valor)} <br> Temperatura em °K: ${CtoKelvin(valor)}`;
    })
})();
// ----------------------------------- questão 8 --------------------------------------------
// kelvin -> fahcanseideescrever & celsius
(() => {
    const body = document.getElementById('8');
    const input = body.querySelector('input');
    const button = body.querySelector('button');
    const output = body.querySelector('.output');

    function KtoFahrenheit(n) { return ((n - 273.15) * 1.8 + 32).toFixed(1); }
    function KtoCelsius(n) { return (n - 273.15).toFixed(1); }

    button.addEventListener('click', () => {
        const valor = Number(input.value);
        if (valor == "" || isNaN(input.value)) {
            input.value = "";
            output.classList.add('hide');
            input.placeholder = "insira uma temperatura!";
            return;
        }
        input.placeholder = "temperatura"
        output.classList.remove('hide');
        output.innerHTML = `Temperatura em °K: ${KtoFahrenheit(valor)} <br> Temperatura em °C: ${KtoCelsius(valor)}`;
    })
})();
// ----------------------------------- questão 9 --------------------------------------------
// ler salário e percentual de aumento, mostrar valor do aumento e salário

(() => {
    const body = document.getElementById('9');
    const salario = body.querySelector('#salario-9');
    const aumento = body.querySelector('#aumento-9');
    const button = body.querySelector('button');
    const output = body.querySelector('.output');

    let inputs = [salario, aumento];
    let invalido = false;
    button.addEventListener('click', () => {
        for (let input of inputs) {
            const v = Number(input.value);
            if (isNaN(v) || v <= 0) {
                output.classList.add('hide');
                input.placeholder = "insira dados válidos!";
                input.value = "";
                invalido = true;
            }
        }
        if (invalido) return;

        const salarioVal = Number(salario.value);
        const aumentoVal = Number(aumento.value);

        output.classList.remove('hide');
        output.innerHTML = `Valor do aumento: ${aumentoVal.toFixed(2)}% de ${salarioVal.toFixed(2)} = R$ ${(aumentoVal * (salarioVal / 100)).toFixed(2)}
        <br> Salário final: R$ ${((1 + aumentoVal) * salarioVal).toFixed(2)}`
    })
})();
// ----------------------------------- questão 10 --------------------------------------------
// ver se numero é positivo ou negativo              vou tentar fazer em menos linhas possível
(() => {
    const body = document.getElementById('10');
    const input = body.querySelector('input');
    const button = body.querySelector('button');
    const output = body.querySelector('.output');

    button.addEventListener('click', () => {
        const num = isNaN(Number(input.value)) || input.value == 0 ? null : Number(input.value);
        if (num == null) {
            output.classList.add('hide');
            input.value = "";
            input.placeholder = "insira um número válido!";
            return;
        }

        let status;
        if (num > 0) status = `um número positivo`
        else if (num < 0) status = `um número negativo`;

        output.classList.remove('hide');
        output.innerHTML = `Você digitou ${status}.`
    })
})();
// ----------------------------------- questão 11 --------------------------------------------
// LITERALMENTE A MESMA COISA... precisamos de um pouco mais de criatividade, não?
(() => {
    const body = document.getElementById('11');
    const input = body.querySelector('input');
    const button = body.querySelector('button');
    const output = body.querySelector('.output');

    button.addEventListener('click', () => {
        const num = Number.isNaN(input.value) ? null : Number(input.value);
        if (num == null) {
            output.classList.add('hide');
            input.value = "";
            input.placeholder = "insira um número válido!";
            return;
        }

        let status;
        if (num > 0) status = `um número positivo`
        else if (num < 0) status = `um número negativo`;
        else status = `zero`;

        output.classList.remove('hide');
        output.innerHTML = `Você digitou ${status}.`
    })
})();
// ----------------------------------- questão 12 --------------------------------------------
// média de 3 notas, critérios: >= 7 passa, <7 >=5 recupera, < 5 reprova
(() => {
    const body = document.getElementById('12');
    const input = body.querySelector('input');
    const button = body.querySelector('button');
    const tracker = body.querySelector('.tracker');
    const output = body.querySelector('.output');

    let notas = [];
    const LOOPS = 3;
    button.addEventListener('click', () => {
        console.log('ok')
        output.classList.add('hide');
        const valor = Number(input.value);
        if (valor == "" || valor < 0 || valor > 10) return input.placeholder = "número entre 0 e 10, mano!", input.value = "";
        notas.push(valor);
        output.classList.add('hide');

        input.placeholder = "número";
        input.value = "";
        tracker.textContent = `Notas adicionadas: ${notas}`;

        let soma = 0;
        let status;
        if (notas.length >= LOOPS) {
            for (let i = 0; i < notas.length; i++) soma += notas[i];
            const media = (soma / notas.length).toFixed(1);
            if (media >= 7) status = `O aluno passou (${media} >= 7)`;
            else if (media < 7 && media >= 5) status = `O aluno está de recuperação (7 > ${media} >= 5)`;
            else status = `O aluno reprovou (${media} < 5)`;
            notas = [];
        }
        output.classList.remove('hide')
        output.textContent = status;
    });
})();
// ----------------------------------- questão 13 --------------------------------------------
// ler número, par ou impar
(() => {
    const body = document.getElementById('13');
    const input = body.querySelector('input');
    const button = body.querySelector('button');
    const output = body.querySelector('.output');

    button.addEventListener('click', () => {
        const num = Number.isNaN(input.value) ? null : Number(input.value);
        if (num == null) {
            output.classList.add('hide');
            input.value = "";
            input.placeholder = "insira um número válido!";
            return;
        }

        output.classList.remove('hide');
        if (num % 2 == 0) {
            output.innerHTML = `O número ${num} é par.`
        } else {
            output.innerHTML = `O número ${num} é ímpar.`
        }
    })
})();
// ----------------------------------- questão 14 --------------------------------------------
// maior entre 3 números
(() => {
    const body = document.getElementById('14');
    const input = body.querySelector('input');
    const button = body.querySelector('button');
    const tracker = body.querySelector('.tracker');
    const output = body.querySelector('.output');

    let nums = [];
    const LOOPS = 3;
    button.addEventListener('click', () => {
        output.classList.add('hide');
        const valor = Number(input.value);
        if (isNaN(input.value) || input.value == "") return input.placeholder = "insira um número válido", input.value = "";
        nums.push(valor);

        input.placeholder = "número";
        input.value = "";
        tracker.textContent = `Números: ${nums}`;

        if (nums.length >= LOOPS) {
            nums.sort((a, b) => b - a);
            output.classList.remove('hide');
            output.textContent = `O maior número é ${nums[0]}`;
            nums = [];
        }
    });
})();
// ----------------------------------- questão 15 --------------------------------------------
// classificar: Idoso (idade >= 65); adulto (idade >= 21); juvenil (idade >= 14); infantil (idade >=9); mirim (idade < 9)
(() => {
    const body = document.getElementById('15');
    const input = body.querySelector('input');
    const button = body.querySelector('button');
    const output = body.querySelector('.output');

    button.addEventListener('click', () => {
        output.classList.add('hide');

        const valor = Number(input.value);
        if (valor == "" || valor < 0) return input.placeholder = "insira uma idade válida", input.value = ""; // validação (já fiz umas 15 vezes, mas blz)
        output.classList.add('hide');

        input.placeholder = "idade";

        let faixaEtaria;

        if (120 > valor && valor >= 65) faixaEtaria = `Idoso`;
        else if (65 > valor && valor >= 21) faixaEtaria = `Adulto`;
        else if (21 > valor && valor >= 14) faixaEtaria = `Juvenil`;
        else if (14 > valor && valor >= 9) faixaEtaria = `Infantil`;
        else if (valor >= 120) return output.textContent = `Mano, esse cara já tá morto`, output.classList.remove('hide'); // bonus pq sou inútil
        else faixaEtaria = `Mirim`;


        output.classList.remove('hide');
        output.textContent = `Um nadador de ${valor} anos é um nadador ${faixaEtaria}.`;
    });
})();
// ----------------------------------- questão 16 --------------------------------------------
// somar 2 números. se resultado <= 20, sub. 5; se > 20, somar 8
(() => {
    const body = document.getElementById('16');
    const valor1 = body.querySelector('#valor1-16');
    const valor2 = body.querySelector('#valor2-16');
    const button = body.querySelector('button');
    const output = body.querySelector('.output');

    let inputs = [valor1, valor2];
    let invalido = false;
    button.addEventListener('click', () => {
        for (let input of inputs) {
            const v = Number(input.value);
            if (isNaN(v) || v == '') {
                output.classList.add('hide');
                input.placeholder = "insira números válidos!";
                input.value = "";
                invalido = true;
            }
        }
        if (invalido) return;

        const soma = Number(valor1.value) + Number(valor2.value);
        output.classList.remove('hide');

        if (soma > 20) output.innerHTML = `A soma é ${soma}, mas como é maior que 20, soma-se 8: <br> ${soma + 8}`;
        else output.innerHTML = `A soma é ${soma}, mas como é menor ou igual a 20, subtrai-se 5: <br> ${soma - 5}`;
        inputs.forEach(input => input.value = "")
    });
})();

// ----------------------------------- questão 17 --------------------------------------------
// ler valor. se valor < 20, aumenta em 45%. se não, aumenta em 30%
(() => {
    const body = document.getElementById('17');
    const input = body.querySelector('input');
    const button = body.querySelector('button');
    const output = body.querySelector('.output');

    button.addEventListener('click', () => {
        const num = (Number.isNaN(input.value) || Number(input.value) < 0) ? null : Number(input.value);
        if (num == null) {
            output.classList.add('hide');
            input.value = "";
            input.placeholder = "insira um preço válido";
            return;
        }

        output.classList.remove('hide');

        if (num < 20) output.innerHTML = `Como o produto foi comprado por menos que R$ 20,00,<br> a venda será de R$${(num * 1.45).toFixed(2)}.`;
        else output.innerHTML = `Como o produto foi comprado por mais que R$ 20,00,<br> a venda será de R$${(num * 1.30).toFixed(2)}.`;
    })
})();
// ----------------------------------- questão 18 --------------------------------------------
// ler 1 temperatura. selecionar dinamicamente a temperatura de input e output.
(() => {
    const body = document.getElementById('18');
    const input = body.querySelector('input');
    const button = body.querySelector('button');
    const output = body.querySelector('.output');

    function convertToCelsius(value, type) {
        let result;
        if (type === "F") result = (value - 32) / 1.8;    // f -> c
        else if (type === "K") result = value - 273.15;   // k -> c
        else result = value;                              // c -> c
        return result;
    }

    function convertFromCelsius(value, type) {
        let result;
        if (type === "F") result = (value - 32) / 1.8;    // c -> f
        else if (type === "K") result = value - 273.15;   // c -> k
        else result = value;                              // c -> c
        return result;
    }

    button.addEventListener('click', () => {
        const value = Number(input.value);
        const inputFormat = body.querySelector('input[name="from-18"]:checked').value;
        const outputFormat = body.querySelector('input[name="to-18"]:checked').value;

        if (isNaN(value)) {
            output.classList.add('hide');
            input.value = "";
            input.placeholder = "insira uma temperatura!";
            return;
        }
        input.placeholder = "temperatura";

        const inputInCelsius = convertToCelsius(value, inputFormat);
        const resultFromCelsius = convertFromCelsius(inputInCelsius, outputFormat);

        output.classList.remove('hide');
        output.innerHTML = `${value} °${inputFormat} --> ${resultFromCelsius.toFixed(2)} °${outputFormat}`;
    })
})();
// ----------------------------------- questão 19 --------------------------------------------
// pedra papel tesoura
(() => {
    const body = document.getElementById('19');
    const input = body.querySelector('select');
    const button = body.querySelector('button');
    const computer = body.querySelector('.choice');
    const output = body.querySelector('.output')

    function rng(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let escolhas = ["pedra", "papel", "tesoura"]
    function numberToChoice(num) {
        return escolhas[num];
    }

    const regra = {
        pedra: "papel",
        papel: "tesoura",
        tesoura: "pedra"     // chave - perde, valor - vence
    }

    button.addEventListener('click', () => {
        // sem validar, já tem escolhida
        const escolhaPlayer = input.value;
        const escolhaComputer = numberToChoice(rng(0, 2));

        computer.classList.remove('hide');
        computer.innerHTML = `Você escolheu <b><i>${escolhaPlayer}</i></b><br>O computador escolheu <b>${escolhaComputer}</b>`;

        output.classList.remove('hide');
        if (escolhaPlayer == escolhaComputer) output.innerHTML = `Vocês empataram.`;
        else if (regra[escolhaPlayer] == escolhaComputer) output.innerHTML = `Você perdeu... <b>${escolhaComputer}</b> vence <b><i>${escolhaPlayer}</i></b>.`;
        else output.innerHTML = `Você venceu! <b><i>${escolhaPlayer}</i></b> vence <b>${escolhaComputer}</b>!`;
    })
})();