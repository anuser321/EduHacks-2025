import React from 'react'
import { Mail } from 'lucide-react'

const Contact: React.FC = () => {
  return (
    <div className="py-16 bg-purple-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Contact Us</h2>
        <div className="flex justify-center items-center">
          <Mail className="text-purple-400 mr-2" size={24} />
          <a href="mailto:info@eduhacks2025.com" className="text-xl hover:text-purple-400 transition-colors">
            info@eduhacks2025.com
          </a>
        </div>
        <p className="text-center mt-4 text-purple-200">
          Have questions or need more information? Don't hesitate to reach out!
        </p>
      </div>
    </div>
  )
}

export default Contact