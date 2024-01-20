
// Array Destructuring

const user1 = {
    hayk: 'developer',
    anna: 'qa',
    ani: 'developer'       
};

const res1 = Object.entries(user1).filter( ( arr )=> arr[1] === 'developer' );
const res1 = Object.entries(user1).filter( ( [ ,b] )=> b === 'developer' );
console.log(res1);


