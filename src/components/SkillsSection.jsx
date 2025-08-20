import {useState} from "react";
import {cn} from "../lib/utils"
import { Code, icons } from "lucide-react";
import{FaHtml5,FaCss3Alt,FaReact,FaJava,FaNodeJs,FaGithub} from "react-icons/fa";
import{SiJavascript,SiTailwindcss,SiMysql,SiExpress,SiVite} from "react-icons/si"

const skills = [
  //Frontend
  { name: "HTML", level: 95, category: "frontend",icons:<FaHtml5 className="text-orange-500 text-2xl"/> },
  { name: "CSS", level: 90, category: "frontend",icons: <FaCss3Alt className="text-blue-500 text-2xl" /> },
  { name: "JavaScript", level: 85, category: "frontend",icons: <SiJavascript className="text-yellow-400 text-2xl" />  },
  { name: "React", level: 80, category: "frontend", icons: <FaReact className="text-sky-400 text-2xl" /> },
  { name: "Tailwind", level: 90, category: "frontend",icons: <SiTailwindcss className="text-teal-400 text-2xl" />  },
  //Backend
  { name: "Java", level: 90, category: "backend",icons: <FaJava className="text-red-500 text-2xl" /> },
  { name: "Node.js", level: 75, category: "backend",icons: <FaNodeJs className="text-green-500 text-2xl" /> },
  { name: "MySQL", level: 90, category: "backend", icons: <SiMysql className="text-blue-400 text-2xl" /> },
  { name: "Express", level: 75, category: "backend", icons: <SiExpress className="text-gray-400 text-2xl" /> },
  //Tools
  { name: "Git/GitHub", level: 85, category: "tools", icons: <FaGithub className="text-white text-2xl" /> },
  { name: "VS Code", level: 95, category: "tools",icons:<Code/> },
  { name: "Vite", level: 95, category: "tools", icons: <SiVite className="text-purple-500 text-2xl" /> },
];

const categories=["all","frontend","backend","tools"]

export const SkillSection = () => {
    const[activeCategory,setActiveCategory]=useState("all")

    const filteredSkills=skills.filter(
        (skill)=>activeCategory==="all" || skill.category===activeCategory);
  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30 ">
      <div className="container mx-auto max-w-5xl">
        <h2 className=" text-3xl md:4xl font-bold  mb-12 text-center">
          My<span className="text-primary ">Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category,key)=>(
                <button key={key} 
                onClick={()=> setActiveCategory(category)}
                className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                 activeCategory === category ? "bg-primary text-primary-foreground":
                 "bg-secondary/70 text-foreground hover:bg-secondary"
                )}
                >
                    {category}
                </button>
            ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left  mb-4 flex gap-6">
                {skill.icons}
                <h3 className="font-semibold text-lg ">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
              style={{width:skill.level+"%" }}
              />   
            </div>
            <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
