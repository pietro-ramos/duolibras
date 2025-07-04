import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/connectDB';
import MultipleChoiceQuestion from '@/models/MultipleChoiceQuestion';
import TranslationQuestion from '@/models/TranslationQuestion';

/**
 * API Route para verificar o status do banco de dados
 * GET: Retorna informações sobre as coleções e conexão
 */

export async function GET(request: NextRequest) {
    try {
        console.log('🔍 Verificando status do banco de dados...');
        
        await connectDB();
        
        // Conta documentos em cada coleção
        const multipleChoiceCount = await MultipleChoiceQuestion.countDocuments();
        const translationCount = await TranslationQuestion.countDocuments();
        
        // Verifica a última questão de cada tipo
        const lastMultipleChoice = await MultipleChoiceQuestion
            .findOne()
            .sort({ createdAt: -1 })
            .select('pergunta categoria dificuldade createdAt')
            .lean();
            
        const lastTranslation = await TranslationQuestion
            .findOne()
            .sort({ createdAt: -1 })
            .select('pergunta direcao categoria dificuldade createdAt')
            .lean();
        
        return NextResponse.json({
            success: true,
            message: 'Banco de dados conectado com sucesso!',
            data: {
                connection: 'Ativa',
                collections: {
                    multipleChoice: {
                        count: multipleChoiceCount,
                        lastDocument: lastMultipleChoice
                    },
                    translation: {
                        count: translationCount,
                        lastDocument: lastTranslation
                    }
                },
                total: multipleChoiceCount + translationCount,
                timestamp: new Date().toISOString()
            }
        });
        
    } catch (error) {
        console.error('❌ Erro ao verificar banco de dados:', error);
        return NextResponse.json(
            { 
                success: false, 
                error: 'Erro ao conectar com banco de dados',
                details: error instanceof Error ? error.message : 'Erro desconhecido',
                suggestions: [
                    'Verifique se a URL do MongoDB está correta no .env.local',
                    'Confirme se o banco está acessível',
                    'Execute primeiro a API /api/seed para popular os dados'
                ]
            },
            { status: 500 }
        );
    }
}
