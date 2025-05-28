'use client'

import Link from "next/link"
import { BookOpen, Clock, Gamepad2 } from "lucide-react"

export default function Home() {
  return(
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 w-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center py-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">Duo<span className="text-blue-600">Libras</span></h1>
          <p className="text-xl max-w-2xl text-gray-600 mb-8 mx-auto">Aprenda Libras de forma interativa e divertida com uma plataforma completa para o aprendizado da Língua Brasileira de Sinais.</p>
        </div>

        <div className="flex justify-evenly mx-auto">

          <Link href='/aprendizado' className="group">
            <div className="card-menu card-hover">
              <div className="rounded-full bg-blue-100 p-4 mb-4 group-hover:bg-blue-200 transition-colors">
                <BookOpen className="w-8 h-8 text-blue-600"/>
              </div>
              <h3 className="font-bold text-2xl mb-3 text-gray-800">Aprendizado</h3>
              <p className="text-gray-600 leading-relaxed">Estude conteúdos como alfabeto, números, frases do cotidiano e mais</p>
            </div>
          </Link>

          <Link href='/jogos' className="group">
            <div className="card-menu card-hover">
              <div className="rounded-full bg-green-100 p-4 mb-4 group-hover:bg-green-200 transition-colors">
                <Gamepad2 className="w-8 h-8 text-green-600"/>
              </div>
              <h3 className="font-bold text-2xl mb-3 text-gray-800">Jogos</h3>
              <p className="text-gray-600 leading-relaxed">Coloque em prática seus conhecimentos com jogos interativos</p>
            </div>
          </Link>

          <Link href='/historia' className="group">
            <div className="card-menu card-hover">
              <div className=" rounded-full bg-purple-100 p-4 mb-4 group-hover:bg-purple-200 transition-colors">
                <Clock className="w-8 h-8 text-purple-600"/>
              </div>
              <h3 className="font-bold text-2xl mb-3 text-gray-800">História</h3>
              <p className="text-gray-600 leading-relaxed">Conheça a história e evolução da Língua Brasileira de Sinais</p>
            </div>
          </Link>

        </div>

        <div className="mt-40">
          <h2 className="font-bold text-center text-3xl">Por que escolher o DuoLibras?</h2>
          <div className="flex justify-between">
            <div>
              <p>Aprendizado interativo</p>
            </div>
            <div>
              <p>Gamificação</p>
            </div>
            <div>
              <p>Conteúdo com base no Instituto Federal</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
