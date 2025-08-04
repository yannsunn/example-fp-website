'use client'

import { useEffect } from 'react'

export default function OptimizedClientAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in')
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.1
    })
    
    elements.forEach(el => observer.observe(el))
    
    return () => observer.disconnect()
  }, [])

  return null
}