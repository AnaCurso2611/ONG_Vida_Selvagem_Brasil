document.addEventListener('DOMContentLoaded', () => {
    const cpf = document.getElementById('cpf');
    const telefone = document.getElementById('telefone');
    const cep = document.getElementById('cep');

    const mascara = (campo, padrao) => {
        campo.addEventListener('input', () => {
            let valor = campo.value.replace(/\D/g, '');
            let i = 0;
            campo.value = padrao.replace(/#/g, () => valor[i++] || '');
        });
    };

    mascara(cpf, '###.###.###-##');
    mascara(telefone, '(##) #####-####');
    mascara(cep, '#####-###');
});