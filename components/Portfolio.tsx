'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MenuIcon, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const projects = [
    { id: 1, title: 'E-commerce Platform', description: 'A full-stack e-commerce solution built with Next.js and Node.js' },
    { id: 2, title: 'Task Management App', description: 'A React Native mobile app for managing daily tasks and projects' },
    { id: 3, title: 'Data Visualization Dashboard', description: 'An interactive dashboard using D3.js and Express.js' },
  ]

  const skills = [
    'JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'MongoDB', 'GraphQL', 'Docker'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold"
          >
            Mi Portafolio
          </motion.h1>
          <div className="hidden md:flex space-x-4">
            {['Inicio', 'Proyectos', 'Habilidades', 'Contacto'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-gray-300">{item}</a>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isMenuOpen ? <X /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="md:hidden bg-gray-800 p-4"
        >
          {['Inicio', 'Proyectos', 'Habilidades', 'Contacto'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="block py-2 hover:text-gray-300">{item}</a>
          ))}
        </motion.div>
      )}

      <main className="container mx-auto px-4 py-8">
        <motion.section 
          id="inicio"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center py-20"
        >
          <h2 className="text-4xl font-bold mb-4">Hola, me llamo Rene Salinas Ramos y soy un Desarrollador Fullstack</h2>
          <p className="text-xl mb-8">Creando soluciones web innovadoras y escalables</p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline"><Github className="mr-2 h-4 w-4" /> GitHub</Button>
            <Button variant="outline"><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</Button>
          </div>
        </motion.section>

        <motion.section 
          id="proyectos"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="py-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Mis Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div 
                key={project.id}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-700 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p>{project.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          id="habilidades"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="py-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Mis Habilidades</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1 }}
                className="bg-gray-700 px-4 py-2 rounded-full"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>

        <motion.section 
          id="contacto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="py-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Contáctame</h2>
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <Input type="text" placeholder="Nombre" />
            </div>
            <div className="mb-4">
              <Input type="email" placeholder="Email" />
            </div>
            <div className="mb-4">
              <Textarea placeholder="Mensaje" />
            </div>
            <Button type="submit" className="w-full">
              <Mail className="mr-2 h-4 w-4" /> Enviar Mensaje
            </Button>
          </form>
        </motion.section>
      </main>

      <footer className="bg-gray-800 text-center p-4">
        <p>&copy; 2024 Rene Salinas. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}