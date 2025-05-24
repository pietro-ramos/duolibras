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
    prompt: "Qual é a tradução correta deste gesto em Libras?",
    options: ["Bom dia", "Boa noite", "Obrigado", "Por favor"],
    correctAnswer: "Boa noite",
    mediaUrl: "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/03/boa-noite-gif.gif",
  },
  {
    id: 2,
    type: "multipleChoice",
    prompt: "Qual é a tradução correta deste gesto em Libras?",
    options: ["Sim", "Não", "Talvez", "Agora"],
    correctAnswer: "Sim",
    mediaUrl: "/assets/gifs/sim.gif",
  },
  {
    id: 3,
    type: "multipleChoice",
    prompt: "Qual é a tradução correta deste gesto em Libras?",
    options: ["Casa", "Escola", "Trabalho", "Praia"],
    correctAnswer: "Casa",
    mediaUrl: "/assets/gifs/casa.gif",
  },
  {
    id: 4,
    type: "multipleChoice",
    prompt: "Qual é a tradução correta deste gesto em Libras?",
    options: ["Mãe", "Pai", "Irmão", "Amigo"],
    correctAnswer: "Mãe",
    mediaUrl: "/assets/gifs/mae.gif",
  },
  {
    id: 5,
    type: "multipleChoice",
    prompt: "Qual é a tradução correta deste gesto em Libras?",
    options: ["Água", "Comida", "Leite", "Café"],
    correctAnswer: "Água",
    mediaUrl: "/assets/gifs/agua.gif",
  },
  {
    id: 6,
    type: "multipleChoice",
    prompt: "Qual é a tradução correta deste gesto em Libras?",
    options: ["Cachorro", "Gato", "Pássaro", "Peixe"],
    correctAnswer: "Cachorro",
    mediaUrl: "/assets/gifs/cachorro.gif",
  },
  {
    id: 7,
    type: "multipleChoice",
    prompt: "Qual é a tradução correta deste gesto em Libras?",
    options: ["Obrigado", "Desculpa", "Por favor", "Com licença"],
    correctAnswer: "Obrigado",
    mediaUrl: "/assets/gifs/obrigado.gif",
  },
  {
    id: 8,
    type: "multipleChoice",
    prompt: "Qual é a tradução correta deste gesto em Libras?",
    options: ["Livro", "Caderno", "Caneta", "Lápis"],
    correctAnswer: "Livro",
    mediaUrl: "/assets/gifs/livro.gif",
  },
  {
    id: 9,
    type: "multipleChoice",
    prompt: "Qual é a tradução correta deste gesto em Libras?",
    options: ["Feliz", "Triste", "Bravo", "Cansado"],
    correctAnswer: "Feliz",
    mediaUrl: "/assets/gifs/feliz.gif",
  },
  {
    id: 10,
    type: "multipleChoice",
    prompt: "Qual é a tradução correta deste gesto em Libras?",
    options: ["Dia", "Noite", "Tarde", "Manhã"],
    correctAnswer: "Noite",
    mediaUrl: "/assets/gifs/noite.gif",
  }
];