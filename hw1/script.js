let array = [11, 12, 13, 14, 15, 16]

console.log("\nPUSH")
console.log(array.push()) // PUSH argument-ად გადაეცემა ელემენტი, ან ელემენტები როელიც უნდა ჩაემატოს ბოლოში. ასევე აბრუნებს არაის სიგრძეს. 
//expected value 6
console.log(array)
//expected value [11, 12, 13, 14, 15, 16]

console.log(array.push(1, 2, 3))
//expected value length array 9
console.log(array)
//[ 11, 12, 13, 14, 15, 16, 1, 2, 3 ]

console.log("\nPOP")
console.log(array.pop())  // POP შლის არაიდან ბოლო ელემენტს  და აბრუნებს სწორე ამ წაშლილ ბოლო ელემენტს
//expected value 3
console.log(array)
//expected value [11, 12, 13, 14, 15, 1, 2,]


console.log("\nSHIFT")
console.log(array.shift())  // Shift შლის არაიდან პირველ ელემენტს  და აბრუნებს სწორედ ამ წაშლილ პირველ ელემენტს
//expected value 11
console.log(array)
//expected value [ 12, 13, 14, 15, 1, 2,]

console.log("\nUNsHIFT")
console.log(array.unshift(11))  // Unshift სვამს არგუმენტად გადაცემულ ელემენტს არაის პირველ ადგილად(ნული ინდექსი) და აბრუნებს არაის ზომას
//expected value 8
console.log(array)
//expected value[11, 12, 13, 14, 15, 16, 1, 2,]




console.log("\nგამოყენება ")
// push-ის shift-ის, unshift-ისა და pop-ის კომბინაციები შეიძლება გამოვიყენოთ არაიში ბოლო ელემენტის პირველ ადგილას გადმოსატანად და ასევე პირველი ელემენტის ბოლოში ჩასასმელად, მაგალითად:

let ret = array.push(array.shift())
console.log(array)
//expected value [ 12, 13, 14, 15, 16, 1, 2, 11 ]

let res = array.unshift(array.pop())
console.log(array)
//expected value [ 11, 12, 13, 14, 15, 16, 1, 2, 3 ]

// აღნიშნული შეიძლება გამოგვადგეს საიტე სლაიდ შოუს გასაკეთებლად რომ აქეთ-იქეთ ვატრიალოთ მასივი :) 



