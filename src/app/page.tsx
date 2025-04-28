'use client'

import Link from "next/link"

export default function Home() {
  return(
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 gap-1 w-screen">
      <Link href='/jogos'><div className="card-menu card-hover">Jogos</div></Link>
      <Link href='/aprendizado'><div className="card-menu card-hover">Aprendizado</div></Link>
      <Link href='/historia'><div className="card-menu card-hover">Historia</div></Link>
    </main>
  )
}
