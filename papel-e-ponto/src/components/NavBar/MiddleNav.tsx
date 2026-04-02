'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function MiddleNav() {
  const [query, setQuery] = useState('');

  return (
    <div className='w-full bg-[var(--prim)] border-b-2 border-[var(--prim-light)]'>
      <div className='flex items-center justify-between gap-6 px-[8%] py-4 lg:px-[16%]'>

        {/* Logo */}
        <Link href='/' className='group shrink-0'>
          <div className='leading-none'>
            <span className='font-audiowide text-4xl font-bold tracking-tight text-[var(--black)] lg:text-5xl'>
              Papel
            </span>
            <span className='font-audiowide text-4xl font-bold tracking-tight text-[var(--second)] lg:text-5xl'>
              {' & '}
            </span>
            <span className='font-audiowide text-4xl font-bold tracking-tight text-[var(--black)] lg:text-5xl'>
              Ponto
            </span>
          </div>
          <div className='mt-1 h-[3px] w-0 rounded-full bg-[var(--second)] transition-all duration-500 group-hover:w-full' />
        </Link>

        {/* Search Box */}
        <div className='search-ring mx-2 flex flex-1 items-center overflow-hidden rounded-full border-2 border-[var(--prim-light)] bg-white transition-all duration-[var(--transition-regular)] hover:border-[var(--second)] lg:max-w-xl'>
          <input
            type='text'
            placeholder='Canetas, cadernos, blocos...'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className='font-golos flex-1 bg-transparent px-5 py-3 text-sm text-[var(--black)] placeholder:text-[var(--gray-soft)] outline-none'
          />
          <button
            aria-label='Buscar'
            className='flex h-full items-center gap-2 bg-[var(--second)] px-5 py-3 text-white transition-opacity duration-[var(--transition-regular)] hover:opacity-90'
          >
            <i className='bi bi-search text-base'></i>
            <span className='font-golos hidden text-sm font-semibold lg:inline'>
              Buscar
            </span>
          </button>
        </div>

        {/* Contato */}
        <div className='hidden shrink-0 items-center gap-3 lg:flex'>
          <div className='flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--black)]'>
            <i className='bi bi-headset text-xl'></i>
          </div>
          <div className='flex flex-col leading-tight'>
            <span className='font-golos text-[10px] font-bold uppercase tracking-widest text-[var(--gray-soft)]'>
              Suporte
            </span>
            <span className='font-golos text-sm font-bold text-[var(--black)]'>
              (12) 9999-5555
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}