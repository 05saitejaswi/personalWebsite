/* For Testing
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA1unUPPxmMSwJGQ1khDiDLtxAXYElqm54",
    authDomain: "fossboy.firebaseapp.com",
    databaseURL: "https://fossboy.firebaseio.com",
    projectId: "fossboy",
    storageBucket: "fossboy.appspot.com",
    messagingSenderId: "450895180598",
    appId: "1:450895180598:web:a83726d23d7bce4845b997",
    measurementId: "G-6XXEJJYEBK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
*/


// Your web app's Firebase configuration
 var firebaseConfig = {
   apiKey: "AIzaSyAoeT6sC6LyFcoNLXVc6SG6e3aqBRhsqQg",
   authDomain: "workloggingsystem.firebaseapp.com",
   databaseURL: "https://workloggingsystem.firebaseio.com",
   projectId: "workloggingsystem",
   storageBucket: "workloggingsystem.appspot.com",
   messagingSenderId: "744010877071",
   appId: "1:744010877071:web:6c991081d7b21818b888fa",
   measurementId: "G-3CWF3NRSW6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

/*// Bighnesh Trial firebase
 //Your web app's Firebase configuration
   var firebaseConfig = {
   apiKey: "AIzaSyAaMjQnm3NnUmHHW2Smt6wJyRV7a0FIeFo",
   authDomain: "wls1-b942d.firebaseapp.com",
   databaseURL: "https://wls1-b942d.firebaseio.com",
   projectId: "wls1-b942d",
   storageBucket: "wls1-b942d.appspot.com",
   messagingSenderId: "1056324548947",
   appId: "1:1056324548947:web:642a1d3c3fab60460c49a6",
   measurementId: "G-KWPDV4PSDG"
 };
// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.analytics();*/

// Get a reference to the database service
var database = firebase.database();

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
callbacks: {
signInSuccessWithAuthResult: function(authResult, redirectUrl) {
// User successfully signed in.
// Return type determines whether we continue the redirect automatically
// or whether we leave that to developer to handle.
return true;
},
uiShown: function() {
// The widget is rendered.
// Hide the loader.
document.getElementById('loader').style.display = 'none';
}
},
// Will use popup for IDP Providers sign-in flow instead of the default, redirect.
signInFlow: 'popup',
signInSuccessUrl: 'workLoggingSystem.html',
signInOptions: [
// Leave the lines as is for the providers you want to offer your users.
{
provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
scopes: [
        'https://www.googleapis.com/auth/contacts.readonly'
    ],
},
firebase.auth.EmailAuthProvider.PROVIDER_ID
]
// Terms of service url.
// tosUrl: '<your-tos-url>',
// // Privacy policy url.
// privacyPolicyUrl: '<your-privacy-policy-url>'
};

function createNewTask(title,des,priority,difficulty,creator,assignee,estimatedTime,status,category,creationDate) {

  var taskIdNumber = getIdNumber();
  var taskId = category[0]+taskIdNumber;
  var loggedWorkTotalTime = 0;
  var workDone = 0;
  var completedDate = "Not Yet Completed";

  database.ref('Tasks/' + taskId).set({
    Title: title,
    Description: des,
    Priority: priority,
    Difficulty: difficulty,
    Creator: creator,
    Assignee: assignee,
    ET: estimatedTime,
    Status: status,
    Category: category,
    LogWorkTotalTime: loggedWorkTotalTime,
    CreationDate: creationDate,
    WorkDone: workDone,
    CompletedDate: completedDate,
  });

  newTaskCreatedSuccessfully();
}

function getIdNumber()
{
  var today = new Date();
  var date = today.getFullYear()+""+(today.getMonth()+1)+""+today.getDate();
  var time = today.getHours() + "" + today.getMinutes() + "" + today.getSeconds();

  var result = date + time;

  return result;
}

function newTaskCreatedSuccessfully()
{
  $("#createNewTask").fadeOut(100);
  $("#successful").fadeIn(0);
  $("#successful").fadeOut(2000);
  $("#bodyContent").fadeIn(2000);
}

function getTasks()
{
  var result = "ok";

  result = getTasksData();

  return result;
}

function getTasksData()
{
  var result = "ok";

  document.getElementById("jobTickets").innerHTML = "";
  document.getElementById("taskTickets").innerHTML = "";

  var taskData = database.ref('Tasks/');
  taskData.on('child_added', function(snapshot) {
    createInstance(snapshot.key, snapshot.val());
    setIntoTaskCard(snapshot.key);
  });

  return result;
}

var datalist = [];

function createInstance(id, data)
{
  datalist[id] = new Data(data);
}

function updateFromLogWorkData(id, logWorkTotalTime, status, workDone, comment,completedDate)
{
  var updates = {};
  updates['/Tasks/' + id + '/LogWorkTotalTime'] = logWorkTotalTime;
  updates['/Tasks/' + id + '/Status'] = status;
  updates['/Tasks/' + id + '/WorkDone'] = workDone;
  updates['/Tasks/' + id + '/Comment'] = comment;
  updates["/Tasks/" + id + "/CompletedDate"] = completedDate;


  return database.ref().update(updates);

}
function editData(id,title,status,priority,estimatedTime,difficulty,des,creator,category,assignee)
{
  var updates = {};
  updates['/Tasks/' + id + '/Title'] = title;
  updates['/Tasks/' + id + '/Status'] = status;
  updates['/Tasks/' + id + '/Priority'] = priority;
  updates['/Tasks/' + id + '/ET'] = estimatedTime;
  updates['/Tasks/' + id + '/Difficulty'] = difficulty;
  updates['/Tasks/' + id + '/Description'] = des;
  updates['/Tasks/' + id + '/Creator'] = creator;
  updates['/Tasks/' + id + '/Category'] = category;
  updates['/Tasks/' + id + '/Assignee'] = assignee;
  console.log("its working");
  return database.ref().update(updates);

}
