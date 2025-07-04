import { NextRequest, NextResponse } from 'next/server';
import { seedDatabase } from '@/lib/seedDatabase';

/**
 * API Route para popular o banco de dados com questões iniciais
 * POST: Executa o seeding do banco
 */

export async function POST(request: NextRequest) {
    try {
        console.log('🌱 Executando seeding do banco de dados...');
        
        const result = await seedDatabase();
        
        return NextResponse.json({
            success: true,
            message: 'Banco de dados populado com sucesso!',
            data: result
        });
        
    } catch (error) {
        console.error('Erro durante o seeding:', error);
        return NextResponse.json(
            { 
                success: false, 
                error: 'Erro ao popular banco de dados',
                details: error instanceof Error ? error.message : 'Erro desconhecido'
            },
            { status: 500 }
        );
    }
}

// Apenas permite POST para segurança
export async function GET() {
    return NextResponse.json(
        { 
            success: false, 
            error: 'Método não permitido. Use POST para executar seeding.' 
        },
        { status: 405 }
    );
}
