/**
 * UNICAMENTE PARA TESTEAR CON LO DE RICK AND MORTY
 */

interface CharacterLocation {
  name: string;
  url: string;
}

interface ResourceBase {
  id: number;
  name: string;
  url: string;
  created: string;
}

export interface EndpointAlbum extends ResourceBase {
  status: 'Dead' | 'Alive' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: string[];
}
