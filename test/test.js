import { area } from '../src/index.js';
import { all, random } from '../src/index.js'
import { equal } from 'assert';
import { expect, assert } from 'chai';
import { describe } from 'mocha';

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            equal([1, 2, 3].indexOf(4), -1);
        });
    });
});
describe('Area eq zero', function () {
    describe('Area=0', function () {
        it('should return 0 when the are is eq zero', function () {
            equal(area(0), 0);
        });
    });
});

describe('util tests', function () {
    it('should pass this canary test', function () {
        expect(true).to.eql(true);
    });
});

describe('anzoategui-names', function () {
    describe('should be array', function(){
        it('must be an array of strings', function(){
            expect(all).to.satisfy(isArrayOfStrings);
        });

        function isArrayOfStrings(arr){
            return arr.every((el)=>{
                return typeof el === 'string';
            });
        }

        it('must contain "San Mateo"',()=>{
            expect(all).to.include("San Mateo");
        });

        it('should return array of specific qty',()=>{
            let randomCities = random(4);
            expect(randomCities.length).to.eql(4);
        });
    });
});

describe('Random City', function() {
    it('Must Return a random city',()=>{
            let randomCity = random();
            expect(all).to.include(randomCity);
        }) 
});