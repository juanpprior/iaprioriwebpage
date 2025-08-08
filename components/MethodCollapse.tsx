'use client'

import { useState } from 'react'

interface Phase {
  title: string
  desc: string
}

interface MethodCollapseProps {
  phases: Phase[]
}

export default function MethodCollapse({ phases }: MethodCollapseProps) {
  const [openPhase, setOpenPhase] = useState<number | null>(0)

  const togglePhase = (index: number) => {
    setOpenPhase(openPhase === index ? null : index)
  }

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Nuestra Metodología
          </h2>
          <p className="text-xl text-prioria-gray-400 max-w-2xl mx-auto">
            Un proceso probado en 3 fases para acelerar tu crecimiento
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {phases.map((phase, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => togglePhase(index)}
                className="w-full bg-white border-2 border-prioria-gray-100 rounded-lg p-6 text-left hover:border-prioria-green transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-prioria-green text-prioria-dark font-bold rounded-full flex items-center justify-center text-sm">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-prioria-dark">
                      {phase.title}
                    </h3>
                  </div>
                  <svg
                    className={`w-6 h-6 text-prioria-gray-400 transition-transform duration-200 ${
                      openPhase === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openPhase === index && (
                <div className="bg-prioria-gray-100 border-t-0 border-2 border-prioria-green rounded-b-lg p-6 mt-0">
                  <p className="text-lg text-prioria-dark leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
