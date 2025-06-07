export interface TranslationQuestion {
  id: number;
  prompt: string;
  options: string[];
  correctAnswer: string;
  mediaUrl?: string;
}

const obrigado = "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/03/obrigado-gif.gif"
const boa_noite = "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/03/boa-noite-gif.gif"
const bom_dia = "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/03/bom-dia-gif.gif"
const chocolate = "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/04/chocolate.gif"
const marco = "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/06/marco.gif"
const irmaos = "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/04/irmaos.gif"
const verao = "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/09/verao.gif"
const coelho = "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/08/Coelh@.gif"
const banana = "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/04/banana.gif"
const feliz = "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/08/Feliz.gif"
const mesa = "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/05/mesa.gif"
const gato = "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/08/Gat@.gif"
const tesoura = "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/06/tesoura.gif"
const mochila = "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/06/mochila.gif"
const estojo = "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/06/estojo.gif"


// Libras para Português (mostra GIF, opções em português)
export const translationQuestionsLibrasPt: TranslationQuestion[] = [
  {
    id: 1,
    prompt: "Qual é a tradução correta deste sinal em LIBRAS?",
    options: ["Bom dia", "Boa noite", "Obrigado", "Por favor"],
    correctAnswer: "Boa noite",
    mediaUrl: boa_noite,
  },
  {
    id: 2,
    prompt: "Qual doce está sendo dito em LIBRAS?",
    options: ["Pudim", "Churros", "Chocolate", "Doce de leite"],
    correctAnswer: "Chocolate",
    mediaUrl: chocolate,
  },
  {
    id: 3,
    prompt: "Qual mês está sendo dito?",
    options: ["Dezembro", "Junho", "Março", "Fevereiro"],
    correctAnswer: "Março",
    mediaUrl: marco,
  },
  {
    id: 4,
    prompt: "Qual parte da família está sendo falada?",
    options: ["Pais", "Primos", "Irmãos", "Afilhado"],
    correctAnswer: "Irmãos",
    mediaUrl: irmaos
  },
  {
    id: 5,
    prompt: "Qual estação do ano está sendo falada em LIBRAS?",
    options: ["Verão", "Outono", "Inverno", "Primavera"],
    correctAnswer: "Verão",
    mediaUrl: verao,
  },
  {
    id: 6,
    prompt: " Qual o animal? ",
    options: ["Cachorro", "Gato", "Pássaro", "Coelho"],
    correctAnswer: "Coelho",
    mediaUrl: coelho,
  },
  {
    id: 7,
    prompt: "Qual expressão cordial está sendo dita?",
    options: ["Obrigado", "Desculpa", "Por favor", "Com licença"],
    correctAnswer: "Obrigado",
    mediaUrl: obrigado,
  },
  {
    id: 8,
    prompt: "Qual a fruta?",
    options: ["Morango", "Maracujá", "Banana", "Maçã"],
    correctAnswer: "Banana",
    mediaUrl: banana,
  },
  {
    id: 9,
    prompt: "Qual sentimento está sendo expressado?",
    options: ["Feliz", "Triste", "Animado", "Cansado"],
    correctAnswer: "Feliz",
    mediaUrl: feliz,
  },
  {
    id: 10,
    prompt: "A que objeto está se referindo?",
    options: ["Estante", "Mesa", "Bancada", "Mesanino"],
    correctAnswer: "Mesa",
    mediaUrl: mesa,
  }
];

// Português para Libras (mostra frase, opções são GIFs)
export const translationQuestionsPtLibras: TranslationQuestion[] = [
  {
    id: 1,
    prompt: "Selecione o gesto correto para: 'Bom dia'",
    options: [bom_dia, obrigado, boa_noite],
    correctAnswer: bom_dia,
  },
  {
    id: 2,
    prompt: "Selecione o gesto correto para: 'Coelho'",
    options: [coelho, gato, mochila],
    correctAnswer: coelho,
  },
  {
    id: 3,
    prompt: "Selecione o gesto correto para: 'Tesoura'",
    options: [mochila, tesoura, estojo],
    correctAnswer: tesoura,
  },
];