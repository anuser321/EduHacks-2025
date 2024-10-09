import React from 'react'
import { Rocket } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-purple-950 py-4 absolute top-0 left-0 right-0 z-20">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Rocket className="text-purple-400" size={24} />
          <span className="text-xl font-bold">EduHacks 2025</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-purple-400 transition-colors">About</a></li>
            <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdXlfLpy2-KS1Y7Q3jm_wSDLiDekK33N3eWTFtHmeP_us7HJA/viewform" target="_blank" rel="noopener noreferrer" className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded transition-colors">Register</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header