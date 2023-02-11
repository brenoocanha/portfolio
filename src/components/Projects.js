import ProjectCard from "./ProjectCard.js"

import hr from "../assets/curve-hr.svg"

export default function Projects(){
    return (
        <div id="projects" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Projetos</h1>
            <p className="font-light text-gray-400">Alguns dos projetos que fiz parte / criei:</p>

            <div className="flex flex-col md:flex-row mt-4 gap-5">
                <ProjectCard name="Wall-Gate Authenticator" company="FFLANK" desc="API com rotas privadas, utilizano NodeJS (Express), autenticação básica com tokens para rotas privadas." />
                <ProjectCard name="Zapp-Stats - Gambler Social Network" company="FFLANK" desc="Aplicação Web React Prime. Utiliza o projeto Wall-Gate como um autenticador. NodeJS (Express), React Prime, PostgreSQL." />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
