import mongoose from "mongoose";

// Schema para questões de múltipla escolha
const multipleChoiceQuestionSchema = new mongoose.Schema({
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
    categoria: {
        type: String,
        enum: ['geral', 'cultura', 'gramatica', 'vocabulario'],
        default: 'geral'
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

// Validação personalizada para garantir que a resposta correta está nas opções
multipleChoiceQuestionSchema.pre('save', function(next) {
    if (!this.opcoes.includes(this.respostaCorreta)) {
        next(new Error('A resposta correta deve estar presente nas opções'));
    }
    next();
});

const MultipleChoiceQuestion = mongoose.models.MultipleChoiceQuestion || 
    mongoose.model('MultipleChoiceQuestion', multipleChoiceQuestionSchema);

export default MultipleChoiceQuestion;
