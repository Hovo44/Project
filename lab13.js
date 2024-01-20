// Spread operator for objects

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

const res = {...user,  eee: 'EEE', ...car};
console.log(res);