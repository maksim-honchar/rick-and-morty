export const charactersURL = "https://rickandmortyapi.com/api/character";

export const episodesURL = "https://rickandmortyapi.com/api/episode";

export const locationsURL = "https://rickandmortyapi.com/api/location";

export interface IFilter {
  setFilter: (filter: string) => void;
  setCurrentPage: (page: number) => void;
}
