var nameVar = 'Luis';
var nameVar = 'Fer';
console.log('nameVar', nameVar);

let nameLet = 'Sol';
nameLet = 'Marisol';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName(){
  const petName = 'Napas';
  return petName;
}

const petName = getPetName();
console.log(petName);

// Block scoping

const fullName = 'Luis Anaya';
let lastName;

if(fullName){
  var firstName = fullName.split(' ')[0];
  lastName = fullName.split(' ')[1];
  console.log(firstName);
  console.log(lastName);
}

console.log(firstName);
console.log(lastName);