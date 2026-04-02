import Image from 'next/image'

export default function Hero() {
  return (
    <section className='relative overflow-hidden bg-[var(--prim-light)] px-[8%] py-12 lg:px-[10%]'>

      <Image
        src="/hero-shape-2.png"
        alt=""
        aria-hidden
        width={240}
        height={240}
        className='hero-shape4'
      />

      <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 lg:flex-row'>

    {/*Titulo Principal*/ }
        <div className='w-full lg:w-1/2'>
          <div className='hero-content'>
            <h1 className='GolosText text-5xl font-semibold leading-[1.05] text-[var(--black)] md:text-6xl lg:text-[4.5rem]'>
              Onde suas ideias ganham vida
              <span className='mt-2 flex items-center gap-3'>
                <span className='text-[var(--second)]'>Papelaria feita</span>
              </span>
              <span className='block'>com amor em cada detalhe.</span>
            </h1>
            <p className='GolosText mt-5 text-lg text-[var(--black)] md:text-xl'>
              Frete grátis nas compras acima de{' '}
              <span className='font-mono text-[var(--second)]'>R$250,00</span>
            </p>

            {/*Buttons*/ }
            <div className='mt-8 flex flex-wrap items-center gap-4'>
              <button className='GolosText rounded-md bg-[var(--second)] px-6 py-3 text-lg text-[var(--white)] transition-all duration-300 hover:opacity-90'>
                Comprar
              </button>
              <button className='GolosText rounded-md border border-[var(--black)] px-6 py-3 text-lg text-[var(--black)] transition-all duration-300 hover:bg-[var(--black)] hover:text-[var(--white)]'>
                Ver Detalhes
              </button>
            </div>
          </div>
        </div>

        <div className='w-full lg:w-1/2'>
          <div className='hero-image'>
            <div className='hero-shape1'></div>
            <div className='hero-shape2'></div>
            <Image
              src="/Hero.png"
              alt='Imagem Banner'
              width={600}
              height={700}
              className='relative z-10 w-full md:w-[80%] lg:w-[80%]'
            />
          </div>
        </div>

      </div>
    </section>
  )
}