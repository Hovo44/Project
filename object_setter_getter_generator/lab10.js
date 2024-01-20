// GENERATOR


function* foo(){
    console.log('-1-');
    let b = yield 1; // 999
    console.log("-2-");
    yield b+5;
}

const a = foo();
console.log( a.next() ); // {value: 1, done: false}
console.log( a.next(999) ); // {value: 1004, done: false}
console.log( a.next() ); // {value: undefined, done: true}
