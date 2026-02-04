import { ICountry } from '@/shared/interfaces/country'

const BASE_URL = 'https://restcountries.com/v3.1'
const LIST_FIELDS = 'name,flags,region,subregion,languages,translations,capital,cca3'
const DETAIL_FIELDS = 'name,flags,region,capital,population,currencies,languages,translations,subregion,borders,cca3'

export const getCountries = async (): Promise<ICountry[]> => {
  const response = await fetch(`${BASE_URL}/all?fields=${LIST_FIELDS}`)
  if (!response.ok) {
    throw new Error('Failed to fetch countries')
  }
  return response.json()
}

export const getCountryByName = async (name: string): Promise<ICountry[]> => {
  const response = await fetch(`${BASE_URL}/name/${name}?fullText=true&fields=${DETAIL_FIELDS}`)
  if (!response.ok) {
    throw new Error('Failed to fetch country')
  }
  return response.json()
}

export const getCountryByCode = async (code: string): Promise<ICountry[]> => {
  const response = await fetch(`${BASE_URL}/alpha/${code}?fields=${DETAIL_FIELDS}`)
  if (!response.ok) {
    throw new Error('Failed to fetch country by code')
  }
  return response.json()
}
