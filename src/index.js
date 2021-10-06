
import uniqueRandomArray from 'unique-random-array';
import anzoateguiCities from './anzoategui-cities.json';
let cityTmp = uniqueRandomArray(anzoateguiCities);
export const all = anzoateguiCities;
export const random = function(number){ 
    if(number === undefined){
        return cityTmp();
    } else {
        let arr = [];
        for(let y=0;y<number;y++){
            arr.push(cityTmp());
        }
        return arr;
    }
}

export function area (r) {
    return 3.14 * r * r;
}
export function circumference (r) {
    return 3.14 * 3.14 * r;
}