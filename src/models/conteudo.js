import mongoose from "mongoose";

const conteudoSchema = new Schema({
    titulo: String,
    imagemUrl: String,
    descricao: String,
});

const Conteudo = mongoose.models.Conteudo || mongoose.model('Conteudo', conteudoSchema);

export default Conteudo;