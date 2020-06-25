const db = require('./models');

const errorHandler = error => {
  console.log('🔥🔥🔥🔥🔥🔥');
  console.log(error)
}

// CREATE
// db.user.create({
//   firstName: 'Steve',
//   lastName: 'Peters',
//   age: 44,
//   email: 'stpets@bigdaddybezos.com'
// }).then(userData => {
//   // Now access new user via userData variable
//   console.log(`🌴 Welcome to the jungle`);
//   console.log(userData);
// }).catch(errorHandler);

// console.log('🎢 Adding that user was exhausting');

// READ
// db.user.findByPk(10).then...

// db.user.findOne({
//   where: {
//     id: 10
//   }
// }).then(foundUser => {
//   // We have a user! Let's console.log about it
//   console.log(`🍋 Hey there ${foundUser.firstName}! You are ${foundUser.age} years old`);
// }).catch(errorHandler);

// Find or Create
// db.user.findOrCreate({
//   where: {
//     email: 'b.hague@ga.co'
//   },
//   defaults: {
//     firstName: 'Brian',
//     lastName: 'Hague',
//     age: 99
//   }
// }).then(([user, created]) => {
//   console.log(`🌏 ${user.firstName} was ${created ? 'created' : 'found'}!`);
// }).catch(errorHandler);

// Sick spread functionality bro
// const [hello, there] = ['hey hey', 'Spain'];
// console.log(hello)
// db.user.findAll().then(users => {
//   users.forEach(user => console.log(`💅 Hey there ${user.firstName}!`));
// }).catch(errorHandler);


// UPDATE
// UPDATE users SET age = 99 WHERE email = 'b.hague@ga.co`;
// db.user.update({ 
//   age: 99 
// }, { 
//   where: { 
//     email: 'b.hague@ga.co' 
//   } 
// }).then(updated => {
//   console.log('💇‍♂️');
//   // updated is an array of one value which is the number of items updated
//   console.log(updated);
// }).catch(errorHandler);

// DESTROY
// db.user.destroy({
//   where: {
//     firstName: 'Brian'
//   }
// }).then(deleted => {
//   console.log('⛑');
//   // deleted is a Number of items deleted
//   console.log(deleted);
// }).catch(errorHandler).finally(() => {
//   // any kind of cleanup or other things
//   console.log('Donskies')
// })

/* ---------- Adding pets ----------- */

// createModel
// db.user.findOne().then(user => {
//   user.createPet({
//     name: 'Gracie',
//     species: 'Mutt Dog',
//     description: 'Cute but neurotic pooch who bites people'
//   }).then(pet => {
//     console.log(`🐕 Hello there ${pet.name}!`);
//   }).catch(errorHandler);
// }).catch(errorHandler);

// getModels
// Get a user
// db.user.findOne().then(steve => {
//   // Get all the pets of the user
//   steve.getPets().then(pets => {
//     // Pets is an array
//     pets.forEach(pet => console.log(`🐕 ${pet.name} is a ${pet.species}`));
//   }).catch(errorHandler)
// }).catch(errorHandler)

// setModel
// db.pet.findOrCreate({
//   where: {
//     name: 'Simbuttbutt',
//     species: 'Ginger Cat'
//   },
//   defaults: {
//     description: 'Traumatised by an aussie, but very cute'
//   }
// }).then(([pet, created]) => {
//   db.user.findOne().then(user => {
//     // addModel
//     user.addPet(pet);
//     console.log(`🔋 User ${user.firstName} is the owner of ${pet.name}`);
//   }).catch(errorHandler);
// }).catch(errorHandler);

// include statement
// db.user.findAll({
//   include: [db.pet]
// }).then(users => {
//   // each user object will have a pets key with an array of pets
//   console.log(`🕍 ${users[0].firstName} has ${users[0].pets.length} pets`);
// }).catch(errorHandler);

// db.pet.findOrCreate({
//   where: {
//     name: 'Silly May'
//   }
// }).then(([pet, created]) => {
//   db.toy.findOrCreate({
//     where: {
//       type: "ball",
//       color: "tennis-colored"
//     }
//   }).then(([toy, created]) => {
//     pet.addToy(toy).then(relationInfo => {
//       console.log(toy.type, "added to", pet.name)
//     })
//   })
// })

// db.toy.findOne({
//   where: {
//     type: 'soul'
//   }
// }).then(toy => {
//   toy.getPets().then(pets => {
//     console.log(pets.length, 'pet(s) love the', toy.color, toy.type)
//   })
// })

// db.toy.findOrCreate({
//   where: {type: 'ball', color: 'tennis'}
// }).then(([toy, created]) => {
//   toy.getPets().then(pets => {
//     if(pets.length > 0) {
//       pets.forEach(pet => {
//         console.log(pet.name, 'loves their', toy.color, toy.type)
//       })
//     }
//     else {
//       db.pet.findOrCreate({
//         where: {
//           name: "Bob",
//           species: 'Cat'
//         }
//       }).then(([pet, created]) => {
//         toy.addPet(pet).then(relationInfo => {
//           console.log(pet.name, 'has fallen in love with', toy.color, toy.type)
//         })
//       })
//     }
//   })
// })

// db.pet.findOne({
//   where: {
//     name: "Silly May"
//   },
//   include: [db.user, db.toy]
// }).then(pet => {
//   pet.toys.forEach(toy => {
//     console.log(pet.user.firstName + '\'s pet', pet.name, 'loves their', toy.color, toy.type)
//   })
// })