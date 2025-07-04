import connectDB from '@/lib/connectDB';
import MultipleChoiceQuestion from '@/models/MultipleChoiceQuestion';
import TranslationQuestion from '@/models/TranslationQuestion';

// Dados das questões de múltipla escolha em português
const multipleChoiceData = [
  {
    pergunta: "Qual é o nome correto para se referir a uma pessoa que não ouve e utiliza a Língua de Sinais?",
    opcoes: ["Mudinho", "Deficiente auditivo", "Surdo-mudo", "Surdo"],
    respostaCorreta: "Surdo",
    categoria: "cultura",
    dificuldade: "facil"
  },
  {
    pergunta: "O que significa a sigla LIBRAS?",
    opcoes: ["Língua Brasileira de Sinais", "Linguagem Brasileira de Sinais", "Língua Internacional de Sinais", "Língua Brasileira de Surdos"],
    respostaCorreta: "Língua Brasileira de Sinais",
    categoria: "geral",
    dificuldade: "facil"
  },
  {
    pergunta: "O que é comunidade surda?",
    opcoes: ["Grupo só de surdos", "Grupo de ouvintes", "Espaço de troca entre surdos e ouvintes", "Grupo de intérpretes"],
    respostaCorreta: "Espaço de troca entre surdos e ouvintes",
    categoria: "cultura",
    dificuldade: "medio"
  },
  {
    pergunta: "Qual é o principal meio de comunicação da comunidade surda no Brasil?",
    opcoes: ["Leitura labial", "Escrita", "Libras", "Mímica"],
    respostaCorreta: "Libras",
    categoria: "geral",
    dificuldade: "facil"
  },
  {
    pergunta: "O que é bilinguismo para pessoas surdas no contexto escolar?",
    opcoes: ["Uso de duas línguas orais", "Uso de Libras (L1) e Língua Portuguesa escrita (L2)", "Uso de Libras e leitura labial", "Uso de Libras e inglês"],
    respostaCorreta: "Uso de Libras (L1) e Língua Portuguesa escrita (L2)",
    categoria: "gramatica",
    dificuldade: "medio"
  },
  {
    pergunta: "Qual é a data do Dia Nacional do Surdo no Brasil?",
    opcoes: ["24 de abril", "1º de setembro", "26 de setembro", "25 de outubro"],
    respostaCorreta: "26 de setembro",
    categoria: "cultura",
    dificuldade: "medio"
  },
  {
    pergunta: "Quais são os três parâmetros primários da Libras?",
    opcoes: ["Voz, entonação e ritmo", "Configuração das mãos, ponto de articulação e movimento", "Mímica, expressão facial e fala", "Olhar, escuta e fala"],
    respostaCorreta: "Configuração das mãos, ponto de articulação e movimento",
    categoria: "gramatica",
    dificuldade: "dificil"
  },
  {
    pergunta: "Qual destes NÃO é um recurso de acessibilidade para pessoas surdas?",
    opcoes: ["Libras", "Legendagem", "Alarmes luminosos", "Descrição de Imagens"],
    respostaCorreta: "Descrição de Imagens",
    categoria: "geral",
    dificuldade: "medio"
  },
  {
    pergunta: "Quem pode aprender e usar Libras?",
    opcoes: ["Apenas pessoas surdas", "Apenas professores e pessoas surdas", "Qualquer pessoa interessada", "Somente intérpretes"],
    respostaCorreta: "Qualquer pessoa interessada",
    categoria: "cultura",
    dificuldade: "facil"
  },
  {
    pergunta: "Qual é a principal função do intérprete de Libras?",
    opcoes: ["Ensinar Libras para surdos", "Traduzir a comunicação entre surdos e ouvintes", "Fazer apresentações em eventos", "Escrever textos em português"],
    respostaCorreta: "Traduzir a comunicação entre surdos e ouvintes",
    categoria: "geral",
    dificuldade: "medio"
  }
];

// URLs dos GIFs para questões de tradução
const mediaUrls = {
  obrigado: "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/03/obrigado-gif.gif",
  boa_noite: "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/03/boa-noite-gif.gif",
  bom_dia: "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/03/bom-dia-gif.gif",
  chocolate: "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/04/chocolate.gif",
  marco: "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/06/marco.gif",
  irmaos: "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/04/irmaos.gif",
  verao: "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/09/verao.gif",
  coelho: "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/08/Coelh@.gif",
  banana: "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/04/banana.gif",
  feliz: "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/08/Feliz.gif",
  mesa: "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/05/mesa.gif",
  gato: "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/08/Gat@.gif",
  tesoura: "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/06/tesoura.gif",
  mochila: "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/06/mochila.gif",
  estojo: "https://ifpr.edu.br/umuarama/wp-content/uploads/sites/26/2021/06/estojo.gif"
};

