import { create } from 'zustand'

interface FilterState {
  search: string
  region: string | null
  language: string | null
  setSearch: (search: string) => void
  setRegion: (region: string | null) => void
  setLanguage: (language: string | null) => void
  resetFilters: () => void
}

export const useFilter = create<FilterState>((set) => ({
  search: '',
  region: null,
  language: null,
  setSearch: (search) => set({ search }),
  setRegion: (region) => set({ region }),
  setLanguage: (language) => set({ language }),
  resetFilters: () => set({ search: '', region: null, language: null }),
}))
