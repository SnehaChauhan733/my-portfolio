import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "FatafatBazaar – AI-Powered Local Commerce Platform",
    description:
      "A full-stack quick-commerce platform, featuring an AI customer assistant, smart cart handling, authentication-based checkout, and scalable deployment on Vercel.",
    image: "/projects/logo.png",
    tags: ["HTML", "CSS", "JavaScript","ReactJs","Nodejs","Firebase", "API"],
    demoUrl: "https://fatafat-bazaar.vercel.app/",
    githubUrl: "https://github.com/SnehaChauhan733/FatafatBazaar",
  },
  {
    id: 2,
    title: "Document Assistant – AI-Powered Smart Document Intelligence Tool",
    description:
      "An AI-powered document assistant that allows users to upload documents and intelligently ask questions, generate summaries, extract key insights, and interact with content using natural language.",
    image: "/projects/Document-Assistant.png",
    tags: ["Python", "Langchain", "OpenAI", "Reactjs", "RAG", "Vector database"],
    demoUrl: "https://document-rag-assistant.vercel.app/",
    githubUrl: "https://github.com/SnehaChauhan733/Document-Assistant",
  },
  {
    id: 3,
    title: "HealSpace – Mental Health Support Platform",
    description:
      "A mental health support platform that provides users with educational resources, guided exercises, and consultant booking to support anxiety, depression, and overall mental well-being.",
    image: "/projects/Docter.jpeg",
    tags: ["HTML", "CSS", "JavaScript", "Reactjs"],
    demoUrl: "#",
    githubUrl: "https://github.com/SnehaChauhan733/Mental-health-website/tree/main/src",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/SnehaChauhan733"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
