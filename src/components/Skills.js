import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"

import javascript from "../assets/skills/javascript.svg"
import reactIcon from "../assets/skills/react.svg"
import windows from "../assets/skills/windows.svg"
import react from "../assets/skills/react.svg"
import git from "../assets/skills/git.svg"
import express from "../assets/skills/express.svg"
import gitlab from "../assets/skills/gitlab.svg"

import hr from "../assets/curve-hr.svg"

export default function Skills() {

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
      };

    return(

        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Habilidades</h1>
            <p className="font-light text-gray-400">Minhas stacks:</p>

            <div className="mt-4">
                <Slider {...settings}>
                <SkillCard name="javascript" experience="< 1 ano" img={javascript} />
                <SkillCard name="react" experience="< 1 ano" img={reactIcon} />
                <SkillCard name="windows" experience="< 1 ano" img={windows} />
                <SkillCard name="react" experience="< 1 ano" img={react} />
                <SkillCard name="git" experience="< 1 ano" img={git} />
                <SkillCard name="express" experience="< 1 ano" img={express} />
                <SkillCard name="gitlab" experience="< 1 ano" img={gitlab} />
                </Slider>
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}