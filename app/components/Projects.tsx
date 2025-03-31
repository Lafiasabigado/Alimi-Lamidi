"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function Projects() {
  const projects = [
    {
      id: 1,
      name: "Dieu Existe Center",
      image: "/projects/Dieuexistecenter.jpg",
      link: "",
      title: "Dieu Existe Center",
      description: "Site web de formation en ligne dans la musique.",
      technologies: ["Php", "Bootstrap","Js"]
    },
    {
      id: 2,
      name: "Tech Hive",
      image: "/projects/techhive.jpg",
      link: "",
      title: "Tech Hive",
      description: "Site de vente d'ordinateur en ligne.",
      technologies: ["Php", "Bootstrap", "Js"]
    },
    {
      id: 3,
      name: "Task Manage App",
      image: "/projects/Dieuexistecenter.jpg",
      link: "/projects/habitude.mp4",
      title: "Task Manage App",
      description: "Application mobile de Gestion de tâche.",
      technologies: ["React Native","Firebase"]
    },
    {
      id: 4,
      name: "Food mobile App",
      image: "/projects/project2.jpg",
      link: "",
      title: "Food mobile App",
      description: "Application mobile de commande de repas.",
      technologies: ["Flutter", "Dart", "Firebase"]
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section 
      id="projects" 
      className="max-w-5xl mx-auto pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="flex flex-col text-center mt-2">
        <h2 className="text-xl font-bold uppercase">Mes Projets</h2>
        <p className="text-gray-500 text-sm text-center">
          Découvrez un aperçu de mes projets.
        </p>
      </div>
      
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full max-w-3xl mx-auto mt-4"
      >
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem 
              key={project.id} 
              className="md:basis-1/2 lg:basis-1/3 p-1"
            >
              <Card className="border-none bg-gray-700/50 rounded-2xl hover:bg-gray-800/50 h-full">
                <CardContent className="flex flex-col justify-between p-6 h-full">
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover rounded-xl 
                        transition-transform 
                        duration-500 
                        ease-in-out 
                        group-hover:scale-110"
                      priority={false}
                    />
                  </div>
                  
                  <div className="flex flex-col justify-start items-start">
                    <h3 className="text-lg font-bold my-1">{project.title}</h3>
                    <p className="text-gray-300 my-1 text-sm">
                      {project.description}
                    </p>
                    
                    {/* Technologies section */}
                    <div className="flex flex-wrap gap-2 my-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="pt-2 w-full">
                      <Link href={project.link} className="w-full">
                        <Button 
                          className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-2 rounded-full w-full"
                        >
                          Voir Démo
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}