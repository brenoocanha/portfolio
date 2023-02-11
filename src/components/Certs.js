import CertCard from "./CertCard";

import hr from "../assets/curve-hr.svg"
import GoogleCoursera from "../assets/certs/GoogleCoursera.jpeg"
import Industria from "../assets/certs/Industria4.0.jpg"

export default function Certs() {
    return(
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Certificações</h1>
            <p className="font-light text-gray-400">Aqui você pode ver alguns dos meus certificados:</p>

            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="IT Support by Google" img={GoogleCoursera} issued="Google" date="Novembro 2022" />
                <CertCard name="4.0 Industry" img={Industria} issued="SENAI" date="Abril 2022" />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}