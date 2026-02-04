export interface ICurrencies {
  [key: string]: {
    name: string
    symbol: string
  }
}

export interface ILanguages {
  [key: string]: string
}

export interface IName {
  common: string
  official: string
  nativeName: {
    [key: string]: {
      official: string
      common: string
    }
  }
}

export interface IFlags {
  png: string
  svg: string
  alt: string
}

export interface ITranslations {
  por: {
    official: string
    common: string
  }
  [key: string]: {
    official: string
    common: string
  }
}

export interface ICountry {
  name: IName
  tld: string[]
  cca2: string
  ccn3: string
  cca3: string
  independent: boolean
  status: string
  unMember: boolean
  currencies: ICurrencies
  idd: {
    root: string
    suffixes: string[]
  }
  capital: string[]
  altSpellings: string[]
  region: string
  subregion: string
  languages: ILanguages
  translations: ITranslations
  latlng: number[]
  landlocked: boolean
  borders?: string[]
  area: number
  demonyms: {
    eng: {
      f: string
      m: string
    }
    [key: string]: {
      f: string
      m: string
    }
  }
  flag: string
  maps: {
    googleMaps: string
    openStreetMaps: string
  }
  population: number
  flags: IFlags
  coatOfArms: {
    png?: string
    svg?: string
  }
}
