function Passingword(){
let passingword= "";
do {
    passingword = prompt("Please enter the password:");
} while (passingword.length < 8);
window.alert("Password accepted: " + passingword);
}