
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCljyJoqAXtvSYPo3yv49sczRWvhvGIQ3s",
      authDomain: "kitter-46f7c.firebaseapp.com",
      databaseURL: "https://kitter-46f7c-default-rtdb.firebaseio.com",
      projectId: "kitter-46f7c",
      storageBucket: "kitter-46f7c.appspot.com",
      messagingSenderId: "619308024141",
      appId: "1:619308024141:web:e68c5a00b5424f804c3704",
      measurementId: "G-XXCMF906ZH"
    };
    firebase.initializeApp(firebaseConfig);
    function addRoom(){
          room_name= document.getElementById("room_name").value;
          firebase.database().ref("/").child(user_name).update({
          purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name="+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}