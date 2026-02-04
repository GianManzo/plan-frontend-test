import clsx from 'clsx'

import { useFilter } from '@/shared/hooks/useFilter'

const REGIONS = [
  { label: 'África', value: 'Africa' },
  { label: 'América do Norte', value: 'North America' },
  { label: 'América do Sul', value: 'South America' },
  { label: 'Ásia', value: 'Asia' },
  { label: 'Europa', value: 'Europe' },
  { label: 'Oceania', value: 'Oceania' },
]

export default function RegionFilter() {
  const { region, setRegion } = useFilter()

  const handleRegionChange = (value: string) => {

    if (region === value) {
      setRegion(null)
    } else {
      setRegion(value)
    }
  }

  return (
    <div className="flex flex-wrap gap-4 md:gap-8 mt-6">
      {REGIONS.map((item) => (
        <label
          key={item.value}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="relative flex items-center">
            <input
              type="checkbox"
              className="peer appearance-none w-5 h-5 border-2 border-white rounded-sm checked:bg-white checked:border-white transition-all text-primary"
              checked={region === item.value}
              onChange={() => handleRegionChange(item.value)}
            />
            <svg
              className="absolute w-3.5 h-3.5 pointer-events-none hidden peer-checked:block text-orange-500 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <span
            className={clsx(
              'text-gray-800 font-medium font-nunito group-hover:text-white transition-colors',
              region === item.value ? 'text-white' : '',
            )}
          >
            {item.label}
          </span>
        </label>
      ))}
    </div>
  )
}
