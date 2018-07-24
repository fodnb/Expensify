import * as firebase from "firebase";

var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID

  };

  firebase.initializeApp(config);

  const database = firebase.database();


  export { firebase, database as default};




//   database.ref('expenses').on('child_removed', (snapshot)=>{

//     console.log('deleted', snapshot.key);
//     console.log('deleted', snapshot.val());

//   }, (e)=>{
//       console.log('error: ', error);
//   })

//   database.ref('expenses').on('child_changed', (snapshot)=>{
//     console.log('changed', snapshot.key);
//     console.log('changed', snapshot.val());
//   }, (e)=>{
//       console.log('error: ', e);
//   });

//   database.ref('expenses').on('child_added', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val());       
//   })


//   database.ref('expenses').once('value')
//     .then((snapshot)=>{
//         const expenses = [];

//         snapshot.forEach((childSnapshot)=>{
//             const key = childSnapshot.key;
//             const childData = childSnapshot.val();

//             expenses.push({
//                 id: key,
//                 ...childData
//             });


//         });
//             console.log('expenses', expenses);
//     })
//     .catch((e)=>{
//         console.log('error: ', e);
//     })

//     database.ref('expenses').on('value', (snapshot)=>{
//         const expenses = [];        
//         snapshot.forEach((childSnapshot)=>{

//             expenses.push({
//                 key: childSnapshot.key,
//                 ...childSnapshot.val()
//             })

//         })
//         console.log('expenses', expenses);

//     }, (e)=>{
//         console.log('error: ', e)
//     })



//   database.ref('expenses').push({
//     description: "rent",
//     note: "",
//     createdAt: 5,
//     amount: 500.00,
//   });


//   database.ref().once('value')
//     .then((snapshot)=>{
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e)=>{
//         console.log('e', e);
//     });


// database.ref('notes').push({
//     title: 'go running',
//     note: 'get new sneakers'
// })


// database.ref('notes').push({
//     title: 'take grandma shopping',
//     note: 'also bring her groceries from moms'
// })


// database.ref("notes/-LHwyat4ydDbSpfK-NIb").update({
//     note: 'take dog out'
// })


// database.ref().on('value', (snapshot)=>{
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}` );

// }, (e)=>{
//     console.log('error: ', e);
// });

// database.ref().on('value', (snapshot)=>{
//     console.log(snapshot.val());
// });
 

// database.ref()
//     .update({
//         stresslevel: 10,
//         age: 42,
//         name: "una"
//     })

//   database.ref().set({
//       name: "Daniel McGhee",
//       age: 36,
//       stressLevel: 6,
//       job: {
//         title: 'Software Developer',
//         company: 'google'
//       },
//       location: {
//           city: "Garfield",
//           state: "NJ",
//           country: "USA"
//       }
//   });


  //change stress level to 9
  //chnge job.company to amazon
  //change city seatle


//   database.ref().update({
//       stressLevel: 9,
//       'job/company': 'amazon',
//       'location/city': 'seatle'
//   })

// RemoveData
// database.ref('isSingle').remove()
//     .then(()=>{
//         console.log("isSingle was removed");
//     }).catch((e)=>{
//         console.log("something went wrong");
//     });


// database.ref('isSingle').set(null);


// UPDATE
// database.ref('location').update({
//     city: "New Brunswick",
//     state: "WV"
// })

// database.ref().update({
//     name: "Dan",
//     'location/city': 'Tokyo'
// })