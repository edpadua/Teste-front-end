export interface IRegionData {
  name: string;
  url: string;
}

export interface ILocationData {
    name: string;
    url: string;
  }

export interface IRegionsResponse {
    count: number,
    next?: string,
    previous?: string,
    results: IRegionData[];
  
}

export interface ILocationsResponse {
    id: string,
    locations: ILocationData[];
  
}


export interface IResults{
    count: number,
    next?: string,
    previous?: string,
    results: IPokemonData[]
}

export interface IPokemonData{
    name: string
    url: string
}
