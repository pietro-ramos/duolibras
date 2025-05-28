'use client'

import Link from "next/link"
import { BookOpen, Clock, Gamepad2 } from "lucide-react"

export default function Home() {
  return(
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 w-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center items-center flex-col mt-16">
          <h1 className="text-5xl font-bold mb-4">Duo<span className="text-blue-600">Libras</span></h1>
          <p className="text-xl text-center max-w-2xl text-gray-600">Aprenda Libras de forma interativa e divertida com uma plataforma completa para o aprendizado da Língua Brasileira de Sinais.</p>
        </div>

        <div>
          <Link href='/jogos'>
            <div className="card-menu card-hover">
              
            </div>
          </Link>
          <Link href='/aprendizado'>
            <BookOpen/>
            <div className="card-menu card-hover">Aprendizado</div>
          </Link>
          <Link href='/historia'>
            <div className="card-menu card-hover">Historia</div>
          </Link>
        </div>

        <div>
          <h2>Por que escolher o DuoLibras?</h2>
        </div>
      </div>
    </main>
  )
}
