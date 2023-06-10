
var typed = new Typed(".fsd",{
    strings:["Full-stack Developer", "Densenvolvedor C# e .Net", "Densenvolvedor Angular", "Densenvolvedor Ionic"],
    typeSpeed:50,
    backSpeed:50,
    backDelay:1000,
    loop:true
})

function MenuHidden() {
 let menu = document.querySelector('.nav-contentt');
 let bar = document.getElementById('bar');
 let barclose = document.getElementById('barclose');
 
 if (menu.classList.contains('open')) {
   menu.classList.remove('open');
   barclose.style.display = "none";
   bar.style.display = "block";
 } else {
   menu.classList.add('open');
   bar.style.display = "none";
   barclose.style.display = "block";
}
}

var btn = document.querySelector("#back-to-top");

function btnReset(){
  btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});
}

var input = document.querySelector('#username');
var input2 = document.querySelector('#email');
var input3 = document.querySelector('#msg');

var send = document.querySelector("#btn-Send")

function sendEmail() {
    var user = input.value;
    var EmailText= input2.value;
    var msg = input3.value;
    var MsgText = ` <h2>Usuário: </h2> <h3> ${user} </h3> <h2> Mensagem:</h2><h3> ${msg} </h3>`;
  
  if(validation()){

     Email.send({
       Host : "smtp.elasticemail.com",
       Username : "kelvinamancio10@gmail.com",
       Password : "90EDD10183EA87D82F7873123AAD673F0EA3",
       To :"kelvinamancio10@gmail.com",
       From : EmailText,
       Subject : "Informações sobre serviços",
       Body : MsgText
   }).then(
       sucess => alert(sucess),
       clear()
   );}else{
    alert('preencha todas as informações!')
   }
}

function validation(){
  var user = input.value;
  var EmailText= input2.value;
  var msg = input3.value;
  var validation = EmailText != '' && user != '' &&  msg  != '' ? true :false;

  return validation;
}

function clear(){
  input.value = "";
  input2.value = "";
  input3.value = "";
}
