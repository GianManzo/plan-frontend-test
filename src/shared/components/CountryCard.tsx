import Image from 'next/image'
import Link from 'next/link'

import { ICountry } from '@/shared/interfaces/country'

interface CountryCardProps {
  country: ICountry
}

export default function CountryCard({ country }: CountryCardProps) {
  const name = country.translations?.por?.common || country.name.common
  const capital = country.capital?.[0] || 'N/A'
  const region = country.region



  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">

      <div className="bg-blue_dark bg-opacity-80 relative h-32 p-4 flex justify-between items-start">
        <div className="absolute inset-0 bg-gray-600 mix-blend-multiply opacity-50"></div>{' '}
        <span className="relative z-10 text-white font-bold tracking-wide">
          {region}
        </span>
        <div className="relative z-10 opacity-50">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="white"
          >
            <path
              d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1 items-center -mt-12 relative z-20">
        <div className="w-24 h-16 relative shadow-md mb-4 bg-gray-200">
          <Image
            src={country.flags.png}
            alt={country.flags.alt || `Flag of ${name}`}
            fill
            className="object-cover rounded-sm"
          />
        </div>

        <h3 className="text-secondary font-bold text-xl mb-1 text-center text-primary">
          {name}
        </h3>
        <p className="text-gray-500 mb-6 flex items-center gap-1 font-medium">
          <span>✪</span> {capital}
        </p>

        <Link
          href={`/country/${encodeURIComponent(country.name.common)}`}
          className="w-full mt-auto block text-center py-2.5 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors"
        >
          Ver mais
        </Link>
      </div>
    </div>
  )
}
