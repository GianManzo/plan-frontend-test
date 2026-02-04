import { Search } from 'lucide-react'

import { useFilter } from '@/shared/hooks/useFilter'

export default function SearchInput() {
  const { search, setSearch } = useFilter()

  return (
    <div className="relative flex-1">
      <input
        type="text"
        placeholder="Informe o país que deseja conhecer..."
        className="w-full h-12 rounded-full pl-5 pr-12 text-gray-700 bg-white/40 border border-white placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white">
        <Search size={20} />
      </div>
    </div>
  )
}
