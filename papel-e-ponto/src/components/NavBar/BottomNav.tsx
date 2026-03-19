'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

type NavLink = {
  label: string
  href: string
  dropdown?: { label: string; href: string }[]
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },

  {
    label: 'Produtos',
    href: '/produtos',
    dropdown: [
      { label: 'Escolar', href: '/produtos/escolar' },
      { label: 'Escritório', href: '/produtos/escritorio' },
      { label: 'Criativo', href: '/produtos/criativo' },
    ],
  },

  { label: 'Ofertas', href: '/ofertas' },
  { label: 'Contato', href: '/contato' },
]

export default function BottomNav() {
  const [mobileMenuOpen, setMenuOpen] = useState(false)
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({})
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }))
  }

  const closeMobileMenu = () => {
    setMenuOpen(false)
    setOpenDropdowns({})
  }

  return (
    <div
      className={`w-full bg-white py-4 shadow-sm transition-all duration-500 ${
        isFixed ? 'fixed top-0 left-0 z-50 shadow-md' : 'relative'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">

        {/* Desktop Menu */}
        <ul className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label} className="relative group">
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className="font-medium text-gray-700 transition hover:text-pink-500"
                  >
                    {link.label}
                  </button>

                  {openDropdowns[link.label] && (
                    <ul className="absolute left-0 mt-3 w-48 rounded-lg bg-white p-3 shadow-lg">
                      {link.dropdown.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            className="block rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  className="font-medium text-gray-700 transition hover:text-pink-500"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mt-4 flex flex-col gap-4 px-6 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeMobileMenu}
              className="text-gray-700 hover:text-pink-500"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}