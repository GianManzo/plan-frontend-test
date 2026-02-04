import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full bg-black py-8 px-4 md:px-12 lg:px-24 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">

        <div className="relative w-64 h-20">
          <Image
            src="/img/logo_grupo.png"
            alt="Grupo Plan Marketing"
            fill
            className="object-contain object-left"
          />
        </div>


        <p className="text-white text-xs md:text-sm text-center md:text-right font-light">
          Grupo Plan Marketing (C) Todos os direitos reservados - 2025
        </p>
      </div>
    </footer>
  )
}
