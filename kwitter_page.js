//YOUR FIREBASE LINKS
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
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
message_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
name_with_tag="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span> </button> <hr>";
row=name_with_tag+message_with_tag+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function updateLike(message_id)
{
      console.log("clicked on like button-"+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_Like=Number(likes)+1;
      console.log(updated_Like);
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_Like
      });
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}