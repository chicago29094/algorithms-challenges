////////////////////////////////
// Fizz Buzz
////////////////////////////////

// // The long way
// for (let i=1; i<=100; i++) {
//     if (i%15===0) console.log("FizzBuzz")
//     else if (i%5===0) console.log("Buzz")
//     else if (i%3===0) console.log("Fizz")
//     else console.log(i);
// }

// Something different
// let output=[ [0,"Buzz"], ["Fizz","FizzBuzz"]  ];
// for (let i=1; i<=100; i++) {
//     output[0][0]=i;
//     console.log(output[0+(i%3===0)][0+(i%5===0)]);
// }

let i=0;
let output=[ [null,"Buzz"], ["Fizz","FizzBuzz"]  ];
while (i<100) console.log(output[+(i%3==0)][+(i++%5==0)] || i);

for(var i=0;i<100;)console.log((++i%3?'':'Fizz')+(i%5?'':'Buzz')||i)


