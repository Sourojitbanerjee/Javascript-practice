let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log(myDate.toTimeString());

// let myNewDate = new Date (2006, 5, 5)
// console.log(myNewDate.toDateString());

let myNewDate = new Date ("05-07-2006")
console.log(myNewDate.toDateString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myNewDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

