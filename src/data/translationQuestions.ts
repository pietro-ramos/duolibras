export interface TranslationQuestion {
  id: number;
  prompt: string;
  options: string[];
  correctAnswer: string;
  mediaUrl?: string;
}

// Libras para Português (mostra GIF, opções em português)
export const translationQuestionsLibrasPt: TranslationQuestion[] = [
  {
    id: 1,
    prompt: "O que este gesto significa?",
    options: ["Bom dia", "Boa noite", "Obrigado", "Por favor"],
    correctAnswer: "Obrigado",
    mediaUrl: "/assets/gifs/obrigado.gif",
  },
  {
    id: 2,
    prompt: "O que este gesto significa?",
    options: ["Cachorro", "Gato", "Pássaro", "Peixe"],
    correctAnswer: "Cachorro",
    mediaUrl: "/assets/gifs/cachorro.gif",
  },
  {
    id: 3,
    prompt: "O que este gesto significa?",
    options: ["Livro", "Caderno", "Caneta", "Lápis"],
    correctAnswer: "Livro",
    mediaUrl: "/assets/gifs/livro.gif",
  },
];

// Português para Libras (mostra frase, opções são GIFs)
export const translationQuestionsPtLibras: TranslationQuestion[] = [
  {
    id: 1,
    prompt: "Selecione o gesto correto para: 'Bom dia'",
    options: ["/assets/gifs/bomdia.gif", "/assets/gifs/obrigado.gif", "/assets/gifs/boa_noite.gif"],
    correctAnswer: "/assets/gifs/bomdia.gif",
  },
  {
    id: 2,
    prompt: "Selecione o gesto correto para: 'Cachorro'",
    options: ["/assets/gifs/cachorro.gif", "/assets/gifs/gato.gif", "/assets/gifs/peixe.gif"],
    correctAnswer: "/assets/gifs/cachorro.gif",
  },
  {
    id: 3,
    prompt: "Selecione o gesto correto para: 'Livro'",
    options: ["/assets/gifs/livro.gif", "/assets/gifs/caderno.gif", "/assets/gifs/caneta.gif"],
    correctAnswer: "/assets/gifs/livro.gif",
  },
];