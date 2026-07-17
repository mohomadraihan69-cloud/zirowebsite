function login(){


let user=document.getElementById("username").value;

let pass=document.getElementById("password").value;



if(user=="ziro" && pass=="1234"){


let voice=new SpeechSynthesisUtterance("Welcome to Ziro Minnu");

speechSynthesis.speak(voice);



localStorage.setItem("login","true");



setTimeout(function(){

window.location.href="index.html";

},2000);


}

else{

alert("Wrong Username or Password");

}


}






function logout(){


let voice=new SpeechSynthesisUtterance("Bye Bye Ziro Minnu");

speechSynthesis.speak(voice);



localStorage.removeItem("login");


window.location.href="login.html";


}







function showNotify(text,time){


let box=document.getElementById("notifyBox");


box.innerHTML=text;


box.style.display="block";



setTimeout(function(){

box.style.display="none";

},time);


}







function downloadFile(file,message){


showNotify(message,3000);



let a=document.createElement("a");


a.href="files/"+file;


a.download=file;


document.body.appendChild(a);


a.click();


document.body.removeChild(a);


}








function regDownload(){


downloadFile(

"ziro.rar",

"✅ Ziro Reg Download Started"

);


}








function potatoDownload(){


showNotify(

"🔴 RS.300/= WHATSAPP - 078 9288 998",

4000

);


}








function wallpaperDownload(){


downloadFile(

"files.rar",

"✅ Wallpapers Download Started"

);


}