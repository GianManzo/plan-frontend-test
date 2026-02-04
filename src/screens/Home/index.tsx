'use client'

import { useMemo, useState } from 'react'

import { ChevronLeft, ChevronRight } from 'lucide-react'

import CountryCard from '@/shared/components/CountryCard'
import Header from '@/shared/components/Header'
import { useCountries } from '@/shared/hooks/useCountries'
import { useFilter } from '@/shared/hooks/useFilter'

export default function HomeScreen() {
  const { data: countries, isLoading, isError, error } = useCountries()
  const { search, region, language } = useFilter()

  if (isError) {
    console.error('Error loading countries:', error)
  }


  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  const filteredCountries = useMemo(() => {
    if (!countries) return []

    return countries.filter((country) => {
      const nameMatch = (
        country.translations?.por?.common || country.name.common
      )
        .toLowerCase()
        .includes(search.toLowerCase())

      const regionMatch = region
        ? country.region === region ||
        country.subregion === region ||

        (region === 'North America' &&
          country.region === 'Americas' &&
          ['North America', 'Central America', 'Caribbean'].includes(
            country.subregion,
          )) ||
        (region === 'South America' &&
          country.region === 'Americas' &&
          country.subregion === 'South America')
        : true

      const languageMatch = language
        ? Object.values(country.languages || {}).includes(language)
        : true

      return nameMatch && regionMatch && languageMatch
    })
  }, [countries, search, region, language])


  const totalPages = Math.ceil(filteredCountries.length / itemsPerPage)
  const paginatedCountries = filteredCountries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  )

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-primary to-secondary pb-12">
      <Header />

      <main className="container mx-auto px-4 md:px-12 lg:px-24 mt-12">
        {isLoading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        )}

        {isError && (
          <div className="text-center text-red-500 py-10">
            Erro ao carregar países. Por favor, tente novamente.
          </div>
        )}

        {!isLoading && !isError && filteredCountries.length === 0 && (
          <div className="text-center text-gray-500 py-10">
            Nenhum país encontrado com os filtros selecionados.
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {paginatedCountries.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>


        {filteredCountries.length > itemsPerPage && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-full bg-white text-primary border border-primary disabled:opacity-50 hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum = i + 1
                if (totalPages > 5 && currentPage > 3) {
                  pageNum = currentPage - 2 + i
                  if (pageNum > totalPages) pageNum = totalPages - (4 - i)
                }

                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-3 h-3 rounded-full transition-all ${currentPage === pageNum ? 'bg-white border-2 border-white scale-125' : 'bg-transparent border border-white'}`}
                  />
                )
              })}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full bg-white text-primary border border-primary disabled:opacity-50 hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </main>
    </div>
  )
}
