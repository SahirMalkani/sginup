
var firebaseConfig = {
    apiKey: "AIzaSyAo0iR8przglSEej7r78FDaiLzxFdvZNWY",
    authDomain: "sahirauth-b11f1.firebaseapp.com",
    projectId: "sahirauth-b11f1",
    storageBucket: "sahirauth-b11f1.appspot.com",
    messagingSenderId: "754045400356",
    appId: "1:754045400356:web:7cc9ea4df12ab6d9a9efb1"
  };
  
  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);
  
  function getData() {
    var email = document.getElementById("email");
  
    var pass = document.getElementById("password");
  
    firebase
      .auth()
      .createUserWithEmailAndPassword(email.value, pass.value)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);

        firebase.auth().currentUser.sendEmailVerification()
        .then(() => {
       alert("varification email sent")
        });

        setTimeout(function () {
          window.location.href = "signin.html";
        },100);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  
  var obj = {
    name: "faraz",
    age: 20,
    city: "karachi",
  };
  
  var str = JSON.stringify(obj);
  
  console.log(str);
  
  var returnObj = JSON.parse(str);
  
  console.log(returnObj);
  
  function getName() {
    var input = document.getElementById("name");
  
    var getStorageValue = localStorage.getItem("name");
  
    var OriginalValue = JSON.parse(getStorageValue);
  
    console.log(OriginalValue);
  
    if (!OriginalValue) {
      OriginalValue = [];
    }
  
    var UserObj = {
      name: input.value,
    };
  
    OriginalValue.push(UserObj);
  
    localStorage.setItem("name", JSON.stringify(OriginalValue));
  }



  
  function getData2() {
    var email = document.getElementById("email");
  
    var pass = document.getElementById("password");
  
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...   console.log(user);
      console.log(user);
     
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(errorMessage);
     
    });
  }


  function getData2pass()
    {

        // alert()
        

        var email = document.getElementById("email").value;
  

        firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
          //  console.log(email);
          console.log(email);
          console.log("succesful");


        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage);
         
        });
    



    }


function     getDatagoog(){

    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
  
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
     
     console.log(user);
      
     
      // IdP data available in result.additionalUserInfo.profile.
        // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });


}


function getg(){


    var provider = new firebase.auth.GithubAuthProvider();


    firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    var token = credential.accessToken;

    // The signed-in user info.
    var user = result.user;

    
    console.log(user);
      
    // IdP data available in result.additionalUserInfo.profile.
      // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    
    console.log(errorMessage);
     
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

}