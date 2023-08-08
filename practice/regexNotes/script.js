var str = "This is a black ball pen. This pen is really smooth. I love this PEN.";
// var pattern = /pen/gi;
var pattern = new RegExp('pen', 'gi');
console.log(str.search(pattern));
console.log(pattern.test(str));
console.log(str.match(pattern))