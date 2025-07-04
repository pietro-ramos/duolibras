'use client'
import { useState, useEffect } from "react";
import { MultipleChoiceService } from "@/services/questionsService";
import { MultipleChoiceQuestionData } from "@/types/questions";
import MultipleChoiceBox from "@/components/multipleChoiceBox";

export default function MultipleChoiceGame() {
  // Estados para gerenciar as questões e o jogo
  const [questions, setQuestions] = useState<MultipleChoiceQuestionData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [finished, setFinished] = useState(false);

  // Carrega as questões ao montar o componente
  useEffect(() => {
    loadQuestions();
  }, []);

  /**
   * Carrega questões do MongoDB via API
   */
  const loadQuestions = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await MultipleChoiceService.getQuestions({ limit: 10 });
      
      if (response.success && response.data) {
        setQuestions(response.data);
        setUserAnswers(Array(response.data.length).fill(null));
      } else {
        setError(response.error || 'Erro ao carregar questões');
      }
    } catch (err) {
      setError('Erro de conexão com o servidor');
      console.error('Erro ao carregar questões:', err);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Manipula a resposta do usuário
   */
  const handleAnswer = (selected: string) => {
    if (userAnswers[currentIndex] !== null) return; // impede resposta dupla
    
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentIndex] = selected;
    setUserAnswers(updatedAnswers);
    setShowAnswer(true);
  };

  /**
   * Avança para a próxima questão
   */
  const handleNext = () => {
    setShowAnswer(false);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setFinished(true);
    }
  };

  /**
   * Volta para a questão anterior
   */
  const handlePrev = () => {
    setShowAnswer(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  /**
   * Reinicia o exercício
   */
  const handleRestart = () => {
    setCurrentIndex(0);
    setUserAnswers(Array(questions.length).fill(null));
    setShowAnswer(false);
    setFinished(false);
  };

  // Estados loading
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
        <p className="text-gray-600">Carregando questões...</p>
      </div>
    );
  }

  // Estado de erro
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p className="font-bold">Erro!</p>
          <p>{error}</p>
        </div>
        <button
          onClick={loadQuestions}
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Tentar novamente
        </button>
      </div>
    );
  }

  // Se não há questões disponíveis
  if (questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-gray-600 mb-4">Nenhuma questão disponível no momento.</p>
        <button
          onClick={loadQuestions}
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Recarregar
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const isCorrect = userAnswers[currentIndex] === currentQuestion.correctAnswer;
  const correctCount = userAnswers.filter((ans, idx) => 
    ans === questions[idx]?.correctAnswer).length;

  // Tela de resultados
  if (finished) {
    const scorePercentage = Math.round((correctCount / totalQuestions) * 100);
    
    return (
      <div className="flex flex-col items-center mt-10 p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            🎉 Exercício Concluído!
          </h2>
          
          <div className="text-center mb-6">
            <div className="text-6xl font-bold mb-2 text-blue-600">
              {scorePercentage}%
            </div>
            <p className="text-lg text-gray-600">
              Você acertou <span className="font-bold text-green-600">{correctCount}</span> de{' '}
              <span className="font-bold">{totalQuestions}</span> questões
            </p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-4 text-lg">📋 Revisão das respostas:</h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {questions.map((q, idx) => (
                <div key={q.id} className="p-3 border rounded-lg">
                  <div className="font-medium text-sm mb-1">
                    Questão {idx + 1}: {q.prompt}
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="mr-2">Sua resposta:</span>
                    <span className={`font-medium ${
                      userAnswers[idx] === q.correctAnswer 
                        ? "text-green-600" 
                        : "text-red-600"
                    }`}>
                      {userAnswers[idx] ?? "Não respondida"}
                    </span>
                    {userAnswers[idx] !== q.correctAnswer && (
                      <span className="ml-2 text-gray-500">
                        (Correta: {q.correctAnswer})
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              onClick={handleRestart}
            >
              🔄 Refazer exercício
            </button>
            <button
              className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
              onClick={() => window.history.back()}
            >
              ← Voltar aos jogos
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Interface principal do jogo
  return (
    <div className="flex flex-col items-center p-4 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-2xl">
        {/* Header com progresso */}
        <div className="mb-6 text-center">
          <div className="font-bold text-xl text-gray-800 mb-2">
            Questão {currentIndex + 1} de {totalQuestions}
          </div>
          
          {/* Barra de progresso */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
            ></div>
          </div>
          
          {/* Categoria e dificuldade */}
          <div className="flex justify-center gap-4 text-sm text-gray-600">
            <span className="bg-blue-100 px-2 py-1 rounded">
              📚 {currentQuestion.category || 'Geral'}
            </span>
            <span className="bg-green-100 px-2 py-1 rounded">
              ⭐ {currentQuestion.difficulty || 'Médio'}
            </span>
          </div>
        </div>

        {/* Componente da questão */}
        <div className="mb-6">
          <MultipleChoiceBox
            exercise={currentQuestion}
            onAnswer={handleAnswer}
            selected={userAnswers[currentIndex]}
            showAnswer={showAnswer}
          />
        </div>

        {/* Feedback da resposta */}
        {showAnswer && (
          <div className={`text-center mb-6 p-4 rounded-lg ${
            isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}>
            <div className="text-lg font-semibold">
              {isCorrect ? "✅ Correto!" : "❌ Incorreto!"}
            </div>
            {!isCorrect && (
              <div className="text-sm mt-1">
                Resposta correta: <span className="font-medium">{currentQuestion.correctAnswer}</span>
              </div>
            )}
          </div>
        )}

        {/* Botões de navegação */}
        <div className="flex justify-between items-center">
          <button 
            onClick={handlePrev} 
            disabled={currentIndex === 0}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors"
          >
            ← Anterior
          </button>

          <div className="text-sm text-gray-600">
            {userAnswers.filter(a => a !== null).length} / {totalQuestions} respondidas
          </div>

          <button
            onClick={handleNext}
            disabled={userAnswers[currentIndex] === null}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
          >
            {currentIndex === totalQuestions - 1 ? "🏁 Finalizar" : "Próxima →"}
          </button>
        </div>
      </div>
    </div>
  );
}