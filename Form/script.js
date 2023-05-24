let form = document.getElementById('infoForm')
form.addEventListener("submit", function(event) {
    event.preventDefault();
   const firstNameInput = document.getElementById('fname').value;
   const lastNameInput = document.getElementById('lname').value;
   const ageInput = document.getElementById('age').value;
   
   const person = {
     firstName: firstNameInput,
     lastName: lastNameInput,
     age: ageInput
   };
     let h2 = document.getElementById('message')
     h2.innerText = `Hello, ${person.firstName} ${person.lastName}! You are ${person.age}.`;
   console.log(person)
 
 });
 