// Dados das questões de tradução (Libras para Português) em português
const translationLibrasPtData = [
  {
    pergunta: "Qual é a tradução correta deste sinal em LIBRAS?",
    opcoes: ["Bom dia", "Boa noite", "Obrigado", "Por favor"],
    respostaCorreta: "Boa noite",
    urlMidia: mediaUrls.boa_noite,
    direcao: "libras-pt",
    categoria: "cumprimentos",
    dificuldade: "facil"
  },
  {
    pergunta: "Qual doce está sendo dito em LIBRAS?",
    opcoes: ["Pudim", "Churros", "Chocolate", "Doce de leite"],
    respostaCorreta: "Chocolate",
    urlMidia: mediaUrls.chocolate,
    direcao: "libras-pt",
    categoria: "comida",
    dificuldade: "facil"
  },
  {
    pergunta: "Qual mês está sendo dito?",
    opcoes: ["Dezembro", "Junho", "Março", "Fevereiro"],
    respostaCorreta: "Março",
    urlMidia: mediaUrls.marco,
    direcao: "libras-pt",
    categoria: "basico",
    dificuldade: "medio"
  },
  {
    pergunta: "Qual parte da família está sendo falada?",
    opcoes: ["Pais", "Primos", "Irmãos", "Afilhado"],
    respostaCorreta: "Irmãos",
    urlMidia: mediaUrls.irmaos,
    direcao: "libras-pt",
    categoria: "familia",
    dificuldade: "facil"
  },
  {
    pergunta: "Qual estação do ano está sendo falada em LIBRAS?",
    opcoes: ["Verão", "Outono", "Inverno", "Primavera"],
    respostaCorreta: "Verão",
    urlMidia: mediaUrls.verao,
    direcao: "libras-pt",
    categoria: "basico",
    dificuldade: "medio"
  },
  {
    pergunta: "Qual o animal?",
    opcoes: ["Cachorro", "Gato", "Pássaro", "Coelho"],
    respostaCorreta: "Coelho",
    urlMidia: mediaUrls.coelho,
    direcao: "libras-pt",
    categoria: "animais",
    dificuldade: "facil"
  },
  {
    pergunta: "Qual expressão cordial está sendo dita?",
    opcoes: ["Obrigado", "Desculpa", "Por favor", "Com licença"],
    respostaCorreta: "Obrigado",
    urlMidia: mediaUrls.obrigado,
    direcao: "libras-pt",
    categoria: "cumprimentos",
    dificuldade: "facil"
  },
  {
    pergunta: "Qual a fruta?",
    opcoes: ["Morango", "Maracujá", "Banana", "Maçã"],
    respostaCorreta: "Banana",
    urlMidia: mediaUrls.banana,
    direcao: "libras-pt",
    categoria: "comida",
    dificuldade: "facil"
  },
  {
    pergunta: "Qual sentimento está sendo expressado?",
    opcoes: ["Feliz", "Triste", "Animado", "Cansado"],
    respostaCorreta: "Feliz",
    urlMidia: mediaUrls.feliz,
    direcao: "libras-pt",
    categoria: "emocoes",
    dificuldade: "facil"
  },
  {
    pergunta: "A que objeto está se referindo?",
    opcoes: ["Estante", "Mesa", "Bancada", "Mesanino"],
    respostaCorreta: "Mesa",
    urlMidia: mediaUrls.mesa,
    direcao: "libras-pt",
    categoria: "objetos",
    dificuldade: "facil"
  }
];

// Dados das questões de tradução (Português para Libras) em português
const translationPtLibrasData = [
  {
    pergunta: "Selecione o gesto correto para: 'Bom dia'",
    opcoes: [mediaUrls.bom_dia, mediaUrls.obrigado, mediaUrls.boa_noite],
    respostaCorreta: mediaUrls.bom_dia,
    direcao: "pt-libras",
    categoria: "cumprimentos",
    dificuldade: "facil"
  },
  {
    pergunta: "Selecione o gesto correto para: 'Coelho'",
    opcoes: [mediaUrls.coelho, mediaUrls.gato, mediaUrls.mochila],
    respostaCorreta: mediaUrls.coelho,
    direcao: "pt-libras",
    categoria: "animais",
    dificuldade: "facil"
  },
  {
    pergunta: "Selecione o gesto correto para: 'Tesoura'",
    opcoes: [mediaUrls.mochila, mediaUrls.tesoura, mediaUrls.estojo],
    respostaCorreta: mediaUrls.tesoura,
    direcao: "pt-libras",
    categoria: "objetos",
    dificuldade: "medio"
  }
];

/**
 * Função para popular o banco de dados com questões em português
 */
export async function seedDatabase() {
    try {
        console.log('🌱 Iniciando seeding do banco de dados com campos em português...');
        
        await connectDB();
        
        // Limpa as coleções existentes
        await MultipleChoiceQuestion.deleteMany({});
        await TranslationQuestion.deleteMany({});
        
        console.log('🗑️ Coleções limpas...');
        
        // Insere questões de múltipla escolha
        const insertedMultipleChoice = await MultipleChoiceQuestion.insertMany(multipleChoiceData);
        console.log(`✅ ${insertedMultipleChoice.length} questões de múltipla escolha inseridas (campos em português)`);
        
        // Insere questões de tradução Libras->PT
        const insertedLibrasPt = await TranslationQuestion.insertMany(translationLibrasPtData);
        console.log(`✅ ${insertedLibrasPt.length} questões Libras->PT inseridas (campos em português)`);
        
        // Insere questões de tradução PT->Libras
        const insertedPtLibras = await TranslationQuestion.insertMany(translationPtLibrasData);
        console.log(`✅ ${insertedPtLibras.length} questões PT->Libras inseridas (campos em português)`);
        
        console.log('🎉 Seeding completado com sucesso! Todas as questões foram inseridas com campos em português.');
        
        return {
            multipleChoice: insertedMultipleChoice.length,
            translationLibrasPt: insertedLibrasPt.length,
            translationPtLibras: insertedPtLibras.length,
            total: insertedMultipleChoice.length + insertedLibrasPt.length + insertedPtLibras.length
        };
        
    } catch (error) {
        console.error('❌ Erro durante o seeding:', error);
        throw error;
    }
}

// Script executável
if (require.main === module) {
    seedDatabase()
        .then(() => {
            console.log('Seeding finalizado. Encerrando processo...');
            process.exit(0);
        })
        .catch((error) => {
            console.error('Erro fatal durante seeding:', error);
            process.exit(1);
        });
}
