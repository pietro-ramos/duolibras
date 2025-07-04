// Interfaces unificadas para questões de exercícios

export interface BaseQuestion {
    id: string;
    prompt: string;
    options: string[];
    correctAnswer: string;
    category?: string;
    difficulty?: 'easy' | 'medium' | 'hard';
    isActive?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface MultipleChoiceQuestionData extends BaseQuestion {
    type: 'multipleChoice';
    category?: 'general' | 'culture' | 'grammar' | 'vocabulary';
}

export interface TranslationQuestionData extends BaseQuestion {
    type: 'translation';
    mediaUrl?: string;
    direction: 'libras-pt' | 'pt-libras';
    category?: 'basic' | 'family' | 'emotions' | 'objects' | 'animals' | 'food' | 'greetings';
}

export type QuestionData = MultipleChoiceQuestionData | TranslationQuestionData;

// Interface para respostas do usuário
export interface UserAnswer {
    questionId: string;
    selectedAnswer: string;
    isCorrect: boolean;
    timestamp: Date;
}

// Interface para resultados de jogos
export interface GameResult {
    gameType: 'multipleChoice' | 'translation';
    totalQuestions: number;
    correctAnswers: number;
    score: number; // Porcentagem
    duration: number; // Em segundos
    answers: UserAnswer[];
    completedAt: Date;
}

// Enums para melhor type safety
export enum QuestionCategory {
    // Multiple Choice Categories
    GENERAL = 'general',
    CULTURE = 'culture',
    GRAMMAR = 'grammar',
    VOCABULARY = 'vocabulary',
    
    // Translation Categories
    BASIC = 'basic',
    FAMILY = 'family',
    EMOTIONS = 'emotions',
    OBJECTS = 'objects',
    ANIMALS = 'animals',
    FOOD = 'food',
    GREETINGS = 'greetings'
}

export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard'
}

export enum TranslationDirection {
    LIBRAS_TO_PT = 'libras-pt',
    PT_TO_LIBRAS = 'pt-libras'
}

// === INTERFACES EM PORTUGUÊS (NOVA PADRONIZAÇÃO) ===

export interface QuestaoBase {
    id: string;
    pergunta: string;
    opcoes: string[];
    respostaCorreta: string;
    categoria?: string;
    dificuldade?: 'facil' | 'medio' | 'dificil';
    ativo?: boolean;
    criadoEm?: Date;
    atualizadoEm?: Date;
}

export interface DadosQuestaoMultiplaEscolha extends QuestaoBase {
    tipo: 'multiplaEscolha';
    categoria?: 'geral' | 'cultura' | 'gramatica' | 'vocabulario';
}

export interface DadosQuestaoTraducao extends QuestaoBase {
    tipo: 'traducao';
    urlMidia?: string;
    direcao: 'libras-pt' | 'pt-libras';
    categoria?: 'basico' | 'familia' | 'emocoes' | 'objetos' | 'animais' | 'comida' | 'cumprimentos';
}

export type DadosQuestao = DadosQuestaoMultiplaEscolha | DadosQuestaoTraducao;

// Enums em português
export enum CategoriaQuestao {
    // Categorias de Múltipla Escolha
    GERAL = 'geral',
    CULTURA = 'cultura',
    GRAMATICA = 'gramatica',
    VOCABULARIO = 'vocabulario',
    
    // Categorias de Tradução
    BASICO = 'basico',
    FAMILIA = 'familia',
    EMOCOES = 'emocoes',
    OBJETOS = 'objetos',
    ANIMAIS = 'animais',
    COMIDA = 'comida',
    CUMPRIMENTOS = 'cumprimentos'
}

export enum Dificuldade {
    FACIL = 'facil',
    MEDIO = 'medio',
    DIFICIL = 'dificil'
}

export enum DirecaoTraducao {
    LIBRAS_PARA_PT = 'libras-pt',
    PT_PARA_LIBRAS = 'pt-libras'
}

// Funções de mapeamento para facilitar a migração gradual
export function mapearParaPortugues(questao: MultipleChoiceQuestionData | TranslationQuestionData): DadosQuestaoMultiplaEscolha | DadosQuestaoTraducao {
    const base = {
        id: questao.id,
        pergunta: questao.prompt,
        opcoes: questao.options,
        respostaCorreta: questao.correctAnswer,
        categoria: questao.category,
        dificuldade: questao.difficulty === 'easy' ? 'facil' : questao.difficulty === 'medium' ? 'medio' : 'dificil',
        ativo: questao.isActive,
        criadoEm: questao.createdAt,
        atualizadoEm: questao.updatedAt
    };

    if (questao.type === 'translation') {
        const translationQ = questao as TranslationQuestionData;
        return {
            ...base,
            tipo: 'traducao' as const,
            urlMidia: translationQ.mediaUrl,
            direcao: translationQ.direction
        };
    } else {
        return {
            ...base,
            tipo: 'multiplaEscolha' as const
        };
    }
}

export function mapearParaIngles(questao: DadosQuestaoMultiplaEscolha | DadosQuestaoTraducao): MultipleChoiceQuestionData | TranslationQuestionData {
    const base = {
        id: questao.id,
        prompt: questao.pergunta,
        options: questao.opcoes,
        correctAnswer: questao.respostaCorreta,
        category: questao.categoria,
        difficulty: questao.dificuldade === 'facil' ? 'easy' : questao.dificuldade === 'medio' ? 'medium' : 'hard',
        isActive: questao.ativo,
        createdAt: questao.criadoEm,
        updatedAt: questao.atualizadoEm
    };

    if (questao.tipo === 'traducao') {
        const traducaoQ = questao as DadosQuestaoTraducao;
        return {
            ...base,
            type: 'translation' as const,
            mediaUrl: traducaoQ.urlMidia,
            direction: traducaoQ.direcao
        };
    } else {
        return {
            ...base,
            type: 'multipleChoice' as const
        };
    }
}
