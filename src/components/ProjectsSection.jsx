import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "amazon_website",
    description:
      "A front-end clone of Amazon’s homepage built using HTML and CSS, focusing on responsive layouts and UI design.",
    image: "/img/Amazon.png",
    image: "/img/Amazon.png",
    tags: ["HTML", "CSS", "UI/UX"],
    demoUrl: "https://nandikantipavansathvik.github.io/Amazon-Clone/",
    githubUrl: "https://github.com/NandikantiPavanSathvik/Amazon-Clone",
  },
  {
    id: 2,
    title: "Food_website",
    description:
      "A responsive food ordering website built with React, featuring modern UI components and smooth navigation.",
    image: "/img/Food_website.png",
    image: "/img/Food_website.png",
    tags: ["React", "CSS", "Responsive UI"],
    demoUrl: "https://nandikantipavansathvik.github.io/Foodwebsite/",
    githubUrl: "https://github.com/NandikantiPavanSathvik/Food_website",
  },
  {
    id: 3,
    title: "Portfolio_website",
    description:
      "A personal portfolio website developed using React and TailwindCSS to showcase projects, skills, and achievements.",
    image: "/img/Portfolio.png",
    tags: ["React", "TailwindCSS", "Responsive UI"],
    demoUrl: "https://pavan-sathvik.vercel.app/",
    githubUrl: "https://github.com/NandikantiPavanSathvik/portfolio",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured<span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here arre some of my projects. Each project was carefully crafted with
          attention to detail, performance, and user experience.
        </p>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
                <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-trnasform duration-500 group-hover:scale-110"
                />
                 </div>
                <div className="p-6 ">

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag)=>(
                       <span className=" px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secomdary-foreground " >{tag}</span> 
                    ))}
                </div>
                
                <h3 className="text-xl font-semibold mb-1">{project.title}

                </h3>
                <p className="text-muted-foreground text-sm mb-4"> {project.description}

                </p>
                <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                        <a href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            <ExternalLink size={20}/>
                        </a>
                        <a href={project.githubUrl}
                         target="_blank"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            <Github size={20}/>
                        </a>
                    </div>

                </div>

            </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
            <a 
             className="cosmic-button w-fit items-center mx-auto flex gap-2"
             target="_blank"
             href="https://github.com/NandikantiPavanSathvik"
             >
                Check My Github <ArrowRight/>
            </a>
        </div>

      </div>
    </section>
  );
};
