var numbers = [5,6,9,8,3,4];

// printing array
console.log(numbers);

// indexing array
console.log(numbers[2]); // will return 9

// finding length
var lengthOfArray = numbers.length;
console.log(lengthOfArray);

// removing last element
var lastEl = numbers.pop();
console.log("Last element : "+lastEl);
console.log("New Array : "+numbers);

// finding index of an element
var ix = numbers.indexOf(8);
console.log(ix); // will return 3

// removing element at index 4
numbers.splice(4,1); // second argument denotes the quantity of element that will be removed starting from index4. Here only 8 will be removed
numbers.splice(1,2); // here 5 and 6 will be removed


// printing array with for loop
var i;
for(i = 0; i < lengthOfArray; i++) {
    console.log(numbers[i]);
}

// printing array with foreach loop

for (elements of numbers) {
    console.log(elements);
}