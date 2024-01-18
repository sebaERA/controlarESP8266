var firebaseConfig = {
    apiKey: "AIzaSyCbY4Djx9STliDaIBB8u6YPEj0_kcd6SI4",
  	authDomain: "led-on-off-83223.firebaseapp.com",
  	databaseURL: "https://led-on-off-83223-default-rtdb.firebaseio.com",
  	projectId: "led-on-off-83223",
  	storageBucket: "led-on-off-83223.appspot.com",
  	messagingSenderId: "1021140683551",
  	appId: "1:1021140683551:web:822b84c6d4a14850ee7e2a",
  	measurementId: "G-Y14W2F91X0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

$(document).ready(function(){
    var database = firebase.database();
	var Led1Status;

	database.ref().on("value", function(snap){
		Led1Status = snap.val().Led1Status;
		if(Led1Status == "1"){    // check from the firebase
			//$(".Light1Status").text("The light is off");
			document.getElementById("unact").style.display = "none";
			document.getElementById("act").style.display = "block";
		} else {
			//$(".Light1Status").text("The light is on");
			document.getElementById("unact").style.display = "block";
			document.getElementById("act").style.display = "none";
		}
	});

    $(".toggle-btn").click(function(){
		var firebaseRef = firebase.database().ref().child("Led1Status");

		if(Led1Status == "1"){    // post to firebase
			firebaseRef.set("0");
			Led1Status = "0";
		} else {
			firebaseRef.set("1");
			Led1Status = "1";
		}
	})
});