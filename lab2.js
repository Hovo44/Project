

// Arrow Functions

function foo(x){
    return x*x;
}

const foo2 = (x)=>{return x*x};
const foo3 = (x) => x*x;
const foo4 = x => x*x;



let user1 = {
    name: 'kim',
    age: 21,
    logInfo: function(){
        function inner(){
            console.log(this.name); // THIS KKORI
        }
        inner();
    }
};
user1.logInfo();


let user2 = {
    name: 'kim',
    age: 21,
    logInfo: function(){
        const inner = () => {
            console.log(this.name); // 'kim'
        }
        inner();
    }
};

user2.logInfo();


