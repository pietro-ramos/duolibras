'use server'
import connectDB from "./connectDB";
import Conteudo from '@/models/conteudo'

async function connDB(){
    try(await connectDB()){
        console.log('Conexão bem sucedida')
    }
    catch(e){
        console.log("Houve falha na conexão com o banco", e)
    }
}

export async function getConteudos(){
    await connDB()
    return await Conteudo.find({})
}