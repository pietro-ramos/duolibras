import { ExerciseType } from "@/models/Exercise";

export interface MultipleChoiceQuestion {
  id: number;
  type: ExerciseType;
  prompt: string;
  options: string[];
  correctAnswer: string;
}

export const multipleChoiceQuestions: MultipleChoiceQuestion[] = [
  {
    id: 1,
    type: "multipleChoice",
    prompt: "Qual é o nome correto para se referir a uma pessoa que não ouve e utiliza a Língua de Sinais?",
    options: ["Mudinho", "Deficiente auditivo", "Surdo-mudo", "Surdo"],
    correctAnswer: "Surdo",
  },
  {
    id: 2,
    type: "multipleChoice",
    prompt: "O que significa a sigla LIBRAS?",
    options: ["Língua Brasileira de Sinais", "Linguagem Brasileira de Sinais", "Língua Internacional de Sinais", "Língua Brasileira de Surdos"],
    correctAnswer: "Língua Brasileira de Sinais",
  },
  {
    id: 3,
    type: "multipleChoice",
    prompt: "O que é comunidade surda?",
    options: ["Grupo só de surdos", "Grupo de ouvintes", "Espaço de troca entre surdos e ouvintes", "Grupo de intérpretes"],
    correctAnswer: "Espaço de troca entre surdos e ouvintes",
  },
  {
    id: 4,
    type: "multipleChoice",
    prompt: "Qual é o principal meio de comunicação da comunidade surda no Brasil?",
    options: ["Leitura labial", "Escrita", "Libras", "Mímica"],
    correctAnswer: "Libras",
  },
  {
    id: 5,
    type: "multipleChoice",
    prompt: "O que é bilinguismo para pessoas surdas no contexto escolar?",
    options: ["Uso de duas línguas orais", "Uso de Libras (L1) e Língua Portuguesa escrita (L2)", "Uso de Libras e leitura labial", "Uso de Libras e inglês"],
    correctAnswer: "Uso de Libras (L1) e Língua Portuguesa escrita (L2)",
  },
  {
    id: 6,
    type: "multipleChoice",
    prompt: " Qual é a data do Dia Nacional do Surdo no Brasil? ",
    options: ["24 de abril", "1º de setembro", "26 de setembro", "25 de outubro"],
    correctAnswer: "26 de setembro",
  },
  {
    id: 7,
    type: "multipleChoice",
    prompt: "Quais são os três parâmetros primários da Libras?",
    options: ["Voz, entonação e ritmo", "Configuração das mãos, ponto de articulação e movimento", "Mímica, expressão facial e fala", "Olhar, escuta e fala"],
    correctAnswer: "Configuração das mãos, ponto de articulação e movimento",
  },
  {
    id: 8,
    type: "multipleChoice",
    prompt: "Qual destes NÃO é um recurso de acessibilidade para pessoas surdas?",
    options: ["Libras", "Legendagem", "Alarmes luminosos", "Descrição de Imagens"],
    correctAnswer: "Descrição de Imagens",
  },
  {
    id: 9,
    type: "multipleChoice",
    prompt: "Quem pode aprender e usar Libras?",
    options: ["Apenas pessoas surdas", "Apenas professores e pessoas surdas", "Qualquer pessoa interessada", "Somente intérpretes"],
    correctAnswer: "Qualquer pessoa interessada",
  },
  {
    id: 10,
    type: "multipleChoice",
    prompt: "Qual é a principal função do intérprete de Libras??",
    options: ["Ensinar Libras para surdos", "Traduzir a comunicação entre surdos e ouvintes", "Fazer apresentações em eventos", "Escrever textos em português"],
    correctAnswer: "Traduzir a comunicação entre surdos e ouvintes",
  }
];