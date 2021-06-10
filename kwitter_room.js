//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAN_nsvEZ20GSrcniD_X8Ynola_8B-QTwM",
      authDomain: "kwitter-bfb2c.firebaseapp.com",
      databaseURL: "https://kwitter-bfb2c-default-rtdb.firebaseio.com",
      projectId: "kwitter-bfb2c",
      storageBucket: "kwitter-bfb2c.appspot.com",
      messagingSenderId: "453475014987",
      appId: "1:453475014987:web:1203860b0cf792c47470ce"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");


document.getElementById("user_name").innerHTML="Welcome "+ user_name + "!";

function addRoom() {
room_name = document.getElementById("room_name").value ;
firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'># "+ Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name){
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";

}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
window.location="index.html";

}
function login(){
      localStorage.addItem("user_name");
}



