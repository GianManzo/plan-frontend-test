import LanguageFilter from './LanguageFilter'
import RegionFilter from './RegionFilter'
import SearchInput from './SearchInput'

export default function Header() {
  return (
    <header className="w-full pt-8 pb-4 px-4 md:px-12 lg:px-24">
      <div className="flex justify-between items-start mb-8">
        {/* Placeholder for Logo - In a real scenario use the actual logo asset if provided, or text */}
        <div className="text-white text-4xl font-bold tracking-tight">
          <span className="font-nunito">plan</span>
          <span className="block text-xs font-normal tracking-wider uppercase mt-[-5px]">
            marketing digital
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 w-full">
        <SearchInput />
        <LanguageFilter />
      </div>

      <RegionFilter />
    </header>
  )
}
