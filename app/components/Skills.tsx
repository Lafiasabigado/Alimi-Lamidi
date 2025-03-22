import React from 'react'
import { FaPhp } from 'react-icons/fa6'
import { FaFlutter } from 'react-icons/fa6'
import { FaHtml5 } from 'react-icons/fa6'
import { FaCss3Alt } from 'react-icons/fa6'
import { FaJs } from 'react-icons/fa6'
import { FaPython } from 'react-icons/fa6'
import { FaLaravel } from 'react-icons/fa6'
import { FaReact } from 'react-icons/fa6'
import { FaBootstrap } from 'react-icons/fa6'
import { FaGit } from 'react-icons/fa6'
import { FaFigma } from 'react-icons/fa6'
import { SiVercel } from 'react-icons/si'
import { FaJava } from 'react-icons/fa6'
import { FaC } from 'react-icons/fa6'

const Skills = () => {

  const skills = [
    {id:1 ,name: "Php", icon: <FaPhp className="text-blue-500" />},
    {id:2, name: "Flutter", icon:<FaFlutter className="text-blue-500" />},
    { id: 3, name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { id: 4, name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { id: 5, name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { id: 6, name: "Python", icon: <FaPython className="text-blue-500" /> },
    { id: 7, name: "React.js", icon: <FaReact className="text-yellow-500" /> },
    { id: 8, name: "Laravel", icon: <FaLaravel className="text-yellow-500" /> },
    { id: 9, name: "Figma", icon: <FaFigma className="text-red-500" /> },
    { id: 10, name: "Git", icon: <FaGit className="text-white" /> },
    { id: 11, name: "Bootstrap", icon: <FaBootstrap className="text-blue-500" /> },
    { id: 12, name: "Vercel", icon: <SiVercel className="text-indigo-100" /> },
    { id: 13, name: "Java", icon: <FaJava className="text-sky-500" /> },
    { id: 14, name: "C", icon: <FaC className="text-fuchsia-500" /> },
  ]
  return (
    <div className='max-w-3xl mx-auto pt-16 rounded-lg'>
      <h2 className='text-xl font-bold mb-4 text-center uppercase'>Mes Compétences</h2>
      <div className='grid grid-cols-1 gap-4 pt-5'>
        <div className='flex flex-col gap-2'>
           <div className='bg-gray-700/20 rounded-2xl p-4 mx-2'>
           <p className='font-bold uppercase pb-1'>Expérience</p>
            <p className='text-gray-300'>Je possède de solides bases en création d'applications mobiles et web dynamiques et réactives.
                Mon expérience avec React Native et Flutter m'a permis de développer des applications mobiles multiplateformes fonctionnant parfaitement sur iOS et Android. De plus, ma maîtrise de PHP m'a permis de créer des pages web rapides, évolutives et dynamiques, offrant une expérience utilisateur exceptionnelle. Je suis parfaitement au fait des dernières tendances et technologies en matière de développement web et mobile.
            </p>
           </div>
        </div>
        </div>
        <div className='flex flex-wrap gap-2 my-4 mx-4'>
        {skills.map((skill) => (
          <div key={skill.id} className='flex hover:bg-gray-600/50 transition-colors duration-200 items-center justify-around gap-2 border border-gray-600 rounded-full p-2'>
            {skill.icon}
            <span className='text-gray-300'>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills