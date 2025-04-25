'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from '../../public/logo.png'


export default function NavBar (){
    const path = usePathname()
    return(
        <header className="flex items-center bg-primary justify-between p-4 shadow-md">
            <Link className='flex items-center' href='/'>
                <Image src={logo} alt="logo" height={60} width={60} className="mr-auto"/>
                <h1 className="font-bold text-2xl text-white">DuoLibras</h1>
            </Link>
            <nav className="grow">
                <ul>
                    <li><Link className={path.startsWith('/jogos') ? 'active' : undefined} href='/jogos'>Jogos</Link></li>
                    <li><Link className={path.startsWith('/aprendizado') ? 'active' : undefined} href='/aprendizado'>Aprendizado</Link></li>
                    <li><Link className={path.startsWith('/historia') ? 'active' : undefined} href='/historia'>História</Link></li>
                </ul>   
            </nav>
        </header>
    )
}