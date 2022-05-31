// Loops! Loops are good for doing something repeatedly, easy and convenient, Expensive and slow, and sometimes nessecary

// Let i = 0 => initializes variable
// i < 10 -> is the condition to be checked
// i++ -> this adds 1 to i

for(let i = 0; i < 10; i++){   // 0 = creating variable <10 = checking variable if its not more than 10 than 'i + 1' add one
    // console.log('loop is running', i)
}

for(let i = 0; i <= 100; i++){
    // step 1 -> i = 0 then i + 1
    // step 2 -> i = 1 then i + 1
    // step 3 -> i = 2 then i + 1
    // step 4 -> i = 3 then i + 1
    // console.log('testest', i)
}
//               0        1       2       3         4         5        6
const cars = [`chevy`, `volvo`, `saab`, `ford`, `ferrari`, `tesla`, `nissan`]
for(let i = 0; i < cars.length; i++){

     if(i >= 4 && i < 6){
        // console.log(`here are my high end car -`, cars[i])
        // console.log only high end cars
    }
    // console.log(`Checkout my car`, cars[i])
}

// LAB

for(let x = 10; x > 0; x--){
 console.log(x)
}
console.log(`Blast off`)




