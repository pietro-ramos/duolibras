'use client'
import { useState } from 'react';
import { SeedService } from '@/services/questionsService';

export default function AdminPanel() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSeedDatabase = async () => {
    setLoading(true);
    setMessage(null);
    setError(null);
    
    try {
      const response = await SeedService.seedDatabase();
      
      if (response.success) {
        setMessage('✅ Banco de dados populado com sucesso!');
      } else {
        setError(response.error || 'Erro desconhecido');
      }
    } catch (err) {
      setError('Erro de conexão com o servidor');
    } finally {
      setLoading(false);
    }
  };

  const checkDatabaseStatus = async () => {
    setLoading(true);
    setMessage(null);
    setError(null);
    
    try {
      const response = await fetch('/api/status');
      const data = await response.json();
      
      if (data.success) {
        setMessage(`
📊 Status do Banco:
- Questões Múltipla Escolha: ${data.data.collections.multipleChoice.count}
- Questões de Tradução: ${data.data.collections.translation.count}
- Total: ${data.data.total} questões
        `);
      } else {
        setError(data.error || 'Erro ao verificar status');
      }
    } catch (err) {
      setError('Erro de conexão com o servidor');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
            🛠️ Painel Administrativo DuoLibras
          </h1>
          
          <div className="space-y-6">
            {/* Botões de Ação */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={handleSeedDatabase}
                disabled={loading}
                className="p-4 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  '🌱'
                )}
                Popular Banco de Dados
              </button>
              
              <button
                onClick={checkDatabaseStatus}
                disabled={loading}
                className="p-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  '📊'
                )}
                Verificar Status
              </button>
            </div>
            
            {/* Área de Mensagens */}
            {message && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                <pre className="whitespace-pre-wrap font-mono text-sm">{message}</pre>
              </div>
            )}
            
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                <p className="font-bold">Erro:</p>
                <p>{error}</p>
              </div>
            )}
            
            {/* Instruções */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-2">📋 Instruções:</h3>
              <ol className="list-decimal list-inside space-y-1 text-blue-700 text-sm">
                <li>Primeiro, verifique o status do banco de dados</li>
                <li>Se estiver vazio, clique em "Popular Banco de Dados"</li>
                <li>Aguarde a confirmação de sucesso</li>
                <li>Teste os jogos em <a href="/jogos" className="underline">localhost:3000/jogos</a></li>
              </ol>
            </div>
            
            {/* Links Úteis */}
            <div className="border-t pt-4">
              <h3 className="font-semibold text-gray-800 mb-2">🔗 Links Úteis:</h3>
              <div className="space-y-2 text-sm">
                <a href="/jogos" className="block text-blue-600 hover:underline">
                  🎮 Jogos (Múltipla Escolha e Tradução)
                </a>
                <a href="/api/status" className="block text-blue-600 hover:underline">
                  📊 API Status (JSON)
                </a>
                <a href="/historia" className="block text-blue-600 hover:underline">
                  📚 História da Libras
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
