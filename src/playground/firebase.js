import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBrx6D3vn_yr24gSEfvlQQ4Er2XF_bNlb8",
  authDomain: "expensify-f4192.firebaseapp.com",
  databaseURL: "https://expensify-f4192.firebaseio.com",
  projectId: "expensify-f4192",
  storageBucket: "expensify-f4192.appspot.com",
  messagingSenderId: "157470253741"
};

firebase.initializeApp(config);

const database = firebase.database();

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').push({
  description: 'Rent',
  note: '',
  amount: 109500,
  createdAt: 976123498763
});

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });