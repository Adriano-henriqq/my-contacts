export const calculaIdade = (data) => {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();

  const dataAniversario = new Date(data);
  const anoNascimento = dataAniversario.getFullYear();

  let idade = anoAtual - anoNascimento;

  if (dataAtual < new Date(dataAniversario.setFullYear(anoAtual))) {
      idade--;
  }

  if (idade <= 0 || idade > 120) {
      return 'Idade Inválida';
  }

  return Number(idade);
}

export function formataData(data) {
    if (typeof data === 'string') {
      const [ano, mes, dia] = data.split('-');
      return `${dia}/${mes}/${ano}`;
    } else {
      console.error('O parâmetro fornecido não é uma string.');
    }
  }
