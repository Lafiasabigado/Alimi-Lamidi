import React from 'react'
import { Button } from '@/components/ui/button'
import { FaDownload } from 'react-icons/fa6'
import Link from 'next/link'

const About = () => {
  const link = "/";
  return (
    <section className='max-w-3xl mx-auto pt-16 rounded-lg'>
      <h2 className='text-xl font-bold mb-4 text-center uppercase'>A propos de moi</h2>
      <div className='bg-gray-800/50 rounded-2xl p-6 my-4 mx-2'>
        <p className='text-gray-300 leading-relaxed'>
          Je suis un développeur passionné avec une expertise en développement web et mobile. Mon objectif est de créer des solutions numériques innovantes qui répondent aux besoins de mes clients.
        </p>
      </div>
      <div className='bg-gray-800/50 rounded-2xl p-6 my-4 mx-2'>
       <p className='text-gray-300 leading-relaxed'>
        Titulaire d'une licence en génie logiciel, la résolution de problèmes me passionne, et je suis toujours motivé pour apprendre de nouvelles choses. En dehors des heures de code, j'adore la création de contenus ou regarder des films et séries.
        </p>
        <p className='text-indigo-500 leading-relaxed py-2.5'>
          N'hésitez pas à me contacter si vous souhaitez collaborer sur quelque chose d'intéressant !
        </p>
        <div className='flex'>
          <Link href={link}>
           <Button className='bg-indigo-500 text-white hover:bg-indigo-600 rounded-full'>Télécharger CV
            <FaDownload className='text-xl' />
           </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default About