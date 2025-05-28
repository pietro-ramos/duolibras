import { ExerciseType } from "@/models/Exercise";

export interface MultipleChoiceQuestion {
  id: number;
  type: ExerciseType;
  prompt: string;
  options: string[];
  correctAnswer: string;
  mediaUrl: string;
}

export const multipleChoiceQuestions: MultipleChoiceQuestion[] = [
  {
    id: 1,
    type: "multipleChoice",
    prompt: "Qual é a tradução correta deste sinal em LIBRAS?",
    options: ["Bom dia", "Boa noite", "Obrigado", "Por favor"],
    correctAnswer: "Boa noite",
    mediaUrl: "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/03/boa-noite-gif.gif",
  },
  {
    id: 2,
    type: "multipleChoice",
    prompt: "Qual doce está sendo dito em LIBRAS?",
    options: ["Pudim", "Churros", "Chocolate", "Doce de leite"],
    correctAnswer: "Chocolate",
    mediaUrl: "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/04/chocolate.gif",
  },
  {
    id: 3,
    type: "multipleChoice",
    prompt: "Qual mês está sendo dito?",
    options: ["Dezembro", "Junho", "Março", "Fevereiro"],
    correctAnswer: "Março",
    mediaUrl: "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/06/marco.gif",
  },
  {
    id: 4,
    type: "multipleChoice",
    prompt: "Qual parte da família está sendo falada?",
    options: ["Pais", "Primos", "Irmãos", "Afilhado"],
    correctAnswer: "Irmãos",
    mediaUrl: "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/04/irmaos.gif",
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
    prompt: " Qual o animal? ",
    options: ["Cachorro", "Gato", "Pássaro", "Coelho"],
    correctAnswer: "Coelho",
    mediaUrl: "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/08/Coelh@.gif",
  },
  {
    id: 7,
    type: "multipleChoice",
    prompt: "Qual expressão cordial está sendo dita?",
    options: ["Obrigado", "Desculpa", "Por favor", "Com licença"],
    correctAnswer: "Obrigado",
    mediaUrl: "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/03/obrigado-gif.gif",
  },
  {
    id: 8,
    type: "multipleChoice",
    prompt: "Qual a fruta?",
    options: ["Morango", "Maracujá", "Banana", "Maçã"],
    correctAnswer: "Banana",
    mediaUrl: "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/04/banana.gif",
  },
  {
    id: 9,
    type: "multipleChoice",
    prompt: "Qual sentimento está sendo expressado?",
    options: ["Feliz", "Triste", "Animado", "Cansado"],
    correctAnswer: "Feliz",
    mediaUrl: "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/08/Feliz.gif",
  },
  {
    id: 10,
    type: "multipleChoice",
    prompt: "A que objeto está se referindo?",
    options: ["Estante", "Mesa", "Bancada", "Mesanino"],
    correctAnswer: "Mesa",
    mediaUrl: "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/05/mesa.gif",
  }
];