'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, Gamepad2, Clock, Menu, X } from "lucide-react"
import Image from "next/image"
import logo from '../../public/logo.png'


export default function NavBar (){
    const path = usePathname()

    const navItems = [
    { href: "/", label: "Início", icon: Home },
    { href: "/aprendizado", label: "Aprendizado", icon: BookOpen },
    { href: "/jogos", label: "Jogos", icon: Gamepad2 },
    { href: "/historia", label: "História", icon: Clock },
  ]

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-white p-2 rounded-lg">
              <Image src={logo} alt="logo" className="w-10 h-10"/>
            </div>
            <span className="text-white font-bold text-xl">DuoLibras</span>
          </Link>

          <div className="flex space-x-4">
            {navItems.map((item) => {
              const IconComponent = item.icon
              const isActive = path === item.href || (item.href !== "/" && path.startsWith(item.href))

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive ? "bg-white/20 text-white" : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              )
            })}
          </div>
      </div>
    </nav>
  )
}