// function sample(){
// document.getElementById("ample").innerHTML = "Beatrice Ladines";
// }

// hello = () => {
//     document.getElementById("ample").innerHTML = this;
//   }

// const x = (x,y) => x + y ;
// console.log(x(1,2));

const a = document.querySelector('#sample');

a.addEventListener(
  'click',
  (hello = () => {
    document.body.style.backgroundColor =
      '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
  })
);

// // Cases ---------------------------------------------------------
// const Name ='Ace';
// console.log(Name.toUpperCase(Name));

// // Arrays
// const Fruits = ["Manga", "Apple","Guyabano","Banana","Pineapple"];
// Fruits.push("Bayabas"); // insert to the last array
// Fruits.unshift("Santol"); // insert to the start of array
// Fruits.pop(); // remove the last part of an array
// console.log(Fruits);

// console.log(Array.isArray(Fruits)); // Confirming if it is an array
// console.log(Fruits.indexOf("Apple")); // Finding the index of specified input
// console.log(Fruits.splice(0,4)); // Cutting an array

// // Object literals
// const people = {
//     firstname: "Acemon",
//     lastname: "Ladines",
//     age: 18,
//     favorites: ["Coding","Sleeping","Eating"],
//     familymembers: {
//         father: "Ace York",
//         mother: "Monalisa"
//     }
// };

// console.log(people);
// //console.log(people.familymembers); // Choosing what to show sample

// const Contacts = [
//     {
//         id: 1,
//         fullname: "Acemon Ladines",
//         isSaved: "Phone"
//     },

//     {
//         id: 2,
//         fullname: "Ace York Ladines",
//         isSaved: "Phone"
//     },

//     {
//         id: 3,
//         fullname: "Acemon Ladines",
//         isSaved: "Phone"
//     }

// ];

// console.log(Contacts);
// //console.log(Contacts[0]); // You can choose what you output

// Loopings----------------------------------   -------------------------

// for (let i = 0; i < Contacts.length; i++) {
//     console.log(Contacts[i].fullname);
// }

// for (let contact of Contacts){
//     console.log(contact.fullname);
// }

// Contacts.forEach(function(contact){
//     console.log(contact.fullname);
// }
// );

// const ContactsFullname = Contacts.map
//     (function(contact) {
//         return contact.fullname;
//     });

// const ContactsPhone = Contacts.filter
//     (function(contact) {
//         return contact.isSaved == "Phone";
//     });
// console.log(ContactsPhone);

// console.log(ContactsFullname);

// let i = 0
// while (i <= 10) {
//     console.log('Sample ' + i);
//     i++;
// }

//JSON----------------------------------------------------------------

// const ContactJSON = JSON.stringify(Contacts);
// console.log(ContactJSON);

// Conditionals ------------------------------------------------------

// const x = 100;

// if (x === "100"){   // === means strict equal
//     console.log("True");
// }
// else {
//     console.log("False");
// }

// Function types ----------------------------------------------------

// let x = 100;
// let y = 50;

// function GetSum(x,y){
//    return x + y;

// }

// console.log(GetSum(x,y));

// const GetSum = (x, y) => x + y;

// console.log(GetSum(100,200));

// OOP ---------------------------------------------------------------
// Constructor Function

// function Tao(firstname, lastname, gender){
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.gender = gender;

//     this.getFullname = () => {
//         return `${this.firstname} ${this.lastname}`;
//     }
// }

// const tao1 = new Tao ("Acemon","Ladines");
// console.log(tao1.getFullname());
