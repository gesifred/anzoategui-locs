
import uniqueRandomArray from 'unique-random-array';
import anzoateguiCities from './anzoategui-cities.json';

export const all = anzoateguiCities;
export const random = uniqueRandomArray(anzoateguiCities);


export function area (r) {
    return 3.14 * r * r;
}
export function circumference (r) {
    return 3.14 * 3.14 * r;
}