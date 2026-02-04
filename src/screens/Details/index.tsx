'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { useCountryByName } from '@/shared/hooks/useCountries'

interface DetailsScreenProps {
  name: string
}

export default function DetailsScreen({ name }: DetailsScreenProps) {
  const decodedName = decodeURIComponent(name)
  const { data, isLoading, isError } = useCountryByName(decodedName)
  const router = useRouter()

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-primary to-secondary">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    )
  }

  if (isError || !data || data.length === 0) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-primary to-secondary text-white">
        <h1 className="text-2xl font-bold mb-4">País não encontrado</h1>
        <Link href="/" className="underline">
          Voltar
        </Link>
      </div>
    )
  }

  const country = data[0]
  const countryName = country.translations?.por?.common || country.name.common
  const officialName =
    country.translations?.por?.official || country.name.official
  const currencies = Object.values(country.currencies || {})
    .map((c) => `${c.name} (${c.symbol})`)
    .join(', ')
  const languages = Object.values(country.languages || {}).join(' e ')

  return (
    <div className="min-h-screen bg-gradient-to-r from-primary to-secondary p-4 md:p-12 flex flex-col">
      <div className="mb-8">
        <Link href="/" className="text-white text-4xl font-bold tracking-tight">
          <span className="font-nunito">plan</span>
          <span className="block text-xs font-normal tracking-wider uppercase mt-[-5px]">
            marketing digital
          </span>
        </Link>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <div className="bg-white rounded-xl overflow-hidden shadow-2xl max-w-5xl w-full">

          <div className="bg-gray-700 p-4 flex justify-between items-center text-white">
            <span className="font-bold tracking-wide ml-4">
              {country.region}
            </span>
            <div className="mr-4 opacity-50">
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

          <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-[3/2] shadow-lg mb-2">
                <Image
                  src={country.flags.svg}
                  alt={country.flags.alt || `Bandeira de ${countryName}`}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-gray-500 text-sm font-medium mt-2">
                Bandeira
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                {countryName}
              </h1>

              <div className="grid grid-cols-[120px_1fr] gap-x-4 gap-y-2 text-gray-600">
                <span className="font-medium text-right text-gray-400">
                  Nome oficial:
                </span>
                <span className="font-bold text-gray-700">{officialName}</span>

                <span className="font-medium text-right text-gray-400">
                  Capital:
                </span>
                <span className="font-bold text-gray-700">
                  {country.capital?.[0] || 'N/A'}
                </span>

                <span className="font-medium text-right text-gray-400">
                  População:
                </span>
                <span className="font-bold text-gray-700">
                  {country.population.toLocaleString('pt-BR')}
                </span>

                <span className="font-medium text-right text-gray-400">
                  Moeda:
                </span>
                <span className="font-bold text-gray-700">
                  {currencies || 'N/A'}
                </span>

                <span className="font-medium text-right text-gray-400">
                  Idiomas:
                </span>
                <span className="font-bold text-gray-700">{languages}</span>

                <span className="font-medium text-right text-gray-400">
                  Região:
                </span>
                <span className="font-bold text-gray-700">
                  {country.region}
                </span>

                <span className="font-medium text-right text-gray-400">
                  Sub-Região:
                </span>
                <span className="font-bold text-gray-700">
                  {country.subregion}
                </span>
              </div>

              <button
                onClick={() => router.back()}
                className="mt-8 self-start md:self-center px-12 py-3 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors bg-white"
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
