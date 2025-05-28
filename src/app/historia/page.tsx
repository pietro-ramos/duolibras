import { Calendar, Users, Award, BookOpen, Book } from "lucide-react"

export default function Historia(){

    return(
        <main>
            <div className=" text-center mx-auto p-4 mt-10">
                <h1 className="font-bold text-3xl text-gray-800 mb-4">História da Libras</h1>
                <p className="text-gray-600 text-xl">Conheça a trajetória e evolução da Língua Brasileira de Sinais</p>
            </div>
            <div className="flex flex-col gap-4 mx-auto max-w-screen-lg max-h-[500px] h-full">
                <div className="card-historia">
                    <div className="bg-blue-100 rounded-full p-2 h-fit ">
                        <Calendar className="w-6 h-6 text-blue-600"/>
                    </div>
                    <div className="ml-4">
                        <h3 className="font-bold text-xl text-gray-800 mb-4">1857 - Os primórdios</h3>
                        <p className="text-base text-gray-600 leading-relaxed">A libras teve origem com a chegada do educador francês Ernest Huet ao Brasil, trazendo a língua de sinais francesa. Ele fundou a primeira escola para surdos no país, o Imperial Instituto de Surdos Mudos, atual INES</p>
                    </div>
                </div>
                <div className="card-historia">
                    <div className="bg-green-100 rounded-full p-2 h-fit ">
                        <Users className="w-6 h-6 text-green-600"/>
                    </div>
                    <div className="ml-4">
                        <h3 className="font-bold text-xl text-gray-800 mb-4">1960 - 1980 - Desenvolvimento</h3>
                        <p className="text-base text-gray-600 leading-relaxed">Durante esse período, a Libras se desenvolveu naturalmente nas comunidades surdas, incorporando elementos regionais e culturais brasileiros, diferenciando-se pouco a pouco da Língua de Sinais Francesa original.</p>
                    </div>
                </div>
                <div className="card-historia">
                    <div className="bg-purple-100 rounded-full p-2 h-fit ">
                        <Award className="w-6 h-6 text-purple-600"/>
                    </div>
                    <div className="ml-4">
                        <h3 className="font-bold text-xl text-gray-800 mb-4">2002 - Reconhecimento Legal</h3>
                        <p className="text-base text-gray-600 leading-relaxed">A Lei nº 10.436 reconheceu oficialmente a Libras como meio legal de comunicação e expressão das comunidades surdas brasileiras, sendo um marco histórico na luta pelos direitos dos surdos</p>
                    </div>
                </div>
                <div className="card-historia">
                    <div className="bg-orange-100 rounded-full p-2 h-fit ">
                        <BookOpen className="w-6 h-6 text-orange-600"/>
                    </div>
                    <div className="ml-4">
                        <h3 className="font-bold text-xl text-gray-800 mb-4">2005 - Decreto Regulamentador</h3>
                        <p className="text-base text-gray-600 leading-relaxed">O decreto nº 5.626 regulamentou a Lei de Libras, estabelecendo diretrizes para o ensino da língua, formação de professores e intérpretes, e garantindo acessibilidade em instituições públicas.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}