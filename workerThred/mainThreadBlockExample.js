console.log("Clicked")

let sum = 0;
for (let i = 0; i < 10e9; i++) {
    sum += i;
}
console.log("Sum1: ", sum)

for (let i = 0; i < 10e9; i++) {
    sum += i;
}

console.log("Sum: ", sum)