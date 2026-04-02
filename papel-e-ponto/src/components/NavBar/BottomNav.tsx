'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Loja', href: '/loja' },
  { label: 'Blog', href: '/blog' },
  {
    label: 'Produtos',
    href: '/',
    dropdown: [
      { label: 'Cadernos', href: '/cadernos' },
      { label: 'Canetas', href: '/canetas' },
      { label: 'Acessórios', href: '/acessorios' },
    ],
  },
  { label: 'Fale Conosco', href: '/contato' },
];

export default function BottomNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsFixed(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdowns({});
  };

  return (
    <div
      className={`w-full bg-[var(--navy)] transition-all duration-500 ${
        isFixed ? 'fixed left-0 top-0 z-50 nav-fixed-shadow' : ''
      }`}
    >
      <div className='flex w-full items-center justify-between px-[8%] py-0 lg:px-[16%]'>

        {/* Logo — só aparece quando fixado no desktop */}
        <Link
          href='/'
          className={`font-audiowide shrink-0 py-3 text-xl font-bold text-white transition-all duration-500 ${
            isFixed ? 'hidden lg:block' : 'hidden'
          }`}
        >
          Papel<span className='text-[var(--second)]'> & </span>Ponto
        </Link>

        {/* Logo mobile — sempre visível */}
        <Link
          href='/'
          className='font-audiowide shrink-0 py-3 text-xl font-bold text-white lg:hidden'
        >
          Papel<span className='text-[var(--second)]'> & </span>Ponto
        </Link>

        {/* Menu desktop */}
        <div className='hidden flex-1 justify-center lg:flex'>
          <nav className='flex items-stretch'>
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className='group relative'>
                  <button className='font-golos flex items-center gap-1 px-4 py-4 text-sm font-semibold text-white/80 transition-colors duration-[var(--transition-regular)] hover:text-white'>
                    {link.label}
                    <i className='ri-arrow-down-s-line text-xs transition-transform duration-300 group-hover:rotate-180'></i>
                  </button>

                  {/* Dropdown */}
                  <div className='absolute left-0 top-full z-50 hidden min-w-[180px] overflow-hidden rounded-b-xl bg-white pt-1 shadow-xl group-hover:block'>
                    {/* barra accent topo */}
                    <div className='h-1 w-full bg-[var(--second)]' />
                    <div className='p-2'>
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className='font-golos flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm text-[var(--black)] transition-colors duration-[var(--transition-regular)] hover:bg-[var(--prim-light)] hover:text-[var(--second)]'
                        >
                          <span className='h-1.5 w-1.5 rounded-full bg-[var(--accent)]'></span>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className='font-golos relative flex items-center px-4 py-4 text-sm font-semibold text-white/80 transition-colors duration-[var(--transition-regular)] hover:text-white after:absolute after:bottom-0 after:left-4 after:right-4 after:h-[3px] after:scale-x-0 after:rounded-full after:bg-[var(--accent)] after:transition-transform after:duration-300 hover:after:scale-x-100'
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </div>

        {/* Direita desktop */}
        <div className='hidden items-center gap-4 lg:flex'>
          <Link
            href='/login'
            className='font-golos text-sm font-semibold text-white/70 transition-colors duration-[var(--transition-regular)] hover:text-white'
          >
            Login
          </Link>
          <span className='text-white/20'>|</span>
          <Link
            href='/cadastro'
            className='font-golos text-sm font-semibold text-white/70 transition-colors duration-[var(--transition-regular)] hover:text-white'
          >
            Cadastro
          </Link>

          <Link
            href='/carrinho'
            className='relative ml-2 flex items-center justify-center rounded-full bg-white/10 p-2.5 text-white transition-colors duration-[var(--transition-regular)] hover:bg-[var(--second)]'
            aria-label='Carrinho'
          >
            <i className='bi bi-cart3 text-lg'></i>
            <span className='absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--accent)] text-[10px] font-bold text-[var(--black)]'>
              2
            </span>
          </Link>
        </div>

        {/* Mobile right */}
        <div className='flex items-center gap-3 lg:hidden'>
          <Link
            href='/carrinho'
            className='relative flex items-center justify-center rounded-full bg-white/10 p-2 text-white'
            aria-label='Carrinho'
          >
            <i className='bi bi-cart3 text-lg'></i>
            <span className='absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--accent)] text-[10px] font-bold text-[var(--black)]'>
              2
            </span>
          </Link>

          <button
            type='button'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='flex items-center justify-center rounded-full bg-white/10 p-2 text-xl text-white transition-colors hover:bg-white/20'
            aria-label='Abrir menu'
          >
            <i className={mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className='border-t border-white/10 bg-[var(--navy)] lg:hidden'>
          <nav className='flex flex-col px-[6%] pb-6 pt-2'>

            <div className='mb-2 flex items-center gap-3 border-b border-white/10 py-3'>
              <Link
                href='/login'
                onClick={closeMobileMenu}
                className='font-golos text-sm font-semibold text-white/70 hover:text-white'
              >
                Login
              </Link>
              <span className='text-white/20'>/</span>
              <Link
                href='/cadastro'
                onClick={closeMobileMenu}
                className='font-golos text-sm font-semibold text-white/70 hover:text-white'
              >
                Cadastro
              </Link>
            </div>

            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className='border-b border-white/10'>
                  <button
                    type='button'
                    onClick={() => toggleDropdown(link.label)}
                    className='font-golos flex w-full items-center justify-between px-1 py-3 text-left text-sm font-semibold text-white/80 hover:text-white'
                  >
                    {link.label}
                    <i
                      className={`ri-arrow-down-s-line text-white/50 transition-transform duration-300 ${
                        openDropdowns[link.label] ? 'rotate-180' : ''
                      }`}
                    ></i>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-[var(--transition-slow)] ${
                      openDropdowns[link.label] ? 'max-h-60' : 'max-h-0'
                    }`}
                  >
                    <div className='mb-2 flex flex-col gap-1 rounded-xl bg-white/5 p-2'>
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={closeMobileMenu}
                          className='font-golos flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white'
                        >
                          <span className='h-1.5 w-1.5 rounded-full bg-[var(--accent)]'></span>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className='font-golos border-b border-white/10 px-1 py-3 text-sm font-semibold text-white/80 hover:text-white'
                >
                  {link.label}
                </Link>
              ),
            )}

            {/* Redes sociais */}
            <div className='mt-5 flex items-center gap-4 px-1 text-xl text-white/50'>
              <Link href='https://instagram.com' aria-label='Instagram' className='hover:text-[var(--second)] transition-colors'>
                <i className='bi bi-instagram'></i>
              </Link>
              <Link href='https://facebook.com' aria-label='Facebook' className='hover:text-[var(--second)] transition-colors'>
                <i className='bi bi-facebook'></i>
              </Link>
              <Link href='https://wa.me/5512999995555' aria-label='WhatsApp' className='hover:text-[var(--second)] transition-colors'>
                <i className='bi bi-whatsapp'></i>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}