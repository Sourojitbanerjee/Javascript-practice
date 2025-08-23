// let username 

// username = window.prompt("what's your username");

// console.log(username)
let username;

document.getElementById("my Submit").onclick = function(){
    username = document.getElementById("mytext").value;
   document.getElementById("myheading").textcontent = `Hello, $(username)`
    
}