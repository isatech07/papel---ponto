'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function MiddleNav(){
    return (
        <div className='w-full bg-[var(--brand-secondary)] border-b border-gray-300 relative'>
            <div className='flex items-center justify-between py-3 px-[8%] lg:px-[16%]'>

                {/*Logo*/}
                <Link href='/' className="text-4xl lg:text-5xl font-bold text-white">
                    Papel &<span className="text-[var(--brand-highlight)]">Ponto</span>
                </Link>

            </div>
        </div>
    )
}