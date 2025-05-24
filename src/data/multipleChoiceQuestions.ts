import { ExerciseType } from "@/models/Exercise";

export interface MultipleChoiceQuestion {
  id: number;
  type: ExerciseType;
  prompt: string;
  options: string[];
  correctAnswer: string;
  mediaUrl: string; // GIF ou vídeo
}

export const multipleChoiceQuestions: MultipleChoiceQuestion[] = [
  {
    id: 1,
    type: "multipleChoice",
    prompt: "Qual é a tradução correta deste gesto em LIBRAS?",
    options: ["Bom dia", "Boa noite", "Obrigado", "Por favor"],
    correctAnswer: "Boa noite",
    mediaUrl: "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/03/boa-noite-gif.gif",
  },
  {
    id: 2,
    type: "multipleChoice",
    prompt: "Qual doce está dizendo em LIBRAS",
    options: ["Pudin", "Churros", "Chocollate", "Doce de leite"],
    correctAnswer: "Chocollate",
    mediaUrl: "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/04/chocolate-1.gif",
  },
  {
    id: 3,
    type: "multipleChoice",
    prompt: "Qual mês o sinal esta fazendo refência em LIBRAS?",
    options: ["Dezembro", "Junho", "Março", "Fevereiro"],
    correctAnswer: "Março",
    mediaUrl: "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/06/marco.gif",
  },
  {
    id: 4,
    type: "multipleChoice",
    prompt: "Os filhos de minha são meus?",
    options: ["Irmão", "Primos", "Irmãos", "Afilhado"],
    correctAnswer: "Irmãos",
    mediaUrl: "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/04/irmaos-1.gif",
  },
  {
    id: 5,
    type: "multipleChoice",
    prompt: "Qual estação do ano está sendo falada em LIBRAS?",
    options: ["Verão", "Outono", "Inverno", "Primavera"],
    correctAnswer: "Verão",
    mediaUrl: "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/09/verao.gif",
  },
  {
    id: 6,
    type: "multipleChoice",
    prompt: " O que é que tem orelhas grandes e gosta de comer cenoura? ",
    options: ["Cachorro", "Gato", "Pássaro", "Coelho"],
    correctAnswer: "Coelho",
    mediaUrl: "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/08/Coelh@.gif",
  },
  {
    id: 7,
    type: "multipleChoice",
    prompt: "Qaul palavra de agradecimento foi dita em LIBRA?",
    options: ["Obrigado", "Desculpa", "Por favor", "Com licença"],
    correctAnswer: "Obrigado",
    mediaUrl: "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/03/obrigado-gif.gif",
  },
  {
    id: 8,
    type: "multipleChoice",
    prompt: "Fruta de cor amarela?",
    options: ["Morando", "Maracuja", "Banana", "Araça"],
    correctAnswer: "Banana",
    mediaUrl: "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/04/banana.gif",
  },
  {
    id: 9,
    type: "multipleChoice",
    prompt: "Qual setimento esta sendo fala em LIBRAS?",
    options: ["Feliz", "Triste", "Bravo", "Cansado"],
    correctAnswer: "Feliz",
    mediaUrl: "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/08/Feliz-1.gif",
  },
  {
    id: 10,
    type: "multipleChoice",
    prompt: "Objeto usado para sobrepor objstos em cima?",
    options: ["Estante", "Mesa", "Bancada", "Mesanino"],
    correctAnswer: "Mesa",
    mediaUrl: "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/05/mesa-1.gif",
  }
];