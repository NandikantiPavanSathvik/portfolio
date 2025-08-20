import { Briefcase, Code, User } from "lucide-react";

export const AboutmeSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center  ">
          About <span className="text-primary">Me</span>
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer{" "}
            </h3>
            <p className="text-muted-foreground ">
              I am a passionate web developer who enjoys crafting clean,
              responsive, and user-friendly websites. Turning ideas into
              functional designs excites me and keeps me motivated.
            </p>
            <p className="text-muted-foreground ">
              With a strong foundation in React, Tailwind CSS, and JavaScript, I
              am eager to explore new tools that enhance my work. Creating
              projects that look great and deliver seamless experiences excites
              me.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className=" grid grid-cols-1 gap-6 "> 
            <div className="gradient-border p-6 card-hover ">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary"/>
                    </div>
                    <div className="text-left">
                        <h4 className="font-semibold text-lg">Web Development</h4>
                        <p className="text-muted-foreground">
                            Creating responsive websites and web applications with modern frameworks.
                        </p>
                    </div>
                </div>
            </div>
            <div className="gradient-border p-6 card-hover ">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary"/>
                    </div>
                    <div className="text-left">
                        <h4 className="font-semibold text-lg">UI/UX Design</h4>
                        <p className="text-muted-foreground">
                            Designing intutive user interface and seamless user experiences.
                        </p>
                    </div>
                </div>
            </div>
            <div className="gradient-border p-6 card-hover ">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary"/>
                    </div>
                    <div className="text-left">
                        <h4 className="font-semibold text-lg">Project Management</h4>
                        <p className="text-muted-foreground">
                            Leading projects from conception to completion with agile methodologies.
                        </p>
                    </div>
                </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};
