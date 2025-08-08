'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieAccepted = localStorage.getItem('cookieAccepted')
    
    if (!cookieAccepted) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieAccepted', '1')
    setShowBanner(false)
  }

  if (!showBanner) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-prioria-dark text-white p-4 z-50 font-sans">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex-1 text-sm sm:text-base">
            <p>
              Usamos cookies para mejorar tu experiencia.{' '}
              <Link 
                href="/politica-cookies" 
                className="text-prioria-green hover:underline font-medium"
              >
                Saber más
              </Link>
            </p>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={acceptCookies}
              className="bg-prioria-green text-prioria-dark px-4 py-2 rounded-lg font-semibold text-sm sm:text-base hover:bg-opacity-90 transition-colors duration-200 whitespace-nowrap"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
