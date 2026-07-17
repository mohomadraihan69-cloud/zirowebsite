window.potatoNotice = function(){


let notice = document.createElement("div");


notice.innerHTML = `
RS.300/=
<br>
WHATSAPP - 0789288998
`;


notice.style.position="fixed";
notice.style.top="30px";
notice.style.left="50%";
notice.style.transform="translateX(-50%)";
notice.style.background="red";
notice.style.color="white";
notice.style.padding="25px 40px";
notice.style.borderRadius="15px";
notice.style.fontSize="25px";
notice.style.fontWeight="bold";
notice.style.textAlign="center";
notice.style.zIndex="9999";


document.body.appendChild(notice);



setTimeout(()=>{

notice.remove();

},5000);


}
