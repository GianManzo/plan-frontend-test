import { ChevronDown } from 'lucide-react'

import { useCountries } from '@/shared/hooks/useCountries'
import { useFilter } from '@/shared/hooks/useFilter'

export default function LanguageFilter() {
  const { language, setLanguage } = useFilter()
  const { data: countries } = useCountries()


  const languages = Array.from(
    new Set(
      countries?.flatMap((country) => Object.values(country.languages || {})) ||
      [],
    ),
  ).sort()

  return (
    <div className="relative flex-1">
      <select
        className="w-full h-12 rounded-full pl-5 pr-10 text-gray-900 bg-white/40 border border-white appearance-none focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer font-medium"
        value={language || ''}
        onChange={(e) => setLanguage(e.target.value || null)}
      >
        <option value="">Selecione o idioma</option>
        {languages.map((lang) => (
          <option key={lang} value={lang} className="text-gray-800">
            {lang}
          </option>
        ))}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white pointer-events-none">
        <ChevronDown size={20} />
      </div>
    </div>
  )
}
