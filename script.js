let error = 5;
const leftBorderWidth = 1;


const obj = {
    a: 5,
};

console.log('obj: ', obj);

obj.a = '2';
console.log('obj: ', obj);


const person = {
    name: 'Vlad',
    age: 25,
    canCook : function() {
       return 'COOK';
    }
};

console.log(person.canCook());


let num = Number.MAX_SAFE_INTEGER;


let id = Symbol('ilkplkd');
console.info('id: ', id.description);


