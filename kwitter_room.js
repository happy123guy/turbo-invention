const firebaseConfig = {
      apiKey: "AIzaSyBYRz_DVIkhJXhP7FiWWMt94VkriBoqTUM",
      authDomain: "kwitter-projects-851b2.firebaseapp.com",
      databaseURL: "https://kwitter-projects-851b2-default-rtdb.firebaseio.com",
      projectId: "kwitter-projects-851b2",
      storageBucket: "kwitter-projects-851b2.appspot.com",
      messagingSenderId: "972859016771",
      appId: "1:972859016771:web:db59a184ff902b668936f6"
    };
    
    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
{childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room name = "+Room_names);
       row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' ><hr>#" + Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML= "<kbd>Welcome "+user_name + "!</kbd>";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room"
        });
        localStorage.setItem("room_name" , room_name);
        window.location = "kwitter_page.html";
}

function logout(){
      window.location = "index.html";

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
}