import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/connectDB';
import TranslationQuestion from '@/models/TranslationQuestion';

/**
 * API Route para questões de tradução
 * GET: Retorna questões filtradas por direção (libras-pt ou pt-libras)
 * POST: Cria uma nova questão de tradução
 */

interface TranslationDocument {
    _id: any;
    pergunta: string;
    opcoes: string[];
    respostaCorreta: string;
    urlMidia?: string;
    direcao: string;
    categoria: string;
    dificuldade: string;
    createdAt: Date;
}

export async function GET(request: NextRequest) {
    try {
        await connectDB();
        
        const { searchParams } = new URL(request.url);
        const direction = searchParams.get('direction');
        const category = searchParams.get('category');
        const difficulty = searchParams.get('difficulty');
        const limit = parseInt(searchParams.get('limit') || '10');
        
        // Validação obrigatória da direção
        if (!direction || !['libras-pt', 'pt-libras'].includes(direction)) {
            return NextResponse.json(
                { 
                    success: false, 
                    error: 'Parâmetro direction obrigatório: libras-pt ou pt-libras' 
                },
                { status: 400 }
            );
        }
        
        // Constrói o filtro baseado nos parâmetros
        const filter: Record<string, any> = { 
            ativo: true,
            direcao: direction
        };
        
        if (category) {
            filter.categoria = category;
        }
        
        if (difficulty) {
            filter.dificuldade = difficulty;
        }
        
        const questions = await TranslationQuestion
            .find(filter)
            .limit(limit)
            .sort({ createdAt: -1 })
            .lean() as TranslationDocument[];
        
        // Remove campos internos do MongoDB e converte _id para id
        const formattedQuestions = questions.map((q: TranslationDocument) => ({
            id: q._id.toString(),
            prompt: q.pergunta,
            options: q.opcoes,
            correctAnswer: q.respostaCorreta,
            mediaUrl: q.urlMidia,
            direction: q.direcao,
            category: q.categoria,
            difficulty: q.dificuldade
        }));
        
        return NextResponse.json({
            success: true,
            data: formattedQuestions,
            total: formattedQuestions.length,
            direction: direction
        });
        
    } catch (error) {
        console.error('Erro ao buscar questões de tradução:', error);
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
        const { prompt, options, correctAnswer, mediaUrl, direction, category, difficulty } = body;
        
        // Validações básicas
        if (!prompt || !options || !correctAnswer || !direction) {
            return NextResponse.json(
                { 
                    success: false, 
                    error: 'Campos obrigatórios: prompt, options, correctAnswer, direction' 
                },
                { status: 400 }
            );
        }
        
        if (!['libras-pt', 'pt-libras'].includes(direction)) {
            return NextResponse.json(
                { 
                    success: false, 
                    error: 'Direction deve ser libras-pt ou pt-libras' 
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
        
        // Validação específica para libras-pt: deve ter mediaUrl
        if (direction === 'libras-pt' && !mediaUrl) {
            return NextResponse.json(
                { 
                    success: false, 
                    error: 'Questões libras-pt devem ter mediaUrl' 
                },
                { status: 400 }
            );
        }
        
        const newQuestion = new TranslationQuestion({
            pergunta: prompt,
            opcoes: options,
            respostaCorreta: correctAnswer,
            urlMidia: mediaUrl,
            direcao: direction,
            categoria: category || 'basico',
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
                mediaUrl: savedQuestion.urlMidia,
                direction: savedQuestion.direcao,
                category: savedQuestion.categoria,
                difficulty: savedQuestion.dificuldade
            }
        }, { status: 201 });
        
    } catch (error) {
        console.error('Erro ao criar questão de tradução:', error);
        return NextResponse.json(
            { 
                success: false, 
                error: 'Erro interno do servidor' 
            },
            { status: 500 }
        );
    }
}
