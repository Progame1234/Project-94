var firebaseConfig = {
      apiKey: "AIzaSyBPOukMI2YxAk_GP920AC1vebEDuBVv2kU",
      authDomain: "kwitter-efad9.firebaseapp.com",
      databaseURL: "https://kwitter-efad9-default-rtdb.firebaseio.com",
      projectId: "kwitter-efad9",
      storageBucket: "kwitter-efad9.appspot.com",
      messagingSenderId: "49921003914",
      appId: "1:49921003914:web:e67c3bacd3406ed6503873",
      measurementId: "G-CZHVVDQ963"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
