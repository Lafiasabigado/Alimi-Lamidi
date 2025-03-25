"use client";

import * as React from "react";
import Link from "next/link"
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

export function Projects() {
  const link = "";
  const projects = [
    {
      id: 1,
      name: "Dieu Existe Center",
      image: "/projects/Dieuexistecenter.jpg",
      title: "Dieu Existe Center",
      description: "Site web de formation en ligne des jeunes dans la musique.",
    },
    {
      id: 2,
      name: "Tech Hive",
      image: "/projects/techhive.jpg",
      title: "Tech Hive",
      description: "Site de vente d'ordinateur en ligne.",
    },
    {
      id: 3,
      name: "Food Mobile App",
      image: "/projects/project2.jpg",
      title: "Food Mobile App",
      description: "Application mobile de commande de repas",
    },
    {
      id: 4,
      name: "Project 4",
      image: "/projects/project3.jpg",
      title: "Web Formation",
      description: "Site de Formation en ligne",
    },
    {
      id: 5,
      name: "Project 5",
      image: "/projects/project2.jpg",
      title: "Web Formation",
      description: "Site de Formation en ligne",
    },
  ];

  // État pour suivre l'index de la slide active
  const [activeIndex, setActiveIndex] = React.useState(0);

  // Défilement automatique toutes les 5 secondes
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length); // Passer à la slide suivante
    }, 2000);

    // Nettoyer l'intervalle lorsque le composant est démonté
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <section id="projects" className="max-w-5xl mx-auto pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="flex flex-col text-center mt-2">
        <h2 className="text-xl font-bold uppercase">Mes Projets</h2>
        <p className="text-gray-500 text-sm text-center">
          Découvrez un aperçu de mes projets les plus passionnants.
        </p>
      </div>
      <Carousel
        opts={{
          align: "center",
          startIndex: activeIndex, // Définir la slide active
        }}
        className="w-full max-w-3xl mx-auto mt-4"
      >
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="border-none bg-gray-700/50 rounded-2xl hover:bg-gray-800/50 h-[350px] w-full">
                  <CardContent className="flex flex-col aspect-square justify-center p-6">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={500}
                      height={500}
                      className="w-full h-full  object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="flex pt-2 flex-col justify-start items-start my-2">
                      <h3 className="text-lg font-bold my-1">{project.title}</h3>
                      <p className="text-gray-300 my-1">{project.description}</p>
                      <div className="pt-2">
                        <Link href={link}>
                         <Button className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-2 rounded-full">
                          Voir Démo
                         </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}