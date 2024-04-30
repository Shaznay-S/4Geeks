const BASE_URL = 'https://www.swapi.tech/api';

export const fetchResource = async (resource, id = '') => {
  const response = await fetch(`${BASE_URL}/${resource}/${id}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data.result || data.results;
};

export const getPeople = async (id = '') => {
  return await fetchResource('people', id);
};

export const getPlanets = async (id = '') => {
  return await fetchResource('planets', id);
};

export const getVehicles = async (id = '') => {
  return await fetchResource('vehicles', id);
};

export const getSpecies = async (id = '') => {
  return await fetchResource('species', id);
};

export const getStarships = async (id = '') => {
  return await fetchResource('starships', id);
};

export const fetchByUrl = async (url) => {
  if (!url) return null;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data.result;
};

export default { getPeople, getPlanets, getVehicles, getSpecies, getStarships, fetchByUrl };
