/**
 * Serviços para comunicação com as APIs de questões
 */

import { MultipleChoiceQuestionData, TranslationQuestionData } from '@/types/questions';

// Tipos para respostas da API
interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    total?: number;
}

// Configuração base da API
const API_BASE_URL = '/api';

/**
 * Serviço para questões de múltipla escolha
 */
export class MultipleChoiceService {
    
    /**
     * Busca questões de múltipla escolha
     */
    static async getQuestions(params?: {
        category?: string;
        difficulty?: string;
        limit?: number;
    }): Promise<ApiResponse<MultipleChoiceQuestionData[]>> {
        try {
            const searchParams = new URLSearchParams();
            
            if (params?.category) searchParams.set('category', params.category);
            if (params?.difficulty) searchParams.set('difficulty', params.difficulty);
            if (params?.limit) searchParams.set('limit', params.limit.toString());
            
            const url = `${API_BASE_URL}/questions/multiple-choice?${searchParams}`;
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status}`);
            }
            
            return await response.json();
            
        } catch (error) {
            console.error('Erro ao buscar questões de múltipla escolha:', error);
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Erro desconhecido'
            };
        }
    }
    
    /**
     * Cria uma nova questão de múltipla escolha
     */
    static async createQuestion(question: Omit<MultipleChoiceQuestionData, 'id' | 'createdAt' | 'updatedAt' | 'isActive'>): Promise<ApiResponse<MultipleChoiceQuestionData>> {
        try {
            const response = await fetch(`${API_BASE_URL}/questions/multiple-choice`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(question),
            });
            
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `Erro HTTP: ${response.status}`);
            }
            
            return await response.json();
            
        } catch (error) {
            console.error('Erro ao criar questão de múltipla escolha:', error);
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Erro desconhecido'
            };
        }
    }
}

/**
 * Serviço para questões de tradução
 */
export class TranslationService {
    
    /**
     * Busca questões de tradução por direção
     */
    static async getQuestions(direction: 'libras-pt' | 'pt-libras', params?: {
        category?: string;
        difficulty?: string;
        limit?: number;
    }): Promise<ApiResponse<TranslationQuestionData[]>> {
        try {
            const searchParams = new URLSearchParams();
            searchParams.set('direction', direction);
            
            if (params?.category) searchParams.set('category', params.category);
            if (params?.difficulty) searchParams.set('difficulty', params.difficulty);
            if (params?.limit) searchParams.set('limit', params.limit.toString());
            
            const url = `${API_BASE_URL}/questions/translation?${searchParams}`;
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status}`);
            }
            
            return await response.json();
            
        } catch (error) {
            console.error('Erro ao buscar questões de tradução:', error);
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Erro desconhecido'
            };
        }
    }
    
    /**
     * Cria uma nova questão de tradução
     */
    static async createQuestion(question: Omit<TranslationQuestionData, 'id' | 'createdAt' | 'updatedAt' | 'isActive'>): Promise<ApiResponse<TranslationQuestionData>> {
        try {
            const response = await fetch(`${API_BASE_URL}/questions/translation`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(question),
            });
            
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `Erro HTTP: ${response.status}`);
            }
            
            return await response.json();
            
        } catch (error) {
            console.error('Erro ao criar questão de tradução:', error);
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Erro desconhecido'
            };
        }
    }
}

/**
 * Serviço para operações de seeding
 */
export class SeedService {
    
    /**
     * Executa o seeding do banco de dados
     */
    static async seedDatabase(): Promise<ApiResponse<any>> {
        try {
            const response = await fetch(`${API_BASE_URL}/seed`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `Erro HTTP: ${response.status}`);
            }
            
            return await response.json();
            
        } catch (error) {
            console.error('Erro ao executar seeding:', error);
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Erro desconhecido'
            };
        }
    }
}
