import uniqueRandomArray from 'unique-random-array';
import anzoateguiCities from './anzoategui-cities.json';

export const all = anzoateguiCities;
export const random = uniqueRandomArray(anzoateguiCities);