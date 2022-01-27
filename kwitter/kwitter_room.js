


// Your web app's Firebase configuration
var firebaseConfig = {
 apiKey: "AIzaSyB9ix3aQ7U1sMR1TFFNypMj6oTRsZgSggM",
  authDomain: "classtest-6a91c.firebaseapp.com",
  databaseURL: "https://classtest-6a91c-default-rtdb.firebaseio.com",
  projectId: "classtest-6a91c",
  storageBucket: "classtest-6a91c.appspot.com",
  messagingSenderId: "60745453406",
  appId: "1:60745453406:web:08999fd3c82f11ae2549cf"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}
function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
  
}