'use server'
import mongoose from 'mongoose';

// Define the MongoDB connection string
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/duolibras'

if (!DATABASE_URL) {
  throw new Error(
    'Please define the DATABASE_URL environment variable inside .env.local'
  );
}

// Define a global variable to cache the connection
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

/**
 * Conecta com o MongoDB usando Mongoose
 * @returns {Promise} Conexão com MongoDB
 */
async function connectDB() {
  // Se já existe uma conexão ativa, retorna ela
  if (cached.conn) {
    return cached.conn
  }

  // Se não existe uma promise de conexão, cria uma
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 10000, // 10 segundos timeout
      socketTimeoutMS: 45000, // 45 segundos timeout
      family: 4, // Usa IPv4, pula IPv6
    };

    console.log('🔌 Conectando ao MongoDB...');
    
    cached.promise = mongoose.connect(DATABASE_URL, opts).then((mongoose) => {
      console.log('✅ MongoDB conectado com sucesso!');
      return mongoose
    }).catch((error) => {
      console.error('❌ Erro na conexão com MongoDB:', error);
      cached.promise = null; // Reset da promise em caso de erro
      throw error;
    });
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    cached.promise = null; // Reset da promise em caso de erro
    throw error;
  }
}

export default connectDB