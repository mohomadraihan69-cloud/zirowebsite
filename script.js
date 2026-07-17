import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";


import { 
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";



const firebaseConfig = {

apiKey: "AIzaSyA2QDtlK3lSuzVJKrnvUYSfjGptus2sj4M",

authDomain: "ziro-minnu.firebaseapp.com",

projectId: "ziro-minnu",

storageBucket: "ziro-minnu.firebasestorage.app",

messagingSenderId: "1028269422903",

appId: "1:1028269422903:web:b88a59407bef62115642b2"

};



const app = initializeApp(firebaseConfig);

const auth = getAuth(app);





window.registerUser = function(){


let email=document.getElementById("email").value;

let password=document.getElementById("password").value;



createUserWithEmailAndPassword(auth,email,password)

.then(()=>{

alert("Register Success");

window.location.href="login.html";

})


.catch((error)=>{

alert(error.message);

});


};





window.loginUser = function(){


let email=document.getElementById("email").value;

let password=document.getElementById("password").value;



signInWithEmailAndPassword(auth,email,password)


.then(()=>{


alert("Login Success");


localStorage.setItem("login","true");


window.location.href="index.html";


})


.catch(()=>{

alert("Wrong Email or Password");

});


};





window.logout=function(){


signOut(auth)

.then(()=>{


localStorage.removeItem("login");

alert("Bye Bye ZIRO MINNU");


window.location.href="login.html";


});


};