"use strict";
function hello3(person) {
    console.log(`안녕하세요 ${person.name} 입니다.`);
}
const p31 = {
    name: 'JJang',
    age: 20,
};
const p32 = {
    name: 'Anna',
    sisters: ['Sung', 'Chan'],
};
const p33 = {
    name: 'JJang gu',
    father: p31,
    mother: p32,
};
hello2(p31);
hello2(p32);
hello2(p33);
