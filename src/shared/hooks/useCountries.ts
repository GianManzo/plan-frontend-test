import {
  getCountries,
  getCountryByName,
  getCountryByCode,
} from '@/shared/apis/countries'
import { ICountry } from '@/shared/interfaces/country'
import { useQuery } from '@tanstack/react-query'

export const useCountries = () => {
  return useQuery<ICountry[]>({
    queryKey: ['countries'],
    queryFn: getCountries,
  })
}

export const useCountryByName = (name: string) => {
  return useQuery<ICountry[]>({
    queryKey: ['country', name],
    queryFn: () => getCountryByName(name),
    enabled: !!name,
  })
}

export const useCountryByCode = (code: string) => {
  return useQuery<ICountry[]>({
    queryKey: ['country', code],
    queryFn: () => getCountryByCode(code),
    enabled: !!code,
  })
}
