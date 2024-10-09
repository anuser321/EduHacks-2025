import React from 'react'
import { Lightbulb, Book, Users } from 'lucide-react'

const About: React.FC = () => {
  return (
    <div id="about" className="py-16 bg-purple-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About EduHacks2025</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Lightbulb className="mx-auto text-purple-400 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">Cosmic Innovation</h3>
            <p>Invent groundbreaking solutions inspired by the wonders of the universe.</p>
          </div>
          <div className="text-center">
            <Book className="mx-auto text-purple-400 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">Education Innovation</h3>
            <p>Revolutionize learning with cutting-edge educational tools and methodologies.</p>
          </div>
          <div className="text-center">
            <Users className="mx-auto text-purple-400 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">Collaborative Creation</h3>
            <p>Join forces with brilliant minds to invent solutions for space-education challenges.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About