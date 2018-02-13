var curUser;


// Initialize Firebase
var config = {
  apiKey: "AIzaSyCKIR5xjjR1OTiCiSlPwef9GHHa8Wp83Zs",
  authDomain: "qhacks-172eb.firebaseapp.com",
  databaseURL: "https://qhacks-172eb.firebaseio.com",
  projectId: "qhacks-172eb",
  storageBucket: "qhacks-172eb.appspot.com",
  messagingSenderId: "761967957233"
};
firebase.initializeApp(config);

window.onload = function updatePage() {
  curUser = 'fRIYNyxg8tQVSZCHCgRjlHigLk62';
  var dbRef = firebase.database().ref().child("users").child(curUser);
  document.getElementById('bigOne').innerText = readDataBase();
}

function submitString() {
  var msgOut = document.getElementById("string").value;
  var database = firebase.database();
  var dbRef = firebase.database().ref("users").child(curUser).child("messages");
  var pushRef = dbRef.push();
  //got the update working so it appends the list but i have no idea to set he correct indecies
  dbRef.push(msgOut);
}

function readDataBase() {
  var database = firebase.database();
  curUser = 'fRIYNyxg8tQVSZCHCgRjlHigLk62';
  var bigOne = document.getElementById('bigOne');
  var dbRef = firebase.database().ref("users").child(curUser).child("messages");
  dbRef.on('value', gotData, errData);

  function gotData(data){
  	console.log(data.val());
    var messages = data.val();

  	bigOne.innerHTML = Object.values(messages).map(function(message) {
  		return '<li>' + message + '</li>';
  	}).join('');
  }



  function errData(err){
       console.log('Error');
       console.log(err);
  }


}
