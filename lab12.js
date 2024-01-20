

const user = {
    name: 'kim',
    age: 21,
    admin: false
};

const car = {
    model: 'opel',
    year: 2021,
    color: 'gray'
};

const user2 = Object.assign({}, user, car);
console.log(user2);
