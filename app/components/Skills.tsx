import React from 'react'
import { FaPhp } from 'react-icons/fa6'
import { FaFlutter } from 'react-icons/fa6'
import { FaHtml5 } from 'react-icons/fa6'
import { FaCss3Alt } from 'react-icons/fa6'
import { FaJs } from 'react-icons/fa6'
import { FaLaravel } from 'react-icons/fa6'
import { FaReact } from 'react-icons/fa6'
import { FaBootstrap } from 'react-icons/fa6'
import { FaGit } from 'react-icons/fa6'
import { FaFigma } from 'react-icons/fa6'
import { SiVercel } from 'react-icons/si'
import { FaJava } from 'react-icons/fa6'
import { SiDart } from 'react-icons/si'

const Skills = () => {
  const skillsweb = [
    {id:1 ,name: "Php", icon: <FaPhp className="text-blue-500" />},
    { id: 2, name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { id: 3, name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { id: 4, name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { id: 5, name: "Laravel", icon: <FaLaravel className="text-yellow-500" /> },
    { id: 6, name: "Git", icon: <FaGit className="text-white" /> },
    { id: 7, name: "Bootstrap", icon: <FaBootstrap className="text-blue-500" /> },
    { id: 8, name: "Vercel", icon: <SiVercel className="text-indigo-100" /> },
  ]
  const skillsmobile = [
    {id:1, name: "Flutter", icon:<FaFlutter className="text-blue-500" />},
    { id:2, name: "React", icon: <FaReact className="text-indigo-500" /> },
    { id:3, name: "Figma", icon: <FaFigma className="text-red-500" /> },
    { id:4, name: "Git", icon: <FaGit className="text-white" /> },
    { id:5, name: "Java", icon: <FaJava className="text-sky-500" /> },
    {id:6, name:"Dart" , icon: <SiDart className="text-sky-400" /> }
  ]
  return (
    <section id='skills' className='max-w-3xl mx-auto pt-16 rounded-lg'>
      <div className='flex flex-col text-center mt-2'>
        <h2 className='text-xl font-bold uppercase'>Mes Compétences</h2>
        <p className='text-gray-500 text-sm text-center'>Découvrez mes compétences.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-6'>
        <div className='flex justify-center'>
          <div className='h-full w-[350px] bg-gray-800/50 hover:bg-gray-700/30 rounded-2xl p-6 flex flex-col justify-between'>
            <p className='text-gray-300 font-mono text-xl'>
               Développement web
            </p>
            <p className='text-gray-300 py-2'>
              Ma maîtrise de PHP m'a permis de créer des pages web rapides, évolutives et dynamiques, offrant une expérience utilisateur exceptionnelle.
            </p>
            <div className='flex flex-wrap gap-2 py-6 rounded-2xl'>
              {skillsweb.map((skill) => (
              <div key={skill.id} className='flex hover:bg-gray-600/50 transition-colors duration-200 items-center justify-around gap-2 border border-gray-600 rounded-full p-2'>
                  {skill.icon}
                <span className='text-gray-300'>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='h-full w-[350px] bg-gray-800/50 hover:bg-gray-700/30 rounded-2xl p-6 flex flex-col justify-between'>
            <p className='text-gray-300 font-mono text-xl'>
               Développement mobile
            </p>
            <p className='text-gray-300 py-2'>
              Mon expérience avec React Native et Flutter m'a permis de développer des applications mobiles multiplateformes fonctionnant parfaitement sur iOS et Android.            
            </p>
            <div className='flex flex-wrap gap-2 py-6 rounded-2xl'>
              {skillsmobile.map((skill) => (
              <div key={skill.id} className='flex hover:bg-gray-600/50 transition-colors duration-200 items-center justify-around gap-2 border border-gray-600 rounded-full p-2'>
                {skill.icon}
                <span className='text-gray-300'>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills