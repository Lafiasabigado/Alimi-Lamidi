"use client";

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Github, Linkedin } from 'lucide-react'
import { Link as LinkR} from 'react-scroll';
import Link from 'next/link';

const Presentation = () => {
  const link = [
    "https://linkedin.com/in/alimi-03910a292/",
    "https://github.com/AlimiLamidi"
  ]
  return (
    <section id='acceuil' className='w-full overflow-hidden'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='gap-4 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 md:grid-cols-2 items-center pt-32'>
          <div className=''>
            <p 
            className='uppercase text-2xl sm:text-3xl font-bold my-2 py-2'>
              <span className=''>Salut,  je suis</span><br />
              <span className='pb-4'>Alimi Lamidi.</span>
            </p>
            <p className='text-gray-300'>
              Développeur web et mobile résidant au Bénin. <br /> Simplifier la Tech c'est ma mission.
            </p>

            <div data-aos="fade-right"
               data-aos-delay="100"
               className='flex items-center space-x-4 pt-5'>
               <LinkR to="contact" smooth={true} duration={500}>
                <Button
                  className='bg-indigo-500 text-white hover:bg-indigo-600 rounded-full'
                >Me Contacter
               </Button>
               </LinkR>
               <div className='text-indigo-500'>
                <Link href={link[0]}>
                  <Linkedin />
                </Link>
               </div>
               <div className='text-indigo-500'>
                 <Link href={link[1]}>
                   <Github />
                 </Link>
               </div>
            </div>
          </div>
          <div className='pt-5 sm:pt-0'>
            <div 
             className='w-full sm:w-[300px] h-ful bg-bgdarkPrimary hover:bg-gray-800 rounded-xl flex justify-center drop-shadow-sm hover:scale-105 transition-transform duration-300 ease-in-out items-center'>
              <Image 
              src='/dev.jpg' 
              alt='Alimi' 
              width={500} 
              height={500}
              className='rounded-xl' 
              />
            </div>
          </div> 
        </div>
      </div>
    </section>
  )
}

export default Presentation