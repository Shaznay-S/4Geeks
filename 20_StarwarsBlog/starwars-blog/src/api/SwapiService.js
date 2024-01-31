// src/api/SwapiService.js
const BASE_URL = 'https://www.swapi.tech/api';

const fetchResource = async (resource, id = '') => {
  const response = await fetch(`${BASE_URL}/${resource}/${id}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};

export const getPeople = async (id) => {
  return await fetchResource('people', id);
};

export const getPlanets = async (id) => {
  return await fetchResource('planets', id);
};

export const getVehicles = async (id) => {
  return await fetchResource('vehicles', id);
};

export default { getPeople, getPlanets, getVehicles };
