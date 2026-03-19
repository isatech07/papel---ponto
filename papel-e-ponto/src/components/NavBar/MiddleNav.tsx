'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function MiddleNav() {
  const [query, setQuery] = useState('')

  return (
    <div className="relative w-full border-b border-gray-300 bg-[var(--prim)]">
      <div className="flex items-center justify-between px-[8%] py-3 lg:px-[16%]">

        <Link
          href="/"
          className="font-autowide text-4xl font-bold text-black lg:text-5xl"
        >
          Papel & <span className="text-[var(--second)]">Ponto</span>
        </Link>

        <div className="relative ms-6 flex flex-1 rounded-lg bg-white lg:max-w-2xl">
          <input
            type="text"
            placeholder="Busque por um produto ou marca"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 rounded-l-lg px-4 py-3 outline-none"
          />
          <button className="cursor-pointer px-4 text-2xl text-gray-600 hover:text-black transition">
            <i className="bi bi-search"></i>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <Image
            src="/suporte.png"
            alt="Suporte"
            width={50}
            height={50}
          />
          <div className="flex flex-col">
            <h2 className="font-golos text-xs font-semibold">
              SUPORTE
            </h2>
            <h1 className="font-golos font-semibold">
              12 9999-5555
            </h1>
          </div>
        </div>

      </div>
    </div>
  )
}