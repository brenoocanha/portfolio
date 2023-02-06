import ProjectCard from "./ProjectCard.js"

import hr from "../assets/curve-hr.svg"

export default function Projects(){
    return (
        <div id="projects" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Projects</h1>
            <p className="font-light text-gray-400">Here are some of the projects I worked on</p>

            <div className="flex flex-col md:flex-row mt-4 gap-5">
                <ProjectCard name="Wall-Gate Authenticator" company="FFLANK" desc="API with private routes, using NodeJS (ExpressJS), basic token auth for the routes, API Dog for tests, CRUD for team work and SOLID principles." />
                <ProjectCard name="Zapp-Stats - Gambler Social Network" company="FFLANK" desc="Web React Prime Application. Using Wall-Gate as an authenticator, NodeJS (ExpressJS), React Prime, Styled Components, PostgreSQL as a database." />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
