// MATRRICA
var arr = [
    [9,2,3,4,5],
    [4,5,6,1,7],
    [8,7,9,7,5],
    [5,1,4,2,7],
    [8,7,1,5,4]
];


// TOXER
for(let i=0; i<5; i++){
    for(let j=0; j<5; j++){
        console.log(arr[i][j]);
    }
}


// SYUNER
for(let j=0; j<5; j++){
    for(let i=0; i<5; i++){
        console.log(arr[i][0]);
    }
}


// GLXAVOR ANKYUNAGIC
for(let i=0; i<5; i++){
    console.log(arr[i][i]);
}

// ERKRORDAKAN ANKYUNAGIC
for(let i=0; i<5; i++){
    console.log(arr[i][ 5-1-i ]);
}