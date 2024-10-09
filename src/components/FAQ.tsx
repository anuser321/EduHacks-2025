import React from 'react'

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold mb-2">{question}</h3>
    <p className="text-purple-200">{answer}</p>
  </div>
)

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "When is EduHacks 2025?",
      answer: "EduHacks 2025 is scheduled for February 4-6, 2025. Mark your calendars!"
    },
    {
      question: "Who can participate?",
      answer: "EduHacks 2025 is open to students, educators, and space enthusiasts of all backgrounds. We welcome participants from high school to postgraduate levels."
    },
    {
      question: "What if I don't have a team?",
      answer: "Don't worry! We'll have virtual team formation activities at the beginning of the event to help you find like-minded collaborators."
    },
    {
      question: "Is there a participation fee?",
      answer: "EduHacks 2025 is free to attend, thanks to our generous sponsors. However, registration is required and spots are limited."
    }
  ]

  return (
    <div className="py-16 bg-purple-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