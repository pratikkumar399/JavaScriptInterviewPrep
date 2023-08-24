// string in javascript

// String methods

// 1. charAt() -> it will return the character at the specified index
// 2. charCodeAt() -> it will return the unicode of the character at the specified index
// 3. concat() -> it will concatenate two strings
// 4. endsWith() -> it will check whether the string ends with the specified string or not
// 5. fromCharCode() -> it will return the character from the specified unicode
// 6. includes() -> it will check whether the string contains the specified string or not
// 7. indexOf() -> it will return the index of the specified string
// 8. lastIndexOf() -> it will return the last index of the specified string
// 9. match() -> it will return an array of strings that matches the specified string
// 10. repeat() -> it will repeat the string the specified number of times
// 11. replace() -> it will replace the first occurence of the specified string with the new string
// 12. search() -> it will search for the specified string and return the index of the first occurence of the specified string
// 13. slice() -> it will slice the string from the specified start index to the specified end index
// 14. split() -> it will split the string into an array of strings based on the separator that we provide to it
// 15. startsWith() -> it will check whether the string starts with the specified string or not
// 16. substr() -> it will return the substring from the specified start index to the specified length
// 17. substring() -> it will return the substring from the specified start index to the specified end index
// 18. toLowerCase() -> it will convert the string to lower case
// 19. toUpperCase() -> it will convert the string to upper case
// 20. trim() -> it will remove the extra spaces from the string
// 21. valueOf() -> it will return the primitive value of the string


// Now lets see each of them in use

// 1. charAt() -> it will return the character at the specified index
let str = "This is my string";
console.log(str.charAt(0));

// 2. charCodeAt() -> it will return the unicode of the character at the specified index
let str1 = "This is my string";
console.log(str1.charCodeAt(0));

// 3. concat() -> it will concatenate two strings
let str2 = "This is my string";
let str3 = "This is my string";
console.log(str2.concat(str3));

// 4. endsWith() -> it will check whether the string ends with the specified string or not
console.log(str.endsWith("string"));

// 5. fromCharCode() -> it will return the character from the specified unicode
console.log(String.fromCharCode(65));

// 6. includes() -> it will check whether the string contains the specified string or not
console.log(str.includes("my"));

// 7. indexOf() -> it will return the index of the specified string from the start
console.log(str.indexOf("my"));

// 8. lastIndexOf() -> it will return the last index of the specified string
console.log(str.lastIndexOf("my"));

// 9. match() -> it will return an array of strings that matches the specified string
console.log(str.match(/is/g));

// 10. repeat() -> it will repeat the string the specified number of times
console.log(str.repeat(2));

// 11. replace() -> it will replace the first occurence of the specified string with the new string
console.log(str.replace("my", "your"));

// 12. search() -> it will search for the specified string and return the index of the first occurence of the specified string
console.log(str.search("my"));

// 13. slice() -> it will slice the string from the specified start index to the specified end index
console.log(str.slice(0, 4));
console.log(str.slice(-6, -1)); // negative index will start from the end of the string


// 14. split() -> it will split the string into an array of strings based on the separator that we provide to it
console.log(str.split(" "));

// 15. startsWith() -> it will check whether the string starts with the specified string or not
console.log(str.startsWith("This"));

// 16. substr() -> it will return the substring from the specified start index to the specified length
console.log(str.substr(0, 4));

// 17. substring() -> it will return the substring from the specified start index to the specified end index
console.log(str.substring(0, 4));

// 18. toLowerCase() -> it will convert the string to lower case
console.log(str.toLowerCase());

// 19. toUpperCase() -> it will convert the string to upper case
console.log(str.toUpperCase());

// 20. trim() -> it will remove the extra spaces from the string
console.log(str.trim());

// 21. valueOf() -> it will return the primitive value of the string
console.log(str.valueOf());

// 22. toString() -> it will convert the string to string
let str4 = 123;
console.log(str4.toString());

// 23. length -> it will return the length of the string
console.log(str.length);

// 24. matchAll() -> it will return an iterator of all the matches of the string   
console.log(str.matchAll(/is/g));



// String properties

// 1. constructor -> it will return the constructor of the string
console.log(str.constructor);

// 2. prototype -> it will return the prototype of the string
console.log(str.prototype);

// 3. length -> it will return the length of the string
console.log(str.length);

// 4. __proto__ -> it will return the prototype of the string
console.log(str.__proto__);


// string is immutable in javascript
// string is a primitive data type in javascript
// string is a global object in javascript

// string literals
let name = "pratik"

console.log(`my name is ${name}`)

