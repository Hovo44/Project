
function foo(a, b){
    console.log(this.name, this.age, a, b);
}

const user1 = {
    name: 'kim',
    age: 21,
    logInfo: foo
};
const user2 = {
    name: 'anna',
    age: 20,
    logInfo: foo
};

user1.logInfo(1, 2);
user2.logInfo(1, 2);
