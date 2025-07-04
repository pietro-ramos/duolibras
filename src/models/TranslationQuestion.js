import mongoose from "mongoose";

// Schema para questões de tradução
const translationQuestionSchema = new mongoose.Schema({
    pergunta: {
        type: String,
        required: true,
        trim: true
    },
    opcoes: [{
        type: String,
        required: true,
        trim: true
    }],
    respostaCorreta: {
        type: String,
        required: true,
        trim: true
    },
    urlMidia: {
        type: String,
        required: false
    },
    direcao: {
        type: String,
        enum: ['libras-pt', 'pt-libras'],
        required: true
    },
    categoria: {
        type: String,
        enum: ['basico', 'familia', 'emocoes', 'objetos', 'animais', 'comida', 'cumprimentos'],
        default: 'basico'
    },
    dificuldade: {
        type: String,
        enum: ['facil', 'medio', 'dificil'],
        default: 'medio'
    },
    ativo: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

// Validação personalizada
translationQuestionSchema.pre('save', function(next) {
    if (!this.opcoes.includes(this.respostaCorreta)) {
        next(new Error('A resposta correta deve estar presente nas opções'));
    }
    
    // Se a direção for libras-pt, deve ter urlMidia
    if (this.direcao === 'libras-pt' && !this.urlMidia) {
        next(new Error('Questões Libras para Português devem ter urlMidia'));
    }
    
    next();
});

const TranslationQuestion = mongoose.models.TranslationQuestion || 
    mongoose.model('TranslationQuestion', translationQuestionSchema);

export default TranslationQuestion;
