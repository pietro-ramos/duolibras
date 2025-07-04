import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/connectDB';
import MultipleChoiceQuestion from '@/models/MultipleChoiceQuestion';

/**
 * API Route para questões de múltipla escolha
 * GET: Retorna todas as questões ativas
 * POST: Cria uma nova questão
 */

interface QuestionDocument {
    _id: any;
    pergunta: string;
    opcoes: string[];
    respostaCorreta: string;
    categoria: string;
    dificuldade: string;
    createdAt: Date;
}

export async function GET(request: NextRequest) {
    try {
        await connectDB();
        
        const { searchParams } = new URL(request.url);
        const category = searchParams.get('category');
        const difficulty = searchParams.get('difficulty');
        const limit = parseInt(searchParams.get('limit') || '10');
        
        // Constrói o filtro baseado nos parâmetros
        const filter: Record<string, any> = { ativo: true };
        
        if (category) {
            filter.categoria = category;
        }
        
        if (difficulty) {
            filter.dificuldade = difficulty;
        }
        
        const questions = await MultipleChoiceQuestion
            .find(filter)
            .limit(limit)
            .sort({ createdAt: -1 })
            .lean() as QuestionDocument[];
        
        // Remove campos internos do MongoDB e converte _id para id
        const formattedQuestions = questions.map((q: QuestionDocument) => ({
            id: q._id.toString(),
            prompt: q.pergunta,
            options: q.opcoes,
            correctAnswer: q.respostaCorreta,
            category: q.categoria,
            difficulty: q.dificuldade
        }));
        
        return NextResponse.json({
            success: true,
            data: formattedQuestions,
            total: formattedQuestions.length
        });
        
    } catch (error) {
        console.error('Erro ao buscar questões de múltipla escolha:', error);
        return NextResponse.json(
            { 
                success: false, 
                error: 'Erro interno do servidor' 
            },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        await connectDB();
        
        const body = await request.json();
        const { prompt, options, correctAnswer, category, difficulty } = body;
        
        // Validações básicas
        if (!prompt || !options || !correctAnswer) {
            return NextResponse.json(
                { 
                    success: false, 
                    error: 'Campos obrigatórios: prompt, options, correctAnswer' 
                },
                { status: 400 }
            );
        }
        
        if (!Array.isArray(options) || options.length < 2) {
            return NextResponse.json(
                { 
                    success: false, 
                    error: 'Options deve ser um array com pelo menos 2 itens' 
                },
                { status: 400 }
            );
        }
        
        if (!options.includes(correctAnswer)) {
            return NextResponse.json(
                { 
                    success: false, 
                    error: 'A resposta correta deve estar presente nas opções' 
                },
                { status: 400 }
            );
        }
        
        // Cria nova questão com campos em português
        const newQuestion = new MultipleChoiceQuestion({
            pergunta: prompt,
            opcoes: options,
            respostaCorreta: correctAnswer,
            categoria: category || 'geral',
            dificuldade: difficulty || 'medio',
            ativo: true
        });
        
        const savedQuestion = await newQuestion.save();
        
        return NextResponse.json({
            success: true,
            data: {
                id: savedQuestion._id.toString(),
                prompt: savedQuestion.pergunta,
                options: savedQuestion.opcoes,
                correctAnswer: savedQuestion.respostaCorreta,
                category: savedQuestion.categoria,
                difficulty: savedQuestion.dificuldade
            }
        }, { status: 201 });
        
    } catch (error) {
        console.error('Erro ao criar questão de múltipla escolha:', error);
        return NextResponse.json(
            { 
                success: false, 
                error: 'Erro interno do servidor' 
            },
            { status: 500 }
        );
    }
}
